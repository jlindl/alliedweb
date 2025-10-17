"use client";

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence, PanInfo } from "framer-motion";

export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  role?: string;
  company?: string;
  logoUrl?: string;
  avatarUrl?: string;
  rating?: number;
  href?: string;
};

type Props = {
  items?: Testimonial[];
  autoPlay?: boolean;
  loop?: boolean;
  className?: string;
};

const mock: Testimonial[] = [
  {
    id: "t1",
    quote:
      "Allied Insurance have managed our insurance program for more than seven years, ensuring we get the right insurance at the right price. More than this, they provide us with expert advice and guidance when we need it, full annual reviews of our business insurance requirements and an experienced team available when we need them. An excellent combination.",
    author: "M Bailey",
    role: "Director of Asset Managing",
    company: "Plant and Machinery Valuation Co",
    rating: 5,
  },
  {
    id: "t2",
    quote:
      "We have been with Allied since our business was established in 2002. Since then our Company has grown considerably and Allied have continued to adapt our insurance policies in line with Company growth and changes. They continue to provide excellent service and advice with day to day dealings and have been of invaluable assistance in the event of claims.",
    author: "G Clarke",
    role: "Director",
    company: "Precision Engineering Co",
    rating: 5,
  },
  {
    id: "t3",
    quote:
      "Allied have been our brokers for over 15 years over which time they have remained extremely competitive and have continued to provide an excellent level of service to suit our growing business’s needs. Having suffered a large claim recently the advice provided to us was invaluable in achieving the final settlement from insurers. We would highly recommend to any business.",
    author: "K Ramsay",
    role: "",
    company: "UK Timber Importers",
    rating: 5,
  },
  {
    id: "t4",
    quote:
      "We have worked with Allied now for several years and due to their expertise and friendly service. We have gradually placed all of our company insurances with them. For us they are our 'one stop shop' and take the hassle away from scouring around looking for a better deal. Allied always provide a fair and reasonable deal.",
    author: "K Thompson",
    role: "Director",
    company: "Large Electrical Contracting Co",
    rating: 5,
  },
  {
    id: "t5",
    quote:
      "Allied Insurance Services Limited have been the Insurance providers for Tate Security Technology Limited for a number of years and have always offered professional advice, provided prompt responses to our company's changing needs and were able to assist and advise us in the event of claims. We find them both friendly & courteous to deal with and competitive within the market.",
    author: "S Tabern",
    role: "Director",
    company: "Security System Installation Co",
    rating: 5,
  },
  {
    id: "t6",
    quote:
      "For more than seven years Allied have managed our insurance program ensuring we get the right insurance at the right price. They provide us with expert advice and guidance when we need it, full annual reviews of our business insurance and an experienced team available when we need them.",
    author: "Catherine Jones",
    role: "",
    company: "",
    rating: 5,
  },
];

