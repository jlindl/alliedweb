"use client";

import React, { useState } from "react";
import LightRays from "../../components/LightRays";
import { Header } from "../../components/Header";
import ShinyText from "../../components/shinytext";
import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import { IconType } from 'react-icons';
import { FaHammer, FaShieldAlt, FaBuilding, FaUtensils, FaIndustry, FaWrench, FaTruck, FaClinicMedical, FaHome, FaBriefcase, FaCar, FaPlane } from 'react-icons/fa';

// Only show the canonical list of cards supplied by the user.
const commercialServices = [
  { title: 'Builders & Building Contractors', blurb: 'Insurance for building contractors, site risks and contract works.', path: '/insurance-services/contractors-and-tradesmen' },
  { title: 'Professional Indemnity (Architects, Engineers, Accountants)', blurb: 'Professional services PI and support.', path: '/insurance-services/professional-indemnity' },
  { title: 'Public Liability for Small Businesses', blurb: 'Liability protection for small companies.', path: '/insurance-services/public-liability-small-businesses' },
  { title: 'Retail & Shops', blurb: 'Insurance for retail operations and shops.', path: '/insurance-services/retail-shops' },
  { title: 'Tradespeople (Carpenters, Electricians, Plumbers)', blurb: 'Tools, liability and trade packages.', path: '/insurance-services/tradespeople' },
  { title: 'Corporate Insurance & Risk Management', blurb: 'Enterprise-grade risk and insurance solutions.', path: '/insurance-services/corporate-insurance' },
  { title: 'Corporate Manufacturing', blurb: 'Property, plant and stock for manufacturers.', path: '/insurance-services/corporate-manufacturing' },
  { title: 'Corporate Logistics & Transport', blurb: 'Fleet, goods in transit and logistics risk cover.', path: '/insurance-services/corporate-logistics-transport' },
  { title: 'Corporate Real Estate & Property', blurb: 'Property owners and real estate portfolios.', path: '/insurance-services/corporate-real-estate-property' },
  { title: 'Corporate Financial & Professional Services', blurb: 'Specialist programs for financial and professional firms.', path: '/insurance-services/corporate-financial-professional-services' },
  { title: 'Corporate Healthcare & Life Sciences', blurb: 'Healthcare sector risk solutions and clinical liability.', path: '/insurance-services/corporate-healthcare-life-sciences' },
  { title: 'Corporate Energy & Utilities', blurb: 'Energy and utilities asset and liability protection.', path: '/insurance-services/corporate-energy-utilities' },
  { title: 'Corporate Technology & Media', blurb: 'Tech, media and communications sector cover.', path: '/insurance-services/corporate-technology-media' },
];

// Keep personalServices small (not part of the canonical list). If needed these can be expanded later.
const personalServices = [
  { title: 'Home (High value/other)', blurb: 'High-value home insurance and contents.', path: '/insurance-services/home-high-value-other' },
  { title: 'Motor (High Value/Other)', blurb: 'High-value vehicle cover options.', path: '/insurance-services/motor-high-value-other' },
  { title: 'Travel', blurb: 'Single trip and annual multi-trip travel cover.', path: '/insurance-services/travel' },
];

