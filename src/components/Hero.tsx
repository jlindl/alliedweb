"use client";
import React, { useRef, useState, useEffect } from "react";
import Plasma from "./Plasma";
import { Header } from "./Header";
import Image from 'next/image';
import LogoSrc from './assets/logo.png';
// removed unused motion import

// Types
export interface HeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  onPrimary?: () => void;
  onSecondary?: () => void;
}



export function Hero({ title, subtitle, onPrimary }: HeroProps) {
  // Parallax effect for card stack
  const groupRef = useRef<HTMLDivElement>(null);

  // Image carousel (replaces rotating metric cards)
  // Using existing industry images from the project's public/images folder
  const images = [
    { src: '/images/contractor-hero.jpg', alt: 'Contractors and Tradespeople' },
    { src: '/images/corporateinsurance.jpg', alt: 'Corporate Insurance' },
    { src: '/images/corporateproperty.jpg', alt: 'Commercial Property' },
    { src: '/images/corporateretail.jpg', alt: 'Corporate Retail' },
    { src: '/images/energy.jpg', alt: 'Energy and utilities' },
    { src: '/images/factory.jpg', alt: 'Factory / Industrial' },
    { src: '/images/healthcare.jpg', alt: 'Healthcare and life sciences' },
    { src: '/images/manufacturing.jpg', alt: 'Manufacturing Industry' },
    { src: '/images/Proindem.jpg', alt: 'Professional indemnity / financial services' },
    { src: '/images/retail.jpeg', alt: 'Retail environments' },
    { src: '/images/smallbiz.jpg', alt: 'Small business and retail' },
    { src: '/images/techmed.jpg', alt: 'Technology and media' },
    { src: '/images/tradesppl.jpg', alt: 'Tradespeople at work' },
    { src: '/images/transport.jpg', alt: 'Logistics and Transport' },
  ];

  // show one image at a time (not an auto-rotating carousel)
  const [activeIndex, setActiveIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Simple auto-advance timer (pauses when user manually advances)
  const autoTimer = useRef<ReturnType<typeof setInterval> | null>(null);
  // Slightly faster auto-advance: 5s default
  const startAuto = (delay = 5000) => {
    if (autoTimer.current) clearInterval(autoTimer.current);
    autoTimer.current = setInterval(() => {
      setPrevIndex((p) => (p === null ? activeIndex : p));
      setActiveIndex((i) => (i + 1) % images.length);
      setIsTransitioning(true);
      setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(null);
      }, 450);
    }, delay);
  };
  const stopAuto = () => {
    if (autoTimer.current) {
      clearInterval(autoTimer.current);
      autoTimer.current = null;
    }
  };

  useEffect(() => {
    startAuto();
    return () => stopAuto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Animate on load: fade+translate (Tailwind animate + custom keyframes)
  // For simplicity, use Tailwind's built-in transition utilities

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative bg-black overflow-hidden font-sans antialiased"
      style={{ fontFamily: 'Inter, ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial' }}
    >
      {/* Header sits inside the hero so the Plasma covers both header + hero */}
      <Header activePath="/" onQuoteClick={onPrimary} />

      {/* Plasma background */}
      <div className="absolute inset-0 z-0 pointer-events-none min-h-[600px]">
        <Plasma
          color="#B8860B"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />
      </div>

      {/* Ambient glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#D4AF37]/[0.03] rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[#D4AF37]/[0.03] rounded-full blur-[120px] animate-pulse-slow-delay pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 py-24 md:py-32 gap-12">
        {/* Left Block */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          {/* Logo + gold label */}
          <div className="mb-6 flex items-center gap-4 animate-fadein-down">
            <div className="w-20 h-20 relative flex-shrink-0">
              <Image src={LogoSrc} alt="Allied logo" width={80} height={80} className="w-20 h-20 object-contain" priority />
            </div>
            <div className="leading-tight">
              <div className="bg-clip-text text-transparent font-semibold uppercase text-lg md:text-xl bg-gradient-to-r from-white via-[#FFD700] to-[#D4AF37]">Allied Insurance Services</div>
              <div className="bg-clip-text text-transparent text-sm md:text-base mt-0.5 bg-gradient-to-r from-white via-[#FFD700] to-[#D4AF37]">Commercial insurance specialists</div>
            </div>
          </div>

          <h1
            id="hero-heading"
            className="text-white font-extrabold text-5xl md:text-7xl leading-tight tracking-tight mb-6 animate-fadein-down drop-shadow-2xl"
            style={{ animationDelay: "0.05s", lineHeight: 1.03, textShadow: '0 4px 24px rgba(0,0,0,0.5), 0 2px 8px rgba(212,175,55,0.2)' }}
          >
            {title}
          </h1>

          {subtitle && (
            <p className="text-white/80 text-lg md:text-xl max-w-2xl mb-10 animate-fadein-down leading-relaxed font-light" style={{ animationDelay: "0.1s", textShadow: '0 2px 8px rgba(0,0,0,0.4)' }}>
              {subtitle}
            </p>
          )}

          <div className="flex flex-wrap gap-4 items-center animate-fadein-up" style={{ animationDelay: "0.15s" }}>
            <a 
              href="/quote" 
              className="premium-button-primary group relative overflow-hidden rounded-full px-8 py-4 text-base font-bold text-black bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A635] bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-400 transform-gpu hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/40 shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/50"
            >
              <span className="relative z-10 flex items-center gap-2">
                Get a Quote
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              <span className="shine-effect" />
            </a>

            <button 
              className="premium-button-secondary group relative overflow-hidden rounded-full px-8 py-4 text-base font-bold text-white backdrop-blur-xl bg-gradient-to-br from-white/[0.1] to-white/[0.05] border border-white/20 transition-all duration-400 transform-gpu hover:-translate-y-1 hover:scale-105 hover:border-[#D4AF37]/50 hover:bg-white/[0.12] focus:outline-none focus:ring-4 focus:ring-[#D4AF37]/30 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Learn more
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
              <span className="glow-effect" />
            </button>
          </div>
        </div>

        {/* Right Block: Redesigned Card carousel (lg+) */}
        <div ref={groupRef} className="hidden lg:flex w-1/2 justify-end items-center relative">
          <div className="relative flex items-center justify-center">
            {/* Single large square image (no carousel) - click to advance */}
            <div className="relative w-[520px] h-[520px] overflow-visible transition-transform duration-700 ease-out">
              {/* layered images for crossfade */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="relative w-[520px] h-[520px] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/8 transform-gpu"
                  style={{ transform: 'rotate(3deg)' }}
                >
                  {/* previous image (fades out) */}
                  {prevIndex !== null && (
                    <div className={`absolute inset-0 hero-layer ${isTransitioning ? 'fade-out' : 'hidden'}`}>
                      <Image src={images[prevIndex].src} alt={images[prevIndex].alt} width={780} height={780} className="object-cover object-center w-full h-full block" />
                    </div>
                  )}

                  {/* active image (fades in) */}
                  <button
                    type="button"
                    onClick={() => {
                      // manual advance
                      if (autoTimer.current) clearInterval(autoTimer.current);
                      setPrevIndex(activeIndex);
                      setActiveIndex((i) => (i + 1) % images.length);
                      setIsTransitioning(true);
                      setTimeout(() => {
                        setIsTransitioning(false);
                        setPrevIndex(null);
                        startAuto();
                      }, 450);
                    }}
                    aria-label="Advance hero image"
                    className="absolute inset-0 w-full h-full block focus:outline-none"
                  >
                    <div className={`absolute inset-0 hero-layer ${isTransitioning ? 'fade-in' : 'visible'}`}>
                      <Image src={images[activeIndex].src} alt={images[activeIndex].alt} width={780} height={780} className="object-cover object-center w-full h-full block" />
                    </div>
                  </button>

                  {/* decorative clipped overlay for improved organic shape */}
                  <div className="pointer-events-none absolute inset-0 rounded-3xl" style={{ mixBlendMode: 'soft-light', background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.18) 70%)' }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced keyframes and styles */}
      <style>{`
        @keyframes fadein-down {
          0% { opacity: 0; transform: translateY(-24px); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes fadein-up {
          0% { opacity: 0; transform: translateY(24px); }
          100% { opacity: 1; transform: none; }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.06; transform: scale(1.05); }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.07; transform: scale(1.08); }
        }
        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.15); opacity: 0.15; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        .animate-fadein-down {
          animation: fadein-down 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-fadein-up {
          animation: fadein-up 0.7s cubic-bezier(.4,0,.2,1) both;
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-ping-slow {
          animation: ping-slow 3s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        /* Premium button primary */
        .premium-button-primary {
          background-size: 200% auto;
        }
        .shine-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 600ms ease;
          pointer-events: none;
        }
        .premium-button-primary:hover .shine-effect {
          transform: translateX(100%);
        }

        .bg-size-200 { background-size: 200% auto; }
        .bg-pos-0 { background-position: 0% center; }
        .bg-pos-100 { background-position: 100% center; }

        /* Premium button secondary */
        .premium-button-secondary {
          box-shadow: 0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.1);
        }
        .premium-button-secondary:hover {
          box-shadow: 0 12px 40px rgba(212,175,55,0.2), 0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.15);
        }
        .glow-effect {
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: radial-gradient(circle at 50% 50%, rgba(212,175,55,0.15) 0%, transparent 70%);
          opacity: 0;
          transition: opacity 400ms ease;
          pointer-events: none;
        }
        .premium-button-secondary:hover .glow-effect {
          opacity: 1;
        }

        /* New card stack styling */
        .card-stack-item-new {
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          box-shadow: 
            0 20px 60px rgba(0,0,0,0.4),
            0 8px 32px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }

        .card-stack-item-new:hover {
          border-color: rgba(212,175,55,0.2);
        }

        /* Hero image layered crossfade */
        .hero-layer {
          transition: opacity 700ms cubic-bezier(.2,.9,.3,1), transform 700ms cubic-bezier(.2,.9,.3,1);
          will-change: opacity, transform;
        }
        .hero-layer.visible { opacity: 1; transform: scale(1); }
        .hero-layer.hidden { opacity: 0; transform: scale(1.02); }
        .hero-layer.fade-in { opacity: 1; transform: scale(1); }
        .hero-layer.fade-out { opacity: 0; transform: scale(0.98); }

        /* Smooth performance */
        .premium-button-primary,
        .premium-button-secondary,
        .card-stack-item-new,
        .shine-effect,
        .glow-effect {
          will-change: transform, opacity;
        }
      `}</style>
    </section>
  );
} 