export default function TestimonialsCarousel({ items = mock, autoPlay = true, className = "" }: Props) {
  const list = useMemo(() => items, [items]);
  const count = list.length;
  const [index, setIndex] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const autoplayRef = useRef<number | null>(null);
  const isHover = useRef(false);
  const directionRef = useRef(1);

  // prefers-reduced-motion state
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const m = window.matchMedia('(prefers-reduced-motion: reduce)');
      setReducedMotion(m.matches);
      const handler = () => setReducedMotion(m.matches);
      m.addEventListener('change', handler);
      return () => m.removeEventListener('change', handler);
    }
  }, []);

  // Section visibility for scroll-in animation
  const sectionRef = useRef<HTMLElement | null>(null);
  const [sectionInView, setSectionInView] = useState(false);
  useEffect(() => {
    if (reducedMotion) {
      setSectionInView(true);
      return;
    }
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSectionInView(true);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [reducedMotion]);

  // Autoplay (respect reduced motion)
  useEffect(() => {
    if (!autoPlay || reducedMotion) return;
    function tick() {
      directionRef.current = 1;
      setExpanded(false);
      setIndex((i) => (i + 1) % count);
    }
    if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    autoplayRef.current = window.setInterval(() => {
      // pause when not in viewport for perf
      if (!isHover.current && sectionInView) tick();
    }, 6000);
    return () => {
      if (autoplayRef.current) window.clearInterval(autoplayRef.current);
    };
  }, [autoPlay, count, reducedMotion, sectionInView]);

  // Keyboard
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowLeft') { directionRef.current = -1; setExpanded(false); setIndex((i) => (i - 1 + count) % count); }
      if (e.key === 'ArrowRight') { directionRef.current = 1; setExpanded(false); setIndex((i) => (i + 1) % count); }
      if (e.key === 'Home') setIndex(0);
      if (e.key === 'End') setIndex(count - 1);
    }
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [count]);

  const prev = useCallback(() => {
    directionRef.current = -1;
    setExpanded(false);
    setIndex((i) => (i - 1 + count) % count);
    // focus container but avoid scrolling the page
    try {
      if (containerRef.current && document.activeElement !== containerRef.current) {
        focusPreventScroll(containerRef.current);
      }
    } catch {
      containerRef.current?.focus();
    }
  }, [count]);

  const next = useCallback(() => {
    directionRef.current = 1;
    setExpanded(false);
    setIndex((i) => (i + 1) % count);
    try {
      if (containerRef.current && document.activeElement !== containerRef.current) {
        focusPreventScroll(containerRef.current);
      }
    } catch {
      containerRef.current?.focus();
    }
  }, [count]);

  // motion tilt values (small) for active card (throttled via rAF)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  // softer springs to reduce CPU and jitter
  useSpring(mx, { stiffness: 120, damping: 20 });
  useSpring(my, { stiffness: 120, damping: 20 });
  const rafRef = useRef<number | null>(null);
  const lastPointer = useRef<{ x: number; y: number } | null>(null);
  
  // helper to focus without causing scroll (typed)
  function focusPreventScroll(el: HTMLElement | null) {
    if (!el) return;
    try {
      // some browsers support FocusOptions.preventScroll
      (el as HTMLElement).focus((({ preventScroll: true } as unknown) as FocusOptions));
    } catch {
      el.focus();
    }
  }
  function onPointerMove(e: React.PointerEvent) {
    if (reducedMotion) return;
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    lastPointer.current = { x: px, y: py };
    // throttle updates via rAF
    if (rafRef.current == null) {
      rafRef.current = window.requestAnimationFrame(() => {
        rafRef.current = null;
        const p = lastPointer.current;
        if (!p) return;
        // smaller tilt multipliers to reduce transform intensity
        mx.set(p.x * 4);
        my.set(p.y * -4);
        // set CSS vars for glow positioning (percent)
        try {
          const pxPct = `${(p.x + 0.5) * 100}%`;
          const pyPct = `${(p.y + 0.5) * 100}%`;
          el.style.setProperty('--x', pxPct);
          el.style.setProperty('--y', pyPct);
        } catch {
          // ignore
        }
      });
    }
  }
  function onPointerLeave() { mx.set(0); my.set(0); }
  function onPointerEnter() { isHover.current = true; }
  function onPointerOut() { isHover.current = false; }

  const variants = {
    enter: (dir: number) => ({ x: dir > 0 ? 200 : -200, opacity: 0, scale: 0.992 }),
    center: { x: 0, opacity: 1, scale: 1, rotateY: 0, transition: { duration: 0.45 } },
    exit: (dir: number) => ({ x: dir > 0 ? -200 : 200, opacity: 0, scale: 0.992, transition: { duration: 0.28 } }),
  } as const;

  // announce for screen readers
  const srRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    if (srRef.current) srRef.current.textContent = `${index + 1} of ${count}: ${list[index].author} — ${list[index].quote.slice(0, 120)}...`;
  }, [index, count, list]);

  // focus on container when navigation occurs
  useEffect(() => {
    const t = setTimeout(() => {
      try {
        if (containerRef.current && document.activeElement !== containerRef.current) {
          focusPreventScroll(containerRef.current);
        }
      } catch {
        containerRef.current?.focus();
      }
    }, 120);
    return () => clearTimeout(t);
  }, [index]);

  // cleanup rAF on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // drag handling for active card
  function onDragEnd(_: PointerEvent | MouseEvent, info: PanInfo) {
    const thresh = 80;
    if (info.offset.x > thresh || info.velocity.x > 500) {
      prev();
    } else if (info.offset.x < -thresh || info.velocity.x < -500) {
      next();
    }
  }

  return (
    <section ref={sectionRef} className={`w-full py-16 bg-black ${className}`} role="region" aria-label="Client testimonials">
      <motion.div className="max-w-7xl mx-auto px-4" initial={{ opacity: 0, y: 24 }} animate={sectionInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }} transition={{ duration: 0.7, ease: 'easeOut' }}>
        <h2 className="text-center text-3xl md:text-4xl lg:text-5xl font-extrabold mb-2 text-white">What Our Clients Say</h2>
        <p className="text-center text-white/70 max-w-2xl mx-auto mb-8 text-sm md:text-base">Real-world outcomes from businesses that trust Allied for smarter, tailored commercial insurance.</p>

        <div className="relative">
          <div className="flex items-center justify-center">
            <button aria-label="Previous testimonial" onClick={prev} className="hidden md:inline-flex items-center justify-center mr-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A87900] text-black px-4 py-2 shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30">‹</button>

            <div ref={containerRef} onPointerMove={onPointerMove} onPointerLeave={() => { onPointerLeave(); onPointerOut(); }} onPointerEnter={onPointerEnter} onFocus={onPointerEnter} onBlur={onPointerOut} className="w-full flex items-center justify-center testimonial-focus" tabIndex={0}>
              <div className="relative w-full flex items-center justify-center" style={{ minHeight: 260 }}>
                <AnimatePresence initial={false} custom={directionRef.current}>
                  <motion.div key={list[index].id} custom={directionRef.current} variants={variants} initial="enter" animate="center" exit="exit" className="absolute left-1/2 -translate-x-1/2" style={{ width: 'min(980px,96%)' }}>
                    <motion.div
                      style={{ rotateY: reducedMotion ? 0 : mx, rotateX: reducedMotion ? 0 : my }}
                      transition={{ type: 'spring', stiffness: 280, damping: 30 }}
                      className="mx-auto"
                      drag={!reducedMotion ? 'x' : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      dragElastic={0.12}
                      onDragEnd={onDragEnd}
                    >
                      <div className="testimonial-card bg-black/55 backdrop-blur-md border border-white/8 rounded-2xl px-4 pb-4 pt-8 min-h-[260px] flex flex-col justify-between overflow-hidden" style={{ willChange: 'transform' }}>
                        {/* Author / role positioned top-left so content flows below */}
                        <div className="absolute -top-3 left-3 text-left">
                          <div className="text-[#D4AF37] font-semibold">{list[index].author}</div>
                          <div className="text-white/70 text-sm">{list[index].role}{list[index].company ? ` — ${list[index].company}` : ''}</div>
                        </div>

                        <div className={`mt-0 text-white text-xl md:text-2xl leading-snug font-medium overflow-hidden ${expanded ? '' : 'clamp-6'}`}>“{list[index].quote}”</div>

                        <div className="mt-4 flex items-center justify-end gap-4">
                          {list[index].href && (
                            <a href={list[index].href} className="text-[#D4AF37] underline-offset-4 hover:underline">Read case study</a>
                          )}
                          <button type="button" onClick={() => setExpanded((s) => !s)} className="text-sm text-white/80 underline-offset-2 hover:text-white focus:outline-none">{expanded ? 'Show less' : 'Read more'}</button>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <button aria-label="Next testimonial" onClick={next} className="hidden md:inline-flex items-center justify-center ml-6 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#A87900] text-black px-4 py-2 shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/30">›</button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            {list.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => { directionRef.current = i > index ? 1 : -1; setExpanded(false); setIndex(i); }}
                className={`relative w-4 h-4 rounded-full p-[2px] focus:outline-none ${i === index ? 'bg-transparent' : 'bg-white/10'}`}
              >
                <span className={`block w-full h-full rounded-full ${i === index ? 'bg-gradient-to-br from-[#D4AF37] to-[#A87900]' : 'bg-white/20'}`} />
                {i === index && !reducedMotion && (
                  <span key={`prog-${index}`} className="absolute left-[-6px] bottom-[-8px] h-1 w-[calc(100%+12px)] origin-left rounded-full" style={{ background: 'linear-gradient(90deg,#D4AF37,#A87900)', animation: `progress 6000ms linear` }} />
                )}
              </button>
            ))}
          </div>

        </div>
      </motion.div>

      <div ref={srRef} className="sr-only" aria-live="polite" />

      <style>{`
        .clamp-6 { display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 6; overflow: hidden; }

        /* Testimonial card glow and polish */
        .testimonial-card { position: relative; }
        .testimonial-card::before { content: ''; position: absolute; inset: -50%; z-index: 0; pointer-events: none; transition: opacity .36s ease, transform .36s ease; opacity: 0; transform: scale(.95); background: radial-gradient(circle at var(--x,50%) var(--y,50%), rgba(212,175,55,0.09) 0%, rgba(212,175,55,0.05) 18%, transparent 40%); filter: blur(32px); }
        .testimonial-card:hover::before, .testimonial-card:focus-within::before { opacity: 0.95; transform: scale(1); }
        .testimonial-card > * { position: relative; z-index: 2; }

        /* make sure rounded corners and inner content clip properly */
        .testimonial-card { overflow: hidden; }

        /* Bullet focus and hit area */
        button[aria-label^='Go to slide'] { transition: transform .18s ease; }
        button[aria-label^='Go to slide']:focus-visible { box-shadow: 0 0 0 4px rgba(212,175,55,0.08); transform: scale(1.08); }

        @keyframes progress { 0% { transform: scaleX(0); } 100% { transform: scaleX(1); } }

        /* Remove default browser "white box" focus and provide a subtle accessible ring */
        .testimonial-focus:focus { outline: none; }
        .testimonial-focus:focus-visible { box-shadow: 0 0 0 6px rgba(212,175,55,0.08); border-radius: 0.75rem; }
      `}</style>
    </section>
  );
}
