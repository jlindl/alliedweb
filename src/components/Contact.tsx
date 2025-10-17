"use client";

import React from "react";

export default function Contact() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
        {/* Left: Intro + CTAs */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3">Contact us</h2>
          <p className="text-white/80 mb-6 max-w-xl">We&apos;re here to help. For enquiries, claims or support, use the details below to get in touch and we&apos;ll respond as quickly as possible.</p>

          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-3">
            <a
              href="tel:01942403370"
              className="inline-flex items-center justify-center gap-3 rounded-lg bg-[#D4AF37] text-black font-semibold px-5 py-3 shadow-md hover:opacity-95 w-full sm:w-auto"
              aria-label="Call Allied"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 1.08 4.18 2 2 0 0 1 3 2h3a2 2 0 0 1 2 1.72c.12.95.34 1.88.65 2.78a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.11-.45c.9.31 1.83.53 2.78.65A2 2 0 0 1 22 16.92z" />
              </svg>
              Call us
            </a>

            <a
              href="mailto:enquiry@alliedinsurance.co.uk"
              className="inline-flex items-center justify-center gap-3 rounded-lg border border-white/10 px-5 py-3 text-white/90 hover:bg-white/2 w-full sm:w-auto"
              aria-label="Email Allied"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16v16H4z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
              Email
            </a>
          </div>

          <p className="text-sm text-white/60 mt-6">If you need to make a claim, visit the <a href="/claims" className="text-[#D4AF37] font-semibold hover:underline">Claims page</a> for guidance and to submit details.</p>
        </div>

        {/* Right: Contact cards */}
        <div className="order-1 lg:order-2">
          <div className="space-y-4">
            <ContactCard
              title="Phone"
              primary={<a href="tel:01942403370" className="text-[#D4AF37] font-semibold break-words">01942 403370</a>}
              detail={<span className="text-sm text-white/70">Available Mon–Fri 9:00–17:00</span>}
            />

            <ContactCard
              title="Email"
              primary={<a href="mailto:enquiry@alliedinsurance.co.uk" className="text-[#D4AF37] font-semibold break-words">enquiry@alliedinsurance.co.uk</a>}
              detail={<span className="text-sm text-white/70">We aim to respond within one business day</span>}
            />

            <ContactCard
              title="Address"
              primary={<address className="not-italic text-white/80 break-words">Unit 4, Business Centre<br/>Wigan, WN1 2AB</address>}
              detail={<span className="text-sm text-white/70">Office hours: Mon–Fri, 9:00 — 17:30</span>}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ title, primary, detail }: { title: string; primary: React.ReactNode; detail?: React.ReactNode }) {
  return (
    <div className="rounded-xl bg-black/50 border border-white/6 p-5 backdrop-blur-sm shadow-lg max-w-full">
      <h4 className="text-sm text-white/90 font-semibold mb-2">{title}</h4>
      <div className="mb-2 text-lg">{primary}</div>
      {detail && <div className="text-sm">{detail}</div>}
    </div>
  );
}
