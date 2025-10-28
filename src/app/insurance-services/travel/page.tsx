import React from 'react';
import { Header } from '../../../components/Header';

export default function TravelInsurancePage() {
  return (
  <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <Header activePath="/insurance-services/travel" />

      {/* Animated background accent */}
      {/* Ambient gold glow accents for consistency */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-br from-[#FFD700]/20 via-[#D4AF37]/10 to-transparent blur-3xl opacity-60 animate-pulse" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[120px] animate-pulse-slow-delay" />
      </div>

      {/* Hero */}
      <section className="relative z-10 py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-br from-[#FFD700] via-[#D4AF37] to-[#B8860B] tracking-tight drop-shadow-lg leading-tight">
            Travel Insurance for Worldwide Travellers
          </h1>
          <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full mb-6" />
          <p className="text-2xl font-semibold text-white/90 mb-6">
            Peace of Mind Before, During and After Your Trip
          </p>
          <p className="text-white/75 leading-relaxed text-lg mb-8">
            Whether you’re planning a weekend escape, a multi-destination holiday or essential business travel, the right travel insurance gives you protection when the unexpected happens — from lost baggage and cancelled flights to medical emergencies abroad.
          </p>
          {/* CTA Button */}
          <div className="mt-8 flex justify-center">
            <a
              href="/get-a-quote"
              className="group relative inline-flex items-center gap-3 rounded-2xl border border-[#D4AF37] bg-gradient-to-br from-[#FFD700]/10 to-[#D4AF37]/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-2xl hover:border-[#FFD700] hover:bg-[#D4AF37]/20 transition-all duration-500 overflow-hidden shadow-xl shadow-black/20"
            >
              <span className="relative z-10 tracking-wide">Enquire Now</span>
            </a>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="relative z-10 pb-16">
        <div className="mx-auto max-w-4xl px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Risks */}
          <div className="rounded-xl bg-gradient-to-br from-white/10 via-[#FFD700]/5 to-black/10 p-6 shadow-lg border border-white/10 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
              Risks We See Every Day
            </h4>
            <ul className="space-y-3 text-sm list-disc list-inside pl-2 text-white/80">
              <li>Emergency medical treatment and repatriation if you fall ill or are injured abroad.</li>
              <li>Trip cancellation or interruption due to illness, bereavement or travel provider failure.</li>
              <li>Loss, theft or damage of baggage, personal belongings or travel documents.</li>
              <li>Personal liability for damage caused to others while travelling.</li>
              <li>Travel delays, missed connections or being stranded away from home.</li>
              <li>Exclusions due to undeclared medical conditions, participating in high-risk activities, or travelling to countries against government advice.</li>
            </ul>
          </div>

          {/* How We Help */}
          <div className="rounded-xl bg-gradient-to-br from-white/10 via-[#FFD700]/5 to-black/10 p-6 shadow-lg border border-white/10 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
              How We Help
            </h4>
            <ul className="space-y-3 text-sm text-white/80 list-disc list-inside pl-2">
              <li>Comprehensive cover for emergency medical expenses, hospital treatment and repatriation.</li>
              <li>Trip cancellation and curtailment protection for prepaid travel and accommodation costs when covered reasons apply.</li>
              <li>Baggage, personal belongings and money cover including compensation for loss, theft or damage.</li>
              <li>Personal liability cover and legal protection if you’re held responsible for damage or injury.</li>
              <li>Flexible policy types including single-trip, annual multi-trip, UK staycation, cruise or adventure travel.</li>
              <li>Clear guidance on what’s covered and what’s not, helping you understand any limitations or exclusions.</li>
            </ul>
          </div>

          {/* Why Work With Us */}
          <div className="rounded-xl bg-gradient-to-br from-white/10 via-[#FFD700]/5 to-black/10 p-6 shadow-lg border border-white/10 backdrop-blur-md">
            <h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
              Why Work With Us
            </h4>
            <ul className="space-y-3 text-sm text-white/80 list-disc list-inside pl-2">
              <li>We specialise in travel insurance designed for UK travellers — whether it’s for leisure, business, or adventure.</li>
              <li>Our policies cover the key risks travellers face and include optional enhancements for high-risk activities, value items or extended trips.</li>
              <li>We focus on clarity and support — helping ensure your cover is valid, you’re aware of exclusions (like pre-existing conditions or high-risk activities) and you can claim easily if needed.</li>
              <li>We’re committed to transparency: you’ll get clear policy wording, easy-to-use claims support and advice on making sure you’re covered properly for your trip type and destination.</li>
            </ul>
          </div>
        </div>
      </section>

  {/* Accent footer strip */}
  <div className="absolute inset-x-0 bottom-0 h-24 pointer-events-none bg-gradient-to-t from-black via-transparent to-transparent" />
  {/* Animated accent borders */}
  <div className="absolute left-0 top-0 h-full w-2 bg-gradient-to-b from-[#FFD700]/60 via-[#D4AF37]/40 to-transparent animate-pulse" />
  <div className="absolute right-0 top-0 h-full w-2 bg-gradient-to-b from-[#FFD700]/60 via-[#D4AF37]/40 to-transparent animate-pulse" />
    </main>
  );
}