function IconForTitle({ title }: { title: string }) {
  const map: Record<string, IconType> = {
    'Builders & Building Contractors': FaHammer,
    'Self‑Employed Contractors & Sub‑Contractors': FaHammer,
    'Professional Indemnity (Architects, Engineers, Accountants)': FaBriefcase,
    'Public Liability for Small Businesses': FaShieldAlt,
    'Retail & Shops': FaUtensils,
    'Tradespeople (Carpenters, Electricians, Plumbers)': FaWrench,
    'Corporate Insurance & Risk Management': FaBuilding,
    'Corporate Manufacturing': FaIndustry,
    'Corporate Retail': FaBuilding,
    'Corporate Logistics & Transport': FaTruck,
    'Corporate Real Estate & Property': FaHome,
    'Corporate Financial & Professional Services': FaBriefcase,
    'Corporate Healthcare & Life Sciences': FaClinicMedical,
    'Corporate Energy & Utilities': FaIndustry,
    'Corporate Technology & Media': FaBriefcase,
    'Home (High value/other)': FaHome,
    'Motor (High Value/Other)': FaCar,
    'Travel': FaPlane,
  };

  const Comp = map[title] || FaBriefcase;
  return <Comp className="h-5 w-5" color="#D4AF37" aria-hidden />;
}

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function InsuranceServicesPage() {
  const [category, setCategory] = useState<'commercial' | 'personal'>('commercial');

  const toggleCategory = () => setCategory((c) => (c === 'commercial' ? 'personal' : 'commercial'));

  return (
    <main className="relative bg-black min-h-screen overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays
          raysOrigin="top-center"
          raysColor="#D4AF37"
          raysSpeed={1.5}
          lightSpread={2}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.5}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
        <div aria-hidden className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0) 45%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.95) 100%)' }} />
        {/* Ambient glow orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-slow-delay" />
      </div>

      <Header activePath="/insurance-services" />

      <div className="relative z-10">
        <section className="max-w-7xl mx-auto px-6 py-12">
          <h1 className="relative text-center text-3xl md:text-4xl lg:text-5xl font-extrabold text-[#D4AF37]">
            Insurance services
            <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <ShinyText text="Insurance services" disabled={false} speed={5} className="text-transparent bg-clip-text mix-blend-screen" />
            </span>
          </h1>
          <div className="mt-6 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent shadow-lg shadow-[#D4AF37]/30" />
          </div>

          <p className="mt-6 text-center text-base md:text-lg text-white/75 max-w-2xl mx-auto leading-relaxed font-light">
            A curated showcase of our commercial insurance solutions — explore the range of specialist cover we offer.
          </p>

          <div className="mt-10 flex items-center justify-center">
            <div className="category-toggle inline-flex items-center rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/10 p-1.5 gap-2 shadow-2xl">
              <button 
                type="button" 
                onClick={() => setCategory('commercial')} 
                className={`category-btn px-6 py-3 rounded-xl text-sm font-bold transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 ${
                  category === 'commercial' 
                    ? 'bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#C9A635] text-black shadow-lg shadow-[#D4AF37]/40 scale-105' 
                    : 'text-white/70 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                Commercial
              </button>

              {/* Removed switching arrows button for cleaner toggle UI */}

              <button 
                type="button" 
                onClick={() => setCategory('personal')} 
                className={`category-btn px-6 py-3 rounded-xl text-sm font-bold transition-all duration-400 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50 ${
                  category === 'personal' 
                    ? 'bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#C9A635] text-black shadow-lg shadow-[#D4AF37]/40 scale-105' 
                    : 'text-white/70 hover:bg-white/[0.08] hover:text-white'
                }`}
              >
                Personal
              </button>
            </div>
          </div>
        </section>
      </div>

      <div className="relative z-10">
  <div className="max-w-7xl mx-auto px-6 pb-24">
          <motion.div 
            key={category}
            variants={container} 
            initial="hidden" 
            animate="show" 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch"
          >
            {(category === 'commercial' ? commercialServices : personalServices).map((s) => (
              <motion.article key={s.title} variants={item} className="h-full">
                <Link 
                  href={s.path ?? `/insurance-services/${slugify(s.title)}`} 
                  aria-label={s.title} 
                  className="service-card group relative w-full text-left block h-full"
                >
                  <div className="service-card-inner h-full flex flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.07] to-white/[0.02] p-7 backdrop-blur-xl shadow-2xl transition-all duration-500 ease-out group-hover:scale-[1.04] group-hover:border-[#D4AF37]/30 min-h-[280px]">
                    {/* Icon container with enhanced styling */}
                    <div className="icon-wrapper mb-5 flex h-14 w-14 items-center justify-center rounded-xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-sm shadow-lg transition-all duration-400 group-hover:scale-110 group-hover:rotate-3 group-hover:border-[#D4AF37]/30 group-hover:shadow-[#D4AF37]/20">
                      <IconForTitle title={s.title} />
                    </div>

                    {/* Title with gradient effect */}
                    <h3 className="text-xl md:text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/80 group-hover:from-white group-hover:via-[#FFD700] group-hover:to-[#D4AF37] transition-all duration-400">
                      {s.title}
                    </h3>

                    {/* Divider line */}
                    <div className="my-4 h-px w-16 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full shadow-sm shadow-[#D4AF37]/20" />

                    {/* Description text */}
                    <p className="text-sm text-white/75 leading-relaxed flex-grow font-light">
                      {s.blurb}
                    </p>

                    {/* CTA footer */}
                    <div className="mt-6 flex items-center justify-between pt-4 border-t border-white/5">
                      <span className="learn-more-cta inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-white/[0.08] to-white/[0.04] text-white/80 border border-white/10 transition-all duration-400 transform group-hover:bg-gradient-to-r group-hover:from-[#D4AF37]/20 group-hover:to-[#D4AF37]/10 group-hover:border-[#D4AF37]/30 group-hover:-translate-y-0.5 group-hover:text-white group-hover:shadow-lg group-hover:shadow-[#D4AF37]/20">
                        Learn more
                      </span>
                      <span className="inline-flex items-center gap-2 text-xs font-semibold text-[#D4AF37] group-hover:text-[#FFD700] transition-colors duration-300">
                        Details
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300">
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>

                    {/* Hover glow overlay */}
                    <div className="glow-overlay" />
                  </div>

                  {/* Enhanced border glow on hover */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ boxShadow: '0 0 0 1px rgba(212,175,55,0.4) inset, 0 12px 40px rgba(212,175,55,0.2)' }} />
                </Link>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.03; transform: scale(1); }
          50% { opacity: 0.06; transform: scale(1.05); }
        }
        @keyframes pulse-slow-delay {
          0%, 100% { opacity: 0.04; transform: scale(1); }
          50% { opacity: 0.07; transform: scale(1.08); }
        }
        .animate-pulse-slow {
          animation: pulse-slow 8s ease-in-out infinite;
        }
        .animate-pulse-slow-delay {
          animation: pulse-slow-delay 10s ease-in-out infinite;
          animation-delay: 2s;
        }

        /* Category toggle enhancements */
        .category-toggle {
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }

        .category-btn {
          position: relative;
          overflow: hidden;
        }
        .category-btn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.15) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 600ms ease;
        }
        .category-btn:hover::before {
          transform: translateX(100%);
        }

        /* Service card enhancements */
        .service-card-inner {
          position: relative;
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.06),
            inset 0 -1px 0 rgba(0,0,0,0.2);
        }

        .service-card:hover .service-card-inner {
          box-shadow: 
            0 16px 48px rgba(0,0,0,0.5),
            0 8px 32px rgba(212,175,55,0.12),
            inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* Glow overlay effect */
        .glow-overlay {
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          background: radial-gradient(
            circle at 50% 50%,
            rgba(212,175,55,0.08) 0%,
            rgba(212,175,55,0.04) 30%,
            transparent 60%
          );
          opacity: 0;
          transition: opacity 500ms ease;
          pointer-events: none;
        }
        .service-card:hover .glow-overlay {
          opacity: 1;
        }

        /* Icon wrapper animation */
        .icon-wrapper {
          box-shadow: 
            0 4px 16px rgba(0,0,0,0.2),
            inset 0 1px 0 rgba(255,255,255,0.08);
        }
        .service-card:hover .icon-wrapper {
          box-shadow: 
            0 8px 24px rgba(212,175,55,0.2),
            0 4px 16px rgba(0,0,0,0.3),
            inset 0 1px 0 rgba(255,255,255,0.12);
        }

        /* Enhanced learn more button */
        .learn-more-cta {
          box-shadow: inset 0 1px 0 rgba(255,255,255,0.1);
        }

        /* Smooth performance */
        .service-card,
        .service-card-inner,
        .glow-overlay,
        .icon-wrapper,
        .learn-more-cta {
          will-change: transform, opacity;
        }
      `}</style>
    </main>
  );
}

function slugify(input: string) {
  return input
    .toLowerCase()
    .replace(/&/g, 'and')
    .replace(/[()']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
