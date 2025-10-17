"use client";

import Particles from "../../components/Particles";
import QuoteForm from "../../components/QuoteForm";
import { Header } from "../../components/Header";

export default function GetAQuotePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Header activePath="/get-a-quote" />
      {/* Fullscreen particles background */}
      {/* Positioned absolutely inside <main> and sized to its full height (so it covers the whole page content area but not the footer) */}
      <div style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0 }}>
        <Particles
          particleColors={["#ffffff", "#ffd700"]}
          particleCount={220}
          particleSpread={12}
          speed={0.12}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
          className=""
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 flex min-h-screen items-start justify-center px-6 pt-20 pb-12">
        <div className="w-full max-w-3xl rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 p-10 ring-1 ring-white/5 shadow-lg">
          <h1 className="text-3xl md:text-4xl font-semibold text-white mb-2">Enquire now</h1>
          <p className="text-sm text-white/80 mb-6">Tell us a little about your business and we&apos;ll provide a tailored quote.</p>

          {/* Contact info block (above the form) */}
          <div className="mb-8 rounded-lg bg-gradient-to-b from-white/4 to-white/6 p-5 border border-white/12 shadow-sm">
            <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:items-start md:gap-6">
              <div className="flex-1">
                <h2 className="text-lg font-medium text-white">Contact Us</h2>
                <p className="text-sm text-white/80 mt-1">Prefer to talk? Our friendly team is available to help you choose the right coverage.</p>
                <ul className="mt-4 space-y-2 text-sm text-white/90">
                  <li className="flex items-center gap-3">
                    <span className="font-semibold min-w-[68px]">Phone:</span>
                    <a href="tel:01942403370" className="text-white/95 hover:underline">01942 403370</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold min-w-[68px]">Email:</span>
                    <a href="mailto:enquiry@alliedinsurance.co.uk" className="text-white/95 hover:underline">enquiry@alliedinsurance.co.uk</a>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="font-semibold min-w-[68px]">Address:</span>
                    <span className="text-white/80">First Floor, 98 Standishgate, Wigan WN1 1XA</span>
                  </li>
                </ul>
              </div>

              <div className="w-full md:w-auto">
                <div className="rounded-md bg-white/5 p-4 text-sm text-white/90 border border-white/10">
                  <div className="mb-2 font-semibold">Business Hours</div>
                  <div className="text-sm leading-relaxed">
                    Mon–Fri: 9:00 – 17:00
                  </div>
                  <div className="mt-4 flex gap-3">
                    <a href="tel:01942403370" className="inline-block px-4 py-2 bg-white/10 hover:bg-white/20 rounded-md text-white text-sm transition">Call Now</a>
                    <a href="mailto:enquiry@alliedinsurance.co.uk" className="inline-block px-4 py-2 border border-white/10 rounded-md text-white text-sm hover:bg-white/5 transition">Email</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <QuoteForm />
        </div>
      </div>
    </main>
  );
}
