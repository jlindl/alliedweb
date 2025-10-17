"use client";

import React, { useMemo, useState } from 'react';

const RISK_TO_COVERS: Record<string, string[]> = {
  'Client or third‑party liability claims': ['Public and Products Liability'],
  'Loss of tools or materials': ['Tools', 'Goods in transit'],
  'Downtime due to disputes or delays': ['Legal Expenses', 'Business interruption'],
  'Errors or omissions in advice or work': ['Professional Indemnity'],
  'Workplace safety issues': ["Employers' Liability", 'Public and Products Liability'],
};

const COVER_ITEMS = [
  { key: 'pl', title: 'Public and Products Liability', body: 'Tailored public liability to protect you against claims from third‑parties for injury or damage.' },
  { key: 'pi', title: 'Professional Indemnity', body: 'Cover for claims arising from advice, design or workmanship where you are liable for financial loss.' },
  { key: 'tools', title: 'Tools and Materials', body: 'Insurance for your portable tools, equipment and materials against theft or damage.' },
  { key: 'bi', title: 'Business Interruption', body: 'Protection for lost income when your business is disrupted by an insured event.' },
  { key: 'legal', title: 'Legal Expenses', body: 'Support for dispute resolution, contract issues and legal costs where covered.' },
];

const SCOPERS = ['Sole trader', 'Small contractor (2-10)', 'Sub-contractor'];

export default function SelfEmployedContractorsContent() {
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
    <>
      <section className="mt-6">
        <div className="mb-3 text-xs uppercase tracking-wide text-zinc-400">Who are you?</div>
        <div className="flex flex-wrap gap-2">
          {SCOPERS.map((s) => (
            <button key={s} onClick={() => setScoper(s)} className={'rounded-full border px-3 py-1.5 text-sm backdrop-blur transition ' + (s === scoper ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-white' : 'border-[#D4AF37]/40 bg-white/5 text-zinc-300 hover:bg-white/10')}>{s}</button>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <div className="mb-3 text-xs uppercase tracking-wide text-zinc-400">Risks We See Every Day:</div>
        <div className="flex flex-wrap gap-2">
          {Object.keys(RISK_TO_COVERS).map((r) => {
            const active = selectedRisks.includes(r);
            return (
              <button key={r} onClick={() => toggleRisk(r)} className={'rounded-full border px-3 py-1.5 text-sm backdrop-blur transition ' + (active ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-white' : 'border-[#D4AF37]/40 bg-white/5 text-zinc-300 hover:bg-white/10')}>{r}</button>
            );
          })}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">How We Help</h2>
        <div className="rounded-2xl border border-[#D4AF37]/40 bg-white/5 backdrop-blur overflow-hidden">
          {COVER_ITEMS.map((item, idx) => {
            const open = openKeys.includes(item.key);
            const isLast = idx === COVER_ITEMS.length - 1;
            const highlight = highlightedCovers.has(item.title);
            return (
              <div key={item.key} className={!isLast ? 'border-b border-white/10' : ''}>
                <button className={'flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition ' + (highlight ? 'bg-[#D4AF37]/10' : 'hover:bg-white/5')} onClick={() => toggleAccordion(item.key)} aria-expanded={open}>
                  <div>
                    <div className="text-base md:text-lg font-medium">{item.title}</div>
                    <div className={'mt-1 h-0.5 w-14 ' + (highlight ? 'bg-[#D4AF37]' : 'bg-[#D4AF37]/60')} />
                  </div>
                  <div className={'relative h-5 w-5 shrink-0'}>
                    <span className={'absolute inset-x-0 top-1/2 -translate-y-1/2 h-0.5 ' + (open ? 'bg-[#D4AF37]/70' : 'bg-white/80')} />
                    <span className={'absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-white/80 transition ' + (open ? 'opacity-0' : 'opacity-100')} />
                  </div>
                </button>

                {open && (
                  <div className="px-4 pb-4 text-sm text-zinc-200">
                    <p className="leading-relaxed">{item.body}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs text-zinc-300">
                      <span className="rounded-full border border-white/15 bg-white/5 px-2.5 py-1">What we will ask for: employees and subs</span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Self‑Employed Contractors Insurance Expert</a>
      </div>
    </>
  );
}
