"use client";

import { useState } from "react";

export default function QuoteForm() {
  // update state: add companyName, make phone required
  const [name, setName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch('/api/quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, companyName, email, phone, details })
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({}));
        throw new Error(json?.error || 'Failed to send');
      }
      setSent(true);
    } finally {
      setLoading(false);
    }
  };

  if (sent) {
    return (
      <div className="relative">
        <style>{`
					/* liquid glass animations & helpers scoped inside component */
					@keyframes glass-pop { from { transform: scale(.96); opacity: 0 } to { transform: scale(1); opacity: 1 } }
					@keyframes floaty { 0% { transform: translateY(0) } 50% { transform: translateY(-4px) } 100% { transform: translateY(0) } }
					@keyframes sheen-move { from { transform: translateX(-60%) } to { transform: translateX(120%) } }
					.check-appear { animation: glass-pop .38s cubic-bezier(.2,.9,.3,1) both; }
					.shimmer { animation: sheen-move 2.2s linear infinite; }
				`}</style>

        <div className="rounded-2xl bg-gradient-to-br from-white/6 to-white/3 backdrop-blur-md border border-white/10 px-6 py-5 text-white shadow-2xl flex items-center gap-3 check-appear">
          <div className="flex items-center justify-center w-10 h-10 bg-green-600/20 rounded-full">
            <svg className="w-6 h-6 text-green-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <div>
            <strong className="block">Thanks —</strong>
            <span className="text-white/80 text-sm">We received your request and will be in touch shortly.</span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <style>{`
				/* local component styles for liquid glass and animations */
				@keyframes floaty { 0% { transform: translateY(0) } 50% { transform: translateY(-6px) } 100% { transform: translateY(0) } }
				@keyframes sheen { from { transform: translateX(-60%) } to { transform: translateX(120%) } }
				@keyframes pulse-gradient { 0% { background-position: 0% 50% } 100% { background-position: 100% 50% } }

				.glass { 
					backdrop-filter: blur(10px) saturate(120%);
					-webkit-backdrop-filter: blur(10px) saturate(120%);
				}

				.glass-shine {
					position: absolute;
					left: -30%;
					top: -30%;
					width: 160%;
					height: 60%;
					pointer-events: none;
					background: linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.02) 100%);
					transform: rotate(-20deg);
					opacity: 0.6;
					filter: blur(18px);
					animation: sheen 2.6s linear infinite;
				}

				/* shiny gold button */
				.btn-gold {
					position: relative;
					display: inline-flex;
					align-items: center;
					justify-content: center;
					gap: 0.5rem;
					color: #111;
					border-radius: 0.5rem;
					padding: 0.5rem 1.25rem;
					overflow: hidden;
					background: linear-gradient(90deg, #fff6c2 0%, #ffd700 45%, #ffb700 100%);
					background-size: 200% 100%;
					box-shadow: 0 8px 22px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.6);
					transition: transform .15s ease, box-shadow .15s ease, background-position .8s ease;
				}

				.btn-gold::after {
					content: "";
					position: absolute;
					top: -40%;
					left: -30%;
					width: 60%;
					height: 200%;
					background: linear-gradient(120deg, rgba(255,255,255,0.9), rgba(255,255,255,0.06), rgba(255,255,255,0));
					transform: rotate(25deg);
					filter: blur(10px);
					opacity: 0.65;
					transition: transform .9s ease, opacity .9s ease;
					pointer-events: none;
				}

				.btn-gold:hover {
					transform: translateY(-3px);
					box-shadow: 0 12px 30px rgba(0,0,0,0.22);
					background-position: 100% 50%;
				}

				.btn-gold:active {
					transform: translateY(0);
					box-shadow: 0 6px 18px rgba(0,0,0,0.18);
				}

				/* loading variant keeps gold look but pulses */
				.btn-loading {
					animation: pulse-gradient 1.6s ease-in-out infinite;
					background-size: 200% 100%;
				}

				@keyframes spinner {
					to { transform: rotate(360deg); }
				}
			`}</style>

      <form onSubmit={handleSubmit} className="relative rounded-2xl glass bg-gradient-to-br from-white/4 to-white/6 border border-white/8 shadow-2xl overflow-hidden p-6 md:p-8 space-y-6 transform transition-all duration-300 hover:scale-[1.01]">
        {/* glass shine layer */}
        <div className="glass-shine" aria-hidden="true" />

        <div className="grid grid-cols-1 gap-4">
          <label className="flex flex-col text-sm">
            <span className="text-white/80 mb-1">
              Your name <span className="text-yellow-400">*</span>
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name *"
              className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition-shadow duration-200 shadow-sm"
              required
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="text-white/80 mb-1">
              Company name <span className="text-yellow-400">*</span>
            </span>
            <input
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              placeholder="Company name *"
              className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition-shadow duration-200 shadow-sm"
              required
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="text-white/80 mb-1">
              Telephone number <span className="text-yellow-400">*</span>
            </span>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Telephone number *"
              className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition-shadow duration-200 shadow-sm"
              required
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="text-white/80 mb-1">
              Email address <span className="text-yellow-400">*</span>
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email address *"
              className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition-shadow duration-200 shadow-sm"
              required
            />
          </label>

          <label className="flex flex-col text-sm">
            <span className="text-white/80 mb-1">
              Message <span className="text-yellow-400">*</span>
            </span>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              rows={5}
              placeholder="Message *"
              className="rounded-md bg-white/5 border border-white/10 px-3 py-2 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-yellow-400/40 transition-shadow duration-200 shadow-sm resize-none"
              required
            />
          </label>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className={`relative inline-flex items-center gap-3 rounded-md font-medium transition-transform active:translate-y-0.5 btn-gold ${loading ? "btn-loading" : ""}`}
            disabled={loading}
            aria-busy={loading}
          >
            {loading ? (
              <>
                <svg className="w-4 h-4 text-black animate-spin" style={{ animationDuration: "0.9s" }} viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.15)" strokeWidth="3" />
                  <path d="M22 12a10 10 0 0 0-10-10" stroke="black" strokeWidth="3" strokeLinecap="round" />
                </svg>
                <span className="text-black">Enquiring...</span>
              </>
            ) : (
              <span className="text-black">Enquire now</span>
            )}
          </button>
        </div>
      </form>
    </>
  );
}