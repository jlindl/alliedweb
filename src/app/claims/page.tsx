"use client";

import React, { useState, useEffect } from 'react';
import { Header } from '../../components/Header';
import LightRays from '../../components/LightRays';

export default function ClaimsPage() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    telephone: '',
    email: '',
    policyNumber: '',
    dateOfIncident: '',
    details: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [faqOpen, setFaqOpen] = useState<Record<number, boolean>>({});
  const [claimRef, setClaimRef] = useState<string | null>(null);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // simple validation example
    if (!form.name || !form.telephone || !form.email || !form.details) {
      setSubmitted(false);
      return;
    }

    // generate a short claim reference
    const ref = `CL-${String(Math.floor(Math.random() * 900000) + 100000)}`;
    setClaimRef(ref);
    setLoading(true);

    try {
      const res = await fetch('/api/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          claimReference: ref,
          name: form.name,
          company: form.company,
          telephone: form.telephone,
          email: form.email,
          policyNumber: form.policyNumber,
          dateOfIncident: form.dateOfIncident,
          details: form.details
        })
      });

      // read response text first so we can log HTML or plain text errors too
      const text = await res.text().catch(() => '');
      let json: unknown = {};
      try {
        json = text ? JSON.parse(text) : {};
      } catch {
        // not JSON (could be an HTML error page or empty body)
        json = { raw: text };
      }

      if (!res.ok) {
        try { const clientLogger = (await import('../../lib/clientLogger')).default; clientLogger.error('Claim submit failed', { status: res.status, body: json }); } catch { }
        const asStr = JSON.stringify(json);
        let errMsg = asStr;
        try {
          const parsed = JSON.parse(asStr);
          if (parsed && typeof parsed === 'object' && 'error' in parsed) {
            const obj = parsed as Record<string, unknown>;
            const e = obj['error'];
            errMsg = String(e ?? asStr);
          }
        } catch {}
        setServerError(errMsg);
        setSubmitted(false);
        return;
      }

      // try parse response for sheet name and reference
      // intentionally do not expose sheet details to the user; ignore webhook sheetName
      try { JSON.parse(text || '{}'); } catch {}

      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  }

  function toggleFaq(i: number) {
    setFaqOpen((s) => ({ ...s, [i]: !s[i] }));
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-view');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    const els = document.querySelectorAll('.fade-in-element');
    els.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [submitted]);

  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <LightRays raysOrigin="top-left" raysColor="#D4AF37" raysSpeed={1.2} lightSpread={1.6} rayLength={2.5} followMouse={false} className="opacity-30" />
        <div aria-hidden className="absolute inset-0" style={{ background: 'radial-gradient(60% 60% at 10% 10%, rgba(212,175,55,0.06), transparent 20%), linear-gradient(180deg, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7) 80%)' }} />
        {/* Ambient glow orbs */}
        <div className="absolute top-20 left-1/3 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[100px] animate-pulse-slow" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-[#D4AF37]/[0.04] rounded-full blur-[100px] animate-pulse-slow-delay" />
      </div>

      <Header activePath="/claims" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <div className="mb-12 fade-in-element opacity-0 translate-y-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-[#FFD700] to-[#D4AF37] tracking-tight leading-tight">
            Claims
          </h1>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-transparent mb-6 shadow-lg shadow-[#D4AF37]/30" />
          <p className="text-white/75 max-w-3xl text-base md:text-lg leading-relaxed font-light">
            We aim to make submitting a claim as straightforward as possible. Use the form below to provide the details and our claims team will contact you with the next steps. For quicker processing, have your policy number and any supporting photos or documentation ready.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10">
          <div className="lg:col-span-2 space-y-10">
            <section className="glass-card fade-in-element opacity-0 translate-y-4 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 shadow-2xl">
              <h2 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Claim Advice</h2>
              <p className="text-white/75 leading-relaxed mb-6">If you need to make an insurance claim, contact the Allied team who will advise you of the necessary steps. For property claims act swiftly to prevent further damage — e.g. arrange temporary repairs for burst pipes, secure premises after a break-in.</p>

              <h3 className="mt-8 mb-6 text-xl text-white font-semibold">How claims are handled</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                { [
                  { num: '1', title: 'Notify us', desc: 'Provide details via the form or call us. We log your details and allocate a reference.' },
                  { num: '2', title: 'Assessment', desc: 'Insurers review the information and may request photos or a loss adjuster visit.' },
                  { num: '3', title: 'Resolution', desc: 'Once approved, you will receive guidance on repairs or settlement options.' }
                ].map((step, idx) => (
                  <div key={idx} className="process-card group relative p-6 rounded-xl bg-gradient-to-br from-white/[0.06] to-white/[0.02] border border-white/8 hover:border-[#D4AF37]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#D4AF37]/10">
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#D4AF37]/0 to-[#D4AF37]/0 group-hover:from-[#D4AF37]/5 group-hover:to-transparent transition-all duration-500" />
                    <div className="relative z-10">
                      <div className="text-4xl font-black text-[#D4AF37] mb-3 group-hover:scale-110 transition-transform duration-400">{step.num}</div>
                      <h4 className="font-bold text-white mb-2 text-lg">{step.title}</h4>
                      <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="glass-card fade-in-element opacity-0 translate-y-4 p-8 rounded-2xl backdrop-blur-xl bg-gradient-to-br from-white/[0.07] to-white/[0.02] border border-white/10 shadow-2xl">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <input 
                      name="name" 
                      value={form.name} 
                      onChange={handleChange} 
                      placeholder="Your name *" 
                      required 
                      className="premium-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner" 
                    />
                    <input 
                      name="company" 
                      value={form.company} 
                      onChange={handleChange} 
                      placeholder="Company name" 
                      className="premium-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner" 
                    />
                    <input 
                      name="telephone" 
                      value={form.telephone} 
                      onChange={handleChange} 
                      placeholder="Telephone number *" 
                      required 
                      className="premium-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner" 
                    />
                    <input 
                      name="email" 
                      value={form.email} 
                      onChange={handleChange} 
                      placeholder="Email address *" 
                      required 
                      className="premium-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner" 
                    />
                    <input 
                      name="policyNumber" 
                      value={form.policyNumber} 
                      onChange={handleChange} 
                      placeholder="Policy Number" 
                      className="premium-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner" 
                    />
                    <input 
                      name="dateOfIncident" 
                      value={form.dateOfIncident} 
                      onChange={handleChange} 
                      placeholder="Date of Incident" 
                      className="premium-input w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner" 
                    />
                    <textarea 
                      name="details" 
                      value={form.details} 
                      onChange={handleChange} 
                      placeholder="Details" 
                      rows={6} 
                      className="premium-input md:col-span-2 w-full rounded-xl border border-white/10 bg-white/[0.03] px-5 py-3.5 text-white placeholder:text-white/40 focus:ring-2 focus:ring-[#D4AF37]/40 focus:border-[#D4AF37]/50 focus:bg-white/[0.05] transition-all duration-300 backdrop-blur-sm shadow-inner resize-none" 
                    />
                  </div>

                  {serverError && (
                    <div className="rounded-md border border-[#D4AF37]/20 bg-black/50 p-3 text-sm text-red-300">
                      <strong className="font-semibold text-white">Server error:</strong>
                      <div className="mt-1">{serverError}</div>
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 pt-2">
                    <button 
                      type="submit" 
                      disabled={loading}
                      className="premium-button group relative inline-flex items-center gap-3 rounded-xl px-8 py-4 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-size-200 bg-pos-0 hover:bg-pos-100 text-black font-bold shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-105 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/40 transition-all duration-400 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      <span className="relative z-10">{loading ? 'Submitting...' : 'SUBMIT CLAIM'}</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </button>
                    <div className="text-sm text-white/60">
                      Prefer to call? <a href="tel:01942403370" className="text-[#D4AF37] font-semibold hover:text-[#FFD700] underline transition-colors duration-300">01942 403370</a>
                    </div>
                  </div>
                </form>
              ) : (
                <div className="success-card rounded-xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#D4AF37]/10 to-transparent p-8 text-center backdrop-blur-sm shadow-2xl shadow-[#D4AF37]/20">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#D4AF37]/20 to-[#D4AF37]/5 flex items-center justify-center border border-[#D4AF37]/30">
                    <svg className="w-8 h-8 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-3xl text-white font-bold mb-3">Thank You</h3>
                  <p className="text-white/75 mb-6 leading-relaxed">Your claim details have been received. Our claims team will be in touch shortly.</p>
                  {/* intentionally hide sheet name from users */}
                  {claimRef && (
                    <div className="inline-flex items-center gap-4 px-6 py-3 rounded-xl bg-black/60 border border-[#D4AF37]/30 backdrop-blur-sm">
                      <span className="text-sm text-white/70 font-medium">Reference:</span>
                      <span className="font-mono font-bold text-xl text-[#D4AF37]">{claimRef}</span>
                    </div>
                  )}
                </div>
              )}
            </section>

            <section className="fade-in-element opacity-0 translate-y-4">
              <h3 className="text-2xl text-white font-bold mb-6">Frequently Asked Questions</h3>
              <div className="space-y-3">
                { [
                  { q: 'What documents should I provide?', a: 'Photos of damage, police reports (if applicable), policy number and any receipts for emergency repairs.' },
                  { q: 'How long will it take?', a: 'Times vary by insurer and complexity; we will provide an estimated timescale once the claim is logged.' },
                  { q: 'Do I need to get quotes for repairs?', a: 'Often insurers will instruct approved contractors or request multiple quotes — we will advise when required.' }
                ].map((item, i) => (
                  <div key={i} className="faq-item border border-white/10 rounded-xl overflow-hidden backdrop-blur-sm bg-white/[0.02] hover:bg-white/[0.04] hover:border-[#D4AF37]/20 transition-all duration-300">
                    <button 
                      onClick={() => toggleFaq(i)} 
                      aria-expanded={!!faqOpen[i]} 
                      className="w-full text-left px-6 py-4 flex justify-between items-center group"
                    >
                      <span className="font-semibold text-white group-hover:text-[#D4AF37] transition-colors duration-300">{item.q}</span>
                      <span className={`text-2xl text-[#D4AF37] transform transition-transform duration-300 ${faqOpen[i] ? 'rotate-45' : ''}`}>+</span>
                    </button>
                    <div className={`faq-answer overflow-hidden transition-all duration-300 ${faqOpen[i] ? 'max-h-40' : 'max-h-0'}`}>
                      <div className="px-6 py-4 text-white/75 bg-black/40 backdrop-blur-sm border-t border-white/5 leading-relaxed">{item.a}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="sidebar-card fade-in-element opacity-0 translate-y-4 p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/20 transition-all duration-400">
              <h4 className="text-xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">Contact Claims Team</h4>
              <p className="text-white/75 mb-4 text-sm leading-relaxed">Call us or use the form. Lines are open during normal business hours.</p>
              <dl className="space-y-4 text-sm">
                <div>
                  <dt className="font-semibold text-white/80 mb-1">Telephone</dt>
                  <dd className="text-[#D4AF37] font-bold text-lg">
                    <a href="tel:01942403370" className="hover:text-[#FFD700] transition-colors duration-300 inline-flex items-center gap-2">
                      01942 403370
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="font-semibold text-white/80 mb-1">Email</dt>
                  <dd className="text-[#D4AF37] font-bold break-all">
                    <a href="mailto:enquiry@alliedinsurance.co.uk" className="hover:text-[#FFD700] transition-colors duration-300">enquiry@alliedinsurance.co.uk</a>
                  </dd>
                </div>
              </dl>
              <div className="mt-5 pt-5 border-t border-white/10">
                <p className="text-sm text-white/70 mb-2">Opening hours:</p>
                <p className="text-sm text-white font-semibold">Monday – Friday<br/>9:00 AM – 5:00 PM</p>
              </div>
            </div>

            <div className="sidebar-card fade-in-element opacity-0 translate-y-4 p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-white/[0.08] to-white/[0.03] border border-white/10 shadow-xl hover:shadow-2xl hover:border-[#D4AF37]/20 transition-all duration-400">
              <h4 className="text-lg font-bold text-white mb-4">Claims Checklist</h4>
              <ul className="space-y-2 text-sm text-white/75">
                {['Policy number', 'Contact details', 'Photos of damage', 'Receipts for emergency repairs'].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-[#D4AF37] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* PDF checklist download removed intentionally */}
            </div>

            <div className="sidebar-card fade-in-element opacity-0 translate-y-4 p-6 rounded-xl backdrop-blur-xl bg-gradient-to-br from-[#D4AF37]/10 to-transparent border border-[#D4AF37]/20 shadow-xl">
              <div className="flex items-start gap-3 mb-3">
                <svg className="w-6 h-6 text-[#D4AF37] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <strong className="text-white font-bold">Need Immediate Help?</strong>
              </div>
              <p className="text-sm text-white/75 leading-relaxed">If there is an ongoing emergency (e.g. flooding, structural risk) call emergency services first, then contact us for rapid guidance.</p>
            </div>
          </aside>
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

        .fade-in-element {
          transition: opacity 600ms cubic-bezier(0.16, 1, 0.3, 1), 
                      transform 600ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-in-element.fade-in-view {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .glass-card {
          box-shadow: 
            0 8px 32px rgba(0,0,0,0.4),
            inset 0 1px 0 rgba(255,255,255,0.08),
            inset 0 -1px 0 rgba(0,0,0,0.2);
          transition: all 400ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .glass-card:hover {
          box-shadow: 
            0 16px 48px rgba(0,0,0,0.5),
            0 8px 32px rgba(212,175,55,0.08),
            inset 0 1px 0 rgba(255,255,255,0.12);
          border-color: rgba(212,175,55,0.15);
        }

        .premium-input {
          transition: all 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }
        .premium-input:focus {
          transform: translateY(-1px);
          box-shadow: 
            0 4px 16px rgba(212,175,55,0.15),
            inset 0 1px 2px rgba(0,0,0,0.1);
        }

        .premium-button {
          background-size: 200% auto;
          position: relative;
          overflow: hidden;
        }
        .premium-button::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.2) 50%, transparent 100%);
          transform: translateX(-100%);
          transition: transform 600ms ease;
        }
        .premium-button:hover::before {
          transform: translateX(100%);
        }

        .bg-size-200 { background-size: 200% auto; }
        .bg-pos-0 { background-position: 0% center; }
        .bg-pos-100 { background-position: 100% center; }

        .process-card {
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        }

        .sidebar-card {
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
        }

        .success-card {
          animation: successPulse 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes successPulse {
          0% { transform: scale(0.95); opacity: 0; }
          50% { transform: scale(1.02); }
          100% { transform: scale(1); opacity: 1; }
        }

        .faq-answer {
          transition: max-height 300ms cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </main>
  );
}
