"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        {/* Left: Intro + CTAs */}
        <div className="order-2 lg:order-1 space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
              Get in Touch
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#D4AF37] to-transparent rounded-full mb-6" />
            <p className="text-white/75 text-lg leading-relaxed max-w-xl">
              We&apos;re here to help. For enquiries, claims or support, use the details below to get in touch and we&apos;ll respond as quickly as possible.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center gap-4">
            <a
              href="tel:01942403370"
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-size-200 bg-pos-0 hover:bg-pos-100 text-black font-bold px-6 py-4 shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 transition-all duration-400 hover:scale-[1.02] w-full sm:w-auto"
              aria-label="Call Allied"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12.95.34 1.88.65 2.78a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.11-.45c.9.31 1.83.53 2.78.65A2 2 0 0 1 22 16.92z" />
              </svg>
              Call Us Now
            </a>

            <a
              href="mailto:enquiry@alliedinsurance.co.uk"
              className="group inline-flex items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/[0.05] backdrop-blur-xl px-6 py-4 text-white font-semibold hover:bg-white/[0.1] hover:border-[#D4AF37]/40 transition-all duration-300 hover:scale-[1.02] w-full sm:w-auto"
              aria-label="Email Allied"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-y-[-2px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Send Email
            </a>
          </div>

          <div className="pt-6 border-t border-white/10">
            <p className="text-sm text-white/60 leading-relaxed">
              Need to file a claim? Visit our <a href="/claims" className="text-[#D4AF37] font-semibold hover:text-[#FFD700] underline decoration-[#D4AF37]/30 hover:decoration-[#FFD700] underline-offset-2 transition-colors duration-300">Claims page</a> for step-by-step guidance and submission.
            </p>
          </div>
        </div>

        {/* Right: Contact cards */}
        <div className="order-1 lg:order-2">
          <div className="space-y-5">
            <ContactCard
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              }
              title="Phone"
              primary={
                <a 
                  href="tel:01942403370" 
                  className="text-[#D4AF37] hover:text-[#FFD700] font-bold text-xl transition-colors duration-300 inline-flex items-center gap-2 group"
                >
                  01942 403370
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </a>
              }
              detail={<span className="text-sm text-white/60">Available Mon–Fri 9:00–17:00</span>}
            />

            <ContactCard
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Email"
              primary={
                <a 
                  href="mailto:enquiry@alliedinsurance.co.uk" 
                  className="text-[#D4AF37] hover:text-[#FFD700] font-semibold text-base break-all transition-colors duration-300"
                >
                  enquiry@alliedinsurance.co.uk
                </a>
              }
              detail={<span className="text-sm text-white/60">We aim to respond within one business day</span>}
            />

            <ContactCard
              icon={
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              }
              title="Address"
              primary={
                <address className="not-italic text-white/85 leading-relaxed font-medium">
                  First Floor, 98 Standishgate<br/>
                  Wigan, WN1 1XA
                </address>
              }
              detail={<span className="text-sm text-white/60">Office hours: Mon–Fri, 9:00 — 17:30</span>}
            />
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-size-200 { background-size: 200% auto; }
        .bg-pos-0 { background-position: 0% center; }
        .bg-pos-100 { background-position: 100% center; }
      `}</style>
    </section>
  );
}

function ContactCard({ 
  icon,
  title, 
  primary, 
  detail 
}: { 
  icon: React.ReactNode;
  title: string; 
  primary: React.ReactNode; 
  detail?: React.ReactNode;
}) {
  return (
    <div className="group relative rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 p-6 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/30 transition-all duration-500 hover:scale-[1.02] overflow-hidden">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/[0.05] group-hover:to-transparent transition-all duration-500 rounded-2xl pointer-events-none" />
      
      <div className="relative z-10">
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/30 text-[#D4AF37] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg shadow-[#D4AF37]/10">
            {icon}
          </div>
          <div className="flex-1 min-w-0">
            <h4 className="text-xs font-bold text-white/70 uppercase tracking-wider mb-3 letter-spacing-wide">
              {title}
            </h4>
            <div className="mb-3">{primary}</div>
            {detail && (
              <div className="pt-3 border-t border-white/10">
                {detail}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
