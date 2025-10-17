"use client";

import React from 'react';

interface ServiceHighlightsProps {
  risks: string[];
  helps: string[];
  reasons: string[];
}

// ...existing code... (bullets are implemented inline)

export default function ServiceHighlights({ risks, helps, reasons }: ServiceHighlightsProps) {
  return (
    <section className="mt-10 bg-gradient-to-b from-white/2 via-white/3 to-transparent rounded-xl p-6 md:p-10">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Risks We See Every Day</h3>
            <p className="text-sm text-zinc-300">Practical experience spotting the risks that cause real business disruption.</p>
            <ul className="mt-3 space-y-2">
              {risks.map((r) => (
                <li key={r} className="flex items-start">
                  <span className="mt-1">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-black font-semibold">•</span>
                  </span>
                  <span className="ml-3 text-sm text-zinc-200">{r}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 border-t md:border-t-0 md:border-l md:border-r border-white/6 px-0 md:px-6 py-6 md:py-0">
            <h3 className="text-lg font-semibold text-white">How We Help</h3>
            <p className="text-sm text-zinc-300">Insurance and services designed to keep manufacturing and operations running.</p>
            <ul className="mt-3 space-y-2">
              {helps.map((h) => (
                <li key={h} className="flex items-start">
                  <span className="mt-1">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-white/6 text-[#D4AF37] font-medium">✓</span>
                  </span>
                  <span className="ml-3 text-sm text-zinc-200">{h}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Why Work With Us</h3>
            <p className="text-sm text-zinc-300">Specialist teams and global experience focused on reducing risk and downtime.</p>
            <ul className="mt-3 space-y-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start">
                  <span className="mt-1">
                    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-[#FFD700] to-[#D4AF37] text-black font-semibold">★</span>
                  </span>
                  <span className="ml-3 text-sm text-zinc-200">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
