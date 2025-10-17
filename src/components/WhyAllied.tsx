"use client";
import React, { useEffect, useRef } from 'react';
import { FaAward, FaHandsHelping, FaCogs, FaHandshake, FaMoneyBillWave, FaUserTie } from 'react-icons/fa';

interface CardItem {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

const cards: CardItem[] = [
  {
    title: 'Deep industry expertise',
    description: 'Decades of underwriting experience tailored to complex business risks — proactive guidance you can rely on.',
    icon: <FaAward size={36} color="#D4AF37" aria-hidden />,
  },
  {
    title: 'Fast, fair claims',
    description: 'Rapid claims handling and compassionate support so your business gets back to work quickly when it matters most.',
    icon: <FaHandsHelping size={36} color="#D4AF37" aria-hidden />,
  },
  {
    title: 'Custom coverage',
    description: 'Flexible policies and add-ons built around your business — not a one-size-fits-all form.',
    icon: <FaCogs size={36} color="#D4AF37" aria-hidden />,
  },
  {
    title: 'Local partnerships',
    description: 'Established broker and carrier relationships in your region to ensure fast, dependable service.',
    icon: <FaHandshake size={36} color="#D4AF37" aria-hidden />,
  },
  {
    title: 'Competitive rates',
    description: 'We shop the market and tailor options so you get robust protection at competitive pricing.',
    icon: <FaMoneyBillWave size={36} color="#D4AF37" aria-hidden />,
  },
  {
    title: 'Dedicated account service',
    description: 'Personalized account management and proactive risk advice to keep your coverage aligned with your growth.',
    icon: <FaUserTie size={36} color="#D4AF37" aria-hidden />,
  },
];

// Small Card subcomponent: simplified for glassmorphism styling
function Card({ item, idx }: { item: CardItem; idx: number }) {
  const ref = useRef<HTMLElement | null>(null);

  function onPointerMove(e: React.PointerEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = `${e.clientX - rect.left}px`;
    const py = `${e.clientY - rect.top}px`;
    ref.current.style.setProperty('--glow-x', px);
    ref.current.style.setProperty('--glow-y', py);
    ref.current.style.setProperty('--mouse-x', `${((e.clientX - rect.left) / rect.width) * 100}%`);
    ref.current.style.setProperty('--mouse-y', `${((e.clientY - rect.top) / rect.height) * 100}%`);
  }

  function onPointerLeave() {
    if (!ref.current) return;
    ref.current.style.setProperty('--glow-x', '50%');
    ref.current.style.setProperty('--glow-y', '50%');
    ref.current.style.setProperty('--mouse-x', '50%');
    ref.current.style.setProperty('--mouse-y', '50%');
  }

  return (
    <article
      ref={ref}
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      aria-labelledby={`card-${idx}-title`}
      tabIndex={0}
      style={{ transitionDelay: `${idx * 80}ms` }}
      className="why-card group bg-black/30 backdrop-blur-md border border-white/6 rounded-3xl p-8 min-h-[260px] flex flex-col transition-all duration-500 ease-out opacity-0 translate-y-6"
    >
      <div className="card-shine" />
      <div className="mb-5">
        <div className="icon-wrapper w-14 h-14 flex items-center justify-center text-[#D4AF37] rounded-2xl bg-gradient-to-br from-white/8 to-white/2 border border-white/8 shadow-lg shadow-black/20">
          {item.icon}
        </div>
      </div>
      <h3 id={`card-${idx}-title`} className="bg-clip-text text-transparent bg-gradient-to-br from-white via-[#FFD700] to-[#D4AF37] text-xl font-bold mb-3 tracking-tight leading-tight">{item.title}</h3>
      <p className="text-white/75 text-sm leading-relaxed mt-auto font-light">{item.description}</p>
    </article>
  );
}

export default function WhyAllied(): React.ReactElement {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    const els = document.querySelectorAll('.why-card');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      aria-labelledby="why-heading"
      className="relative bg-black text-white py-24 font-sans antialiased overflow-hidden"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
    >
      {/* Ambient background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#D4AF37]/[0.015] to-transparent pointer-events-none" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 text-center">
        <h2 id="why-heading" className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-white/80">
          Why Businesses Trust Allied
        </h2>
        <div className="mx-auto my-5 w-24 h-1 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent opacity-80 shadow-lg shadow-[#D4AF37]/20" />
        <p className="mt-4 text-white/75 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
          We combine deep expertise, responsive claims service, and flexible policies to protect what matters most to your business.
        </p>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {cards.map((c, idx) => (
            <Card key={c.title} item={c} idx={idx} />
          ))}
        </div>
      </div>

      <style>{` 
        /* Card base with enhanced glassmorphism */
        .why-card { 
          transform-origin: center; 
          position: relative; 
          overflow: hidden; 
          background: linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%);
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          border-radius: 1.5rem; 
          border: 1px solid rgba(255,255,255,0.06);
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }

        /* Animated shine overlay */
        .card-shine {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(255,255,255,0.03) 45%,
            rgba(212,175,55,0.08) 50%,
            rgba(255,255,255,0.03) 55%,
            transparent 100%
          );
          transform: translateX(-100%) translateY(-100%) rotate(45deg);
          transition: transform 800ms cubic-bezier(0.19, 1, 0.22, 1);
          pointer-events: none;
          z-index: 1;
        }
        .why-card:hover .card-shine {
          transform: translateX(100%) translateY(100%) rotate(45deg);
        }

