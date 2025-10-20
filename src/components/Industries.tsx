"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import QuoteForm from './QuoteForm';

interface IndustriesProps {
  className?: string;
}

const Industries: React.FC<IndustriesProps> = ({ className }) => {
  const industries = [
    "Contractors & Tradesmen",
    "Manufacturing & Wholesale", 
    "Commercial Motor Insurance",
    "Professional Services",
    "Healthcare & Life Sciences",
    "Technology & Media",
    "Retail & Hospitality",
    "Real Estate & Property",
    "Transport & Logistics",
    "Energy & Utilities"
  ];

  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!showModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [showModal]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('industry-card-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const cards = document.querySelectorAll('.industry-card');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`relative py-16 md:py-20 overflow-hidden ${className || ''}`}>
      {/* Full-width background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/factory.jpg"
          alt="Industrial landscape at sunset"
          fill
          className="object-cover"
          sizes="100vw"
          priority
        />
        {/* Darker overlay for better contrast */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Gradient blending - stronger at edges, transparent in middle */}
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-black via-black/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-black via-black/80 to-transparent" />
        
        {/* Subtle blur only - much lighter than before */}
        <div className="absolute inset-0 pointer-events-none backdrop-blur-[2px]" />
        
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/[0.03] rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/[0.03] rounded-full blur-[120px] animate-pulse-slow-delay" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header section */}
          <div className="text-center mb-12 fade-in-up">
            <div className="inline-flex items-center gap-2.5 px-4 py-2 bg-gradient-to-br from-white/[0.1] to-white/[0.05] border border-white/15 rounded-full backdrop-blur-xl mb-5 shadow-lg">
              <span className="w-2 h-2 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] block animate-pulse-slow" aria-hidden />
              <span className="text-white/95 text-xs font-bold uppercase tracking-wider">Industry Expertise</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 leading-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/90 drop-shadow-2xl">
              Specialised Insurance Solutions
            </h2>
            <div className="w-24 h-0.5 mx-auto rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-5 shadow-lg shadow-[#D4AF37]/30" />
            <p className="inline-block text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A635] mb-6">Across Key Industries</p>

            <p className="text-sm sm:text-base text-white/80 max-w-2xl mx-auto leading-relaxed font-light">
              With decades of combined experience, we deliver comprehensive commercial insurance coverage tailored to the specific risks and regulatory requirements of your sector.
            </p>
          </div>

          {/* Industries grid */}
          {(() => {
            const lastIndex = industries.length - 1;
            const items = industries.slice(0, lastIndex);
            const last = industries[lastIndex];
            return (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 mb-6">
                  {items.map((industry, index) => (
                    <div
                      key={industry}
                      style={{ animationDelay: `${index * 80}ms` }}
                      className="industry-card group relative rounded-xl p-5 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-[#D4AF37]/20 transform transition-all duration-500 will-change-transform focus-within:outline-none focus-within:ring-4 focus-within:ring-[#D4AF37]/30 overflow-hidden opacity-0 translate-y-8"
                      tabIndex={0}
                      role="button"
                      aria-label={industry}
                    >
                      {/* Hover glow effect */}
                      <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Shimmer effect */}
                      <div className="shimmer-effect" />

                      <div className="relative transform transition-all duration-500 group-hover:-translate-y-0.5">
                        <div className="flex items-start gap-3">
                          <div className="icon-container flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/[0.1] to-white/[0.05] border border-white/10 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                            <div className="w-5 h-5 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg shadow-[#D4AF37]/30" />
                          </div>

                          <div className="flex-1">
                            <h3 className="text-white font-bold text-base mb-1.5 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:from-white group-hover:via-[#FFD700] group-hover:to-[#D4AF37] transition-all duration-500">
                              {industry}
                            </h3>
                            <p className="text-white/70 text-xs leading-relaxed font-light group-hover:text-white/85 transition-colors duration-300">
                              Comprehensive coverage and pragmatic risk management for modern businesses.
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Border glow on hover */}
                      <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(212,175,55,0.3) inset, 0 12px 40px rgba(212,175,55,0.15)' }} />
                    </div>
                  ))}
                </div>

                {/* Bottom-centered final card */}
                <div className="mt-5 flex justify-center mb-12 lg:mb-14 fade-in-up" style={{ animationDelay: '0.6s' }}>
                  <div
                    className="industry-card group relative rounded-xl p-5 bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl hover:shadow-[#D4AF37]/20 transform transition-all duration-500 will-change-transform focus-within:outline-none focus-within:ring-4 focus-within:ring-[#D4AF37]/30 overflow-hidden w-full max-w-md opacity-0 translate-y-8"
                    tabIndex={0}
                    role="button"
                    aria-label={last}
                  >
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 pointer-events-none rounded-xl bg-gradient-to-br from-[#D4AF37]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Shimmer effect */}
                    <div className="shimmer-effect" />

                    <div className="relative transform transition-all duration-500 group-hover:-translate-y-0.5">
                      <div className="flex items-start gap-3">
                        <div className="icon-container flex-shrink-0 w-11 h-11 rounded-lg flex items-center justify-center bg-gradient-to-br from-white/[0.1] to-white/[0.05] border border-white/10 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                          <div className="w-5 h-5 bg-gradient-to-br from-[#FFD700] to-[#D4AF37] rounded-full transition-all duration-500 group-hover:scale-110 shadow-lg shadow-[#D4AF37]/30" />
                        </div>

                        <div className="flex-1">
                          <h3 className="text-white font-bold text-base mb-1.5 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/90 group-hover:from-white group-hover:via-[#FFD700] group-hover:to-[#D4AF37] transition-all duration-500">
                            {last}
                          </h3>
                          <p className="text-white/70 text-xs leading-relaxed font-light group-hover:text-white/85 transition-colors duration-300">
                            Comprehensive coverage and pragmatic risk management for modern businesses.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Border glow on hover */}
                    <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ boxShadow: '0 0 0 1px rgba(212,175,55,0.3) inset, 0 12px 40px rgba(212,175,55,0.15)' }} />
                  </div>
                </div>
              </>
            );
          })()}

          {/* Professional CTA section */}
          <div className="text-center fade-in-up" style={{ animationDelay: '0.8s' }}>
            <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/insurance-services"
                className="premium-button-primary group inline-flex items-center gap-2.5 px-7 py-3.5 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#C9A635] text-black font-bold rounded-full shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all duration-400 transform hover:-translate-y-1 hover:scale-105 text-sm"
              >
                <span className="relative z-10">Explore Our Services</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M7.5 5l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span className="shine-effect" />
              </a>

              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="premium-button-secondary group inline-flex items-center gap-2.5 px-7 py-3.5 border-2 border-white/20 backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.04] text-white font-bold rounded-full hover:border-[#D4AF37]/50 hover:bg-white/[0.12] transition-all duration-400 transform hover:-translate-y-1 hover:scale-105 shadow-lg hover:shadow-xl hover:shadow-[#D4AF37]/20 text-sm"
              >
                <span className="relative z-10">Schedule Consultation</span>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:scale-110">
                  <path d="M15.833 3.333H4.167C3.247 3.333 2.5 4.08 2.5 5V15C2.5 15.92 3.247 16.667 4.167 16.667H15.833C16.753 16.667 17.5 15.92 17.5 15V5C17.5 4.08 16.753 3.333 15.833 3.333Z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M6.667 7.5H13.333M6.667 10.833H13.333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
                <span className="glow-effect" />
              </button>
            </div>

            <p className="text-white/60 text-xs mt-6 max-w-md mx-auto leading-relaxed font-light">
              Get personalized quotes and risk assessments from our industry specialists.
            </p>
          </div>
        </div>
      </div>

      {/* QuoteForm modal with enhanced styling */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4" aria-modal="true" role="dialog">
          <div
            className="fixed inset-0 bg-black/70 backdrop-blur-md animate-fade-in"
            onClick={() => setShowModal(false)}
          />

          <div
            ref={modalRef}
            className="relative z-10 w-full max-w-2xl mx-auto bg-gradient-to-br from-slate-900 to-black border border-white/10 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 sm:p-8">
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold text-white">Get a Quote</h3>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  aria-label="Close"
                  className="ml-4 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-white/80 hover:text-white hover:bg-white/10 hover:border-[#D4AF37]/30 transition-all duration-300"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </button>
              </div>
              <QuoteForm />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.06; transform: scale(1.05); }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.07; transform: scale(1.08); }
        }
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes scale-in {
          0% { opacity: 0; transform: scale(0.95); }
          100% { opacity: 1; transform: scale(1); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 10s ease-in-out infinite;
          animation-delay: 2s;
        }
        .fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        .animate-scale-in {
          animation: scale-in 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .industry-card {
          transition: opacity 0.6s cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .industry-card.industry-card-visible {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .industry-card {
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.06),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }
        .industry-card:hover {
          box-shadow: 
            0 16px 48px rgba(0,0,0,0.5),
            0 8px 32px rgba(212,175,55,0.12),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        .shimmer-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            110deg,
            transparent 0%,
            rgba(255,255,255,0.03) 45%,
            rgba(212,175,55,0.08) 50%,
            rgba(255,255,255,0.03) 55%,
            transparent 100%
          );
          transform: translateX(-100%);
          transition: transform 800ms cubic-bezier(0.19, 1, 0.22, 1);
          pointer-events: none;
          border-radius: 1rem;
        }
        .industry-card:hover .shimmer-effect {
          transform: translateX(100%);
        }

        .icon-container {
          box-shadow: 
            0 4px 16px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }

        .premium-button-primary {
          position: relative;
          overflow: hidden;
          background-size: 200% auto;
        }
        .shine-effect {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 600ms ease;
          pointer-events: none;
          border-radius: 9999px;
        }
        .premium-button-primary:hover .shine-effect {
          transform: translateX(100%);
        }

        .premium-button-secondary {
          position: relative;
          overflow: hidden;
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
      `}</style>
    </section>
  );
};

export default Industries;