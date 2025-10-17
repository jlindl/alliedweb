"use client";

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { Header } from '../../../components/Header';
import { motion, AnimatePresence } from 'framer-motion';

const GOLD = '#D4AF37';


const RISK_TO_COVERS: Record<string, string[]> = {
  'Client or third‑party liability claims': ['Public and Products Liability'],
  'Loss of tools or materials': ['Tools', 'Goods in transit'],
  'Downtime due to disputes or delays': ['Legal Expenses', 'Business interruption'],
  'Errors or omissions in advice or work': ['Professional Indemnity'],
  'Workplace safety issues': ["Employers' Liability", 'Public and Products Liability'],
};

const COVER_ITEMS = [
  { key: 'pl', title: 'Public and Products Liability', body: 'Tailored public liability to protect you against claims from third parties for injury or damage.' },
  { key: 'pi', title: 'Professional Indemnity', body: 'Cover for claims arising from advice, design or workmanship where you are liable for financial loss.' },
  { key: 'tools', title: 'Tools and Materials', body: 'Insurance for your portable tools, equipment and materials against theft or damage.' },
  { key: 'bi', title: 'Business Interruption', body: 'Protection for lost income when your business is disrupted by an insured event.' },
  { key: 'legal', title: 'Legal Expenses', body: 'Support for dispute resolution, contract issues and legal costs where covered.' },
];

// Audience scoper for self-employed contractors
const SCOPERS = ['Sole trader', 'Small contractor (2-10)', 'Sub-contractor'];

const DEFAULT_EASE: [number, number, number, number] = [0.4, 0, 0.2, 1];
const pageVariants = { hidden: { opacity: 0, y: 8 }, enter: { opacity: 1, y: 0, transition: { duration: 0.5, ease: DEFAULT_EASE } } };
const sectionVariants = { hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: DEFAULT_EASE } } };
const accordionContent = { hidden: { opacity: 0, height: 0 }, show: { opacity: 1, height: 'auto', transition: { duration: 0.35, ease: DEFAULT_EASE } }, exit: { opacity: 0, height: 0, transition: { duration: 0.25, ease: DEFAULT_EASE } } };

