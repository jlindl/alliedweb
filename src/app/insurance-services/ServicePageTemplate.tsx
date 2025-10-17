import React from 'react';
import Image from 'next/image';
import { Header } from '../../components/Header';
import ServiceHighlights from '../../components/ServiceHighlights';

export default function ServicePageTemplate({
  title,
  paragraphs,
  activePath = '/insurance-services',
  children,
  scopers,
  imageSrc,
  imageAlt = 'Service hero',
  highlights,
}: {
  title: string;
  paragraphs: string[];
  ctaLabel?: string;
  activePath?: string;
  children?: React.ReactNode;
  scopers?: string[];
  imageSrc?: string;
  imageAlt?: string;
  highlights?: { risks?: string[]; helps?: string[]; reasons?: string[] };
}) {
  return (
    <div className="min-h-screen w-full relative overflow-hidden text-white bg-black">
      <Header activePath={activePath} />

      <div className="mx-auto max-w-6xl px-5 py-14">
        <header className="mb-12">
          <div className="flex flex-col md:flex-row md:items-start md:gap-10">
            <div className="flex-1">
              {/* Premium badge removed to match other pages */}

              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B]">{title}</h1>

              <div className="mt-5 max-w-3xl space-y-4">
                {paragraphs.map((p, i) => (
                  <p key={i} className="text-base md:text-lg leading-relaxed text-zinc-300/90">{p}</p>
                ))}
              </div>

              {/* Feature pills removed site-wide */}

              <div className="mt-8">
                <a href="/contact" className="group relative inline-flex items-center gap-3 rounded-2xl border border-white/20 bg-white/[0.03] px-8 py-4 text-base font-semibold text-white backdrop-blur-2xl hover:border-white/40 hover:bg-white/[0.08] transition-all duration-500 overflow-hidden shadow-xl shadow-black/20"> 
                  <span className="relative z-10 tracking-wide">Talk to an Expert</span>
                </a>
              </div>

              {scopers && scopers.length > 0 && (
                <section className="mt-6">
                  <div className="mb-4 text-xs font-bold uppercase tracking-wider text-[#D4AF37]">Who are you?</div>
                  <div className="flex flex-wrap gap-3">
                    {scopers.map((s) => (
                      <div key={s} className={'group relative rounded-xl border px-5 py-2.5 text-sm font-semibold backdrop-blur-xl transition-all duration-300'}>{s}</div>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {imageSrc && (
              <div className="mt-6 md:mt-8 md:shrink-0 md:w-96 lg:w-[560px] flex items-start justify-end h-56 md:h-[360px]">
                <div className="group relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 ring-1 ring-white/10 h-full w-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD700]/20 via-transparent to-[#D4AF37]/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
                  <div className="absolute -inset-1 bg-gradient-to-br from-[#FFD700]/30 to-[#D4AF37]/30 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 -z-10" />
                  <Image src={imageSrc} alt={imageAlt} width={560} height={360} className="object-cover w-full h-full block" />
                </div>
              </div>
            )}
          </div>
        </header>

        <ServiceHighlights
          risks={highlights?.risks ?? [
            'Machinery breakdown and downtime',
            'Supply chain disruption across global suppliers',
            'Product liability and mass recalls',
            'Health & safety for large workforces',
            'Environmental compliance in multiple regions',
          ]}
          helps={highlights?.helps ?? [
            'Property and machinery breakdown cover',
            'Global supply chain risk transfer and continuity planning',
            'Product liability and recall insurance',
            'Workers’ comp and liability tailored to large operations',
            'Environmental liability protection',
          ]}
          reasons={highlights?.reasons ?? [
            'Experience with global manufacturing corporations',
            'Integrated coverage for supply chains and production',
            'Risk management strategies to reduce downtime',
            'Specialist teams for recall and regulatory defence',
          ]}
        />

        {children}
      </div>
    </div>
  );
}