        /* Entrance animation with spring physics */
        .why-card { 
          transform: translateY(20px) scale(0.96); 
          opacity: 0; 
        }
        .why-card.in-view { 
          transform: translateY(0) scale(1); 
          opacity: 1; 
          transition: 
            transform 600ms cubic-bezier(0.16, 1, 0.3, 1), 
            opacity 600ms ease;
        }

        /* Advanced hover state with multiple effects */
        .why-card:hover, 
        .why-card:focus-within { 
          transform: translateY(-8px) scale(1.02); 
          box-shadow: 
            0 24px 48px rgba(0,0,0,0.4),
            0 16px 64px rgba(212,175,55,0.12),
            inset 0 1px 0 rgba(255,255,255,0.12),
            inset 0 0 24px rgba(212,175,55,0.03);
          border-color: rgba(212,175,55,0.15);
          background: linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
          transition: 
            transform 400ms cubic-bezier(0.16, 1, 0.3, 1),
            box-shadow 400ms ease,
            border-color 400ms ease,
            background 400ms ease;
        }

        /* Enhanced radial glow effect */
        .why-card::before { 
          content: ""; 
          position: absolute; 
          inset: -40%; 
          pointer-events: none; 
          transform: scale(0.92); 
          opacity: 0; 
          transition: opacity 300ms ease, transform 300ms cubic-bezier(0.16, 1, 0.3, 1); 
          z-index: 0; 
          background: radial-gradient(
            circle at var(--mouse-x, 50%) var(--mouse-y, 50%), 
            rgba(212,175,55,0.22) 0%, 
            rgba(212,175,55,0.12) 15%, 
            rgba(212,175,55,0.06) 30%, 
            rgba(212,175,55,0.02) 45%,
            transparent 65%
          ); 
          filter: blur(40px); 
        }
        .why-card:hover::before, 
        .why-card:focus-within::before { 
          opacity: 1; 
          transform: scale(1.05); 
        }

        /* Subtle border shimmer on hover */
        .why-card::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 1.5rem;
          padding: 1px;
          background: linear-gradient(
            135deg,
            transparent 0%,
            rgba(212,175,55,0.3) 40%,
            rgba(212,175,55,0.5) 50%,
            rgba(212,175,55,0.3) 60%,
            transparent 100%
          );
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 400ms ease;
          pointer-events: none;
          z-index: 3;
        }
        .why-card:hover::after {
          opacity: 0.4;
        }

        /* Content layering */
        .why-card > * { 
          position: relative; 
          z-index: 2; 
        }

        /* Focus state */
        .why-card:focus-visible { 
          outline: 2px solid rgba(212,175,55,0.4); 
          outline-offset: 8px; 
        }

        /* Enhanced icon circle */
        .icon-wrapper { 
          background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%);
          border: 1px solid rgba(255,255,255,0.1);
          box-shadow: 
            0 4px 16px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.1);
          transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .why-card:hover .icon-wrapper {
          transform: scale(1.08) rotate(3deg);
          box-shadow: 
            0 8px 24px rgba(212,175,55,0.15),
            0 4px 16px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.15);
          border-color: rgba(212,175,55,0.2);
        }
        .icon-wrapper svg { 
          display: block; 
          filter: drop-shadow(0 2px 4px rgba(212,175,55,0.3));
          transition: filter 400ms ease;
        }
        .why-card:hover .icon-wrapper svg {
          filter: drop-shadow(0 4px 8px rgba(212,175,55,0.5));
        }

        /* Enhanced title gradient */
        .why-card h3 { 
          letter-spacing: -0.02em; 
          font-size: 1.125rem;
          text-shadow: 0 2px 8px rgba(212,175,55,0.2);
          transition: text-shadow 400ms ease;
        }
        .why-card:hover h3 {
          text-shadow: 0 4px 12px rgba(212,175,55,0.35);
        }

        /* Refined description text */
        .why-card p { 
          color: rgba(255,255,255,0.75); 
          line-height: 1.6;
          transition: color 400ms ease;
        }
        .why-card:hover p {
          color: rgba(255,255,255,0.85);
        }

        /* Smooth performance */
        .why-card,
        .why-card::before,
        .why-card::after,
        .card-shine,
        .icon-wrapper {
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
}