export default function SelfEmployedContractorsPage() {
  const [scoper, setScoper] = useState<string>(SCOPERS[0]);
  const [openKeys, setOpenKeys] = useState<string[]>([COVER_ITEMS[0].key]);
  const [selectedRisks, setSelectedRisks] = useState<string[]>([]);

  const highlightedCovers = useMemo(() => {
    const s = new Set<string>();
    selectedRisks.forEach((r) => (RISK_TO_COVERS[r] || []).forEach((c) => s.add(c)));
    if (scoper === 'Small contractor (2-10)') s.add("Employers' Liability");
    if (scoper === 'Sub-contractor') s.add('Tools');
    return s;
  }, [selectedRisks, scoper]);

  function toggleAccordion(key: string) { setOpenKeys((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key])); }
  function toggleRisk(r: string) { setSelectedRisks((prev) => (prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r])); }

  return (
    <motion.div initial="hidden" animate="enter" variants={pageVariants} className="min-h-screen w-full relative overflow-hidden text-white">
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }} aria-hidden>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #040404 0%, #020202 60%, #000000 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, opacity: 0.22, backgroundImage: "repeating-linear-gradient(45deg, rgba(255,255,255,0.02) 0 1px, transparent 1px 6px)" }} />
        <div style={{ position: 'absolute', top: -160, left: -160, width: 900, height: 520, borderRadius: '50%', filter: 'blur(40px)', opacity: 0.18, background: 'radial-gradient(circle at 20% 20%, rgba(212,175,55,0.18), rgba(212,175,55,0.06) 30%, rgba(212,175,55,0) 60%)', transform: 'rotate(-12deg)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 35%, rgba(0,0,0,0.6) 75%, rgba(0,0,0,0.95) 100%)' }} />
      </div>

      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.12, background: `radial-gradient(60% 38% at 50% 0%, ${GOLD} 0%, rgba(212,175,55,0.06) 35%, rgba(0,0,0,0) 70%)` }} />

      <Header activePath="/insurance-services/self-employed-contractors-and-sub-contractors" />

      <div style={{ position: 'relative', zIndex: 10 }} className="mx-auto max-w-6xl px-5 py-14">
  <motion.header variants={sectionVariants} initial="hidden" animate="visible" className="mb-10">
          <div className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-1">
              <motion.h1 layoutId="service-title" className="text-3xl md:text-5xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B]">Self‑Employed Contractors &amp; Sub‑Contractors</motion.h1>

              <motion.div className="mt-4 max-w-3xl space-y-3 text-zinc-300" variants={sectionVariants} initial="hidden" animate="visible">
                <p>For tradespeople and contractors working independently, every job matters — and so does every risk.</p>
              </motion.div>

              <motion.div className="mt-5 flex flex-wrap gap-2" layout>
                {['Tailored packages', 'Fast documentation', 'Friendly claims support'].map((t) => (
                  <motion.span key={t} layout className="rounded-full border border-[#D4AF37]/50 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 backdrop-blur">
                    {t}
                  </motion.span>
                ))}
              </motion.div>

              <motion.div className="mt-6 flex gap-3" initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
                <a href="/get-a-quote" className="rounded-full border border-[#D4AF37] px-4 py-2 text-sm hover:bg-[#D4AF37]/20 transition">Make an enquiry</a>
                <a href="tel:+" className="rounded-full border border-white/20 px-4 py-2 text-sm text-zinc-300 hover:bg-white/10 transition">Call us</a>
              </motion.div>

              <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mt-5">
                <div className="mb-3 text-xs uppercase tracking-wide text-zinc-400">Who are you?</div>
                <div className="flex flex-wrap gap-2">
                  {SCOPERS.map((s) => (
                    <motion.button
                      key={s}
                      onClick={() => setScoper(s)}
                      layout
                      className={'rounded-full border px-3 py-1.5 text-sm backdrop-blur transition ' + (s === scoper ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-white shadow-[0_0_0_1px_rgba(212,175,55,0.8)_inset,0_8px_22px_rgba(212,175,55,0.25)]' : 'border-[#D4AF37]/40 bg-white/5 text-zinc-300 hover:bg-white/10')}
                    >
                      {s}
                    </motion.button>
                  ))}
                </div>
              </motion.section>
            </div>

            <div className="mt-6 md:mt-8 md:shrink-0 md:w-96 lg:w-[560px] flex items-start justify-end">
              <div className="rounded-xl overflow-hidden shadow-lg ring-1 ring-white/6 transform transition-transform duration-300 will-change-transform hover:scale-105 hover:-translate-y-2 hover:shadow-2xl">
                <Image src="/images/contractor-hero.jpg" alt="Contractor at work" width={560} height={360} className="object-cover w-full h-full block" />
              </div>
            </div>
          </div>
        </motion.header>

  <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-8">
          <div className="mb-3 text-xs uppercase tracking-wide text-zinc-400">Risks We See Every Day:</div>
          <div className="flex flex-wrap gap-2">
            {Object.keys(RISK_TO_COVERS).map((r) => {
              const active = selectedRisks.includes(r);
              return (
                <motion.button key={r} onClick={() => toggleRisk(r)} layout className={'rounded-full border px-3 py-1.5 text-sm backdrop-blur transition ' + (active ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-white shadow-[0_0_0_1px_rgba(212,175,55,0.8)_inset,0_8px_22px_rgba(212,175,55,0.25)]' : 'border-[#D4AF37]/40 bg-white/5 text-zinc-300 hover:bg-white/10')}>{r}</motion.button>
              );
            })}
          </div>
        </motion.section>

  <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-10">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight">How We Help</h2>
          <motion.div layout className="rounded-2xl border border-[#D4AF37]/40 bg-white/5 backdrop-blur overflow-hidden">
            {COVER_ITEMS.map((item, idx) => {
              const open = openKeys.includes(item.key);
              const isLast = idx === COVER_ITEMS.length - 1;
              const highlight = highlightedCovers.has(item.title);
              return (
                <div key={item.key} className={!isLast ? 'border-b border-white/10' : ''}>
                  <motion.button layout className={'flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition ' + (highlight ? 'bg-[#D4AF37]/10' : 'hover:bg-white/5')} onClick={() => toggleAccordion(item.key)} aria-expanded={open}>
                    <div>
                      <div className="text-base md:text-lg font-medium">{item.title}</div>
                      <div className={'mt-1 h-0.5 w-14 ' + (highlight ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/60')} />
                    </div>
                    <div className={'relative h-5 w-5 shrink-0'} onClick={(e) => e.preventDefault()}>
                      <span className={'absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 ' + (open ? 'bg-[#D4AF37]/70' : 'bg-white/80')} />
                      <span className={'absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 transition ' + (open ? 'opacity-0' : 'opacity-100')} />
                    </div>
                  </motion.button>

                  <AnimatePresence initial={false} mode="wait">
                    {open && (
                      <motion.div key="content" variants={accordionContent} initial="hidden" animate="show" exit="exit" style={{ overflow: 'hidden' }} className="px-4 pb-4 text-sm text-zinc-200">
                        <p className="leading-relaxed">{item.body}</p>
                        <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
                          <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1">What we will ask for: employees and subs</span>
                          <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1">Turnover and project values</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </motion.section>

  <motion.section variants={sectionVariants} initial="hidden" animate="visible" className="mb-12">
          <h3 className="mb-3 text-xl font-medium">Why Work With Us</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {['UK‑specific cover for sole traders and subcontractors', 'Clear, affordable policies', 'Protection scaled to your work and contracts'].map((text) => (
              <motion.div key={text} layout whileHover={{ y: -6 }} className="flex gap-4 rounded-2xl border border-[#D4AF37]/25 bg-white/4 p-5 text-sm text-zinc-200 backdrop-blur hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:bg-white/6 transition">
                <div className="flex-shrink-0"><div className="h-10 w-1 rounded-full bg-gradient-to-b from-[#FFD700] to-[#D4AF37]" /></div>
                <div><div className="text-sm font-semibold text-zinc-100 leading-tight">{text}</div></div>
              </motion.div>
            ))}
          </div>
        </motion.section>

  <motion.footer id="enquiry" className="mt-8 flex justify-center" initial="hidden" animate="visible">
          <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Self‑Employed Contractors &amp; Sub‑Contractors Insurance Expert</a>
        </motion.footer>
      </div>
    </motion.div>
  );
}
