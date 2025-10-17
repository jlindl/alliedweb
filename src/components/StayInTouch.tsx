"use client"

import React, { useState } from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

const StayInTouch: React.FC = () => {
	const [email, setEmail] = useState('');
	const [renewalDate, setRenewalDate] = useState(''); // optional ISO date string
	const [status, setStatus] = useState<'idle'|'success'|'error'|'loading'>('idle');
	const [errorMsg, setErrorMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

	const validateEmail = (value: string) => {
		return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!validateEmail(email)) {
			setStatus('error');
			setErrorMsg('Please enter a valid email address.');
			return;
		}

		setStatus('loading');
		setErrorMsg('');

		try {
			const res = await fetch('/api/stay-in-touch', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, renewalDate })
			});

			const json = await res.json().catch(() => ({}));
			if (!res.ok || (json && json.ok === false)) {
				setStatus('error');
				setErrorMsg(json?.error || 'Submission failed');
				return;
			}

			// Success - show confirmation and include sheet name if available
			setStatus('success');
			setEmail('');
			setRenewalDate('');
			// include sheet name confirmation in the success message
			if (json && json.sheetName) {
				setSuccessMsg('Saved to sheet: ' + String(json.sheetName));
			} else {
				setSuccessMsg('Saved successfully');
			}
			setTimeout(() => { setStatus('idle'); setErrorMsg(''); setSuccessMsg(''); }, 4000);
		} catch (err: unknown) {
			setStatus('error');
			setErrorMsg(err instanceof Error ? err.message : String(err));
		} finally {
			setStatus((s) => s === 'loading' ? 'idle' : s);
		}
	};

	return (
		<section
			className="stay-in-touch bg-gradient-to-b from-[#000000] to-[#050505] text-white py-16 px-6 md:px-8"
			aria-labelledby="sit-heading"
		>
			<div className="container max-w-5xl mx-auto">
				<h2
					id="sit-heading"
					className="sit-title text-2xl md:text-3xl font-extrabold text-center mb-6 text-[#D4AF37]"
				>
					Get notified about your renewal
				</h2>

				<div
					className="card relative rounded-2xl p-6 md:p-8 overflow-hidden bg-white/4 border border-white/10 backdrop-blur-lg shadow-md"
					role="region"
					aria-label="Renewals notification signup"
				>
					<div className="absolute inset-0 pointer-events-none rounded-2xl bg-gradient-to-b from-white/6 to-transparent opacity-40" aria-hidden="true" />

					<div className="relative z-10">
						<div className="card-inner grid gap-6 md:grid-cols-2 items-start">
							<div className="left space-y-4">
								<h3 className="card-heading text-sm text-white/90 font-semibold">Renewals & support</h3>

								<p className="text-sm text-white/70 max-w-lg">
									Not due for renewal yet? Leave your contact email and an approximate renewal date if you have one — we&apos;ll get in touch around your renewal date. The date is optional.
								</p>

								<dl className="contact-list grid grid-cols-2 gap-x-4 gap-y-2 items-center text-sm">
									<dt className="text-right pr-2 font-semibold text-white/60">Telephone</dt>
									<dd className="text-left font-semibold text-white">01942 403370</dd>


									<dt className="text-right pr-2 font-semibold text-white/60">Email</dt>
									<dd className="text-left font-semibold text-white">enquiry@alliedinsurance.co.uk</dd>
								</dl>

								<div className="social-row flex gap-3 mt-3" aria-label="Social links">
									<a className="social inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/8 text-white/90 bg-white/3 transition hover:scale-105" href="#" aria-label="Facebook" title="Facebook"><FaFacebookF aria-hidden="true" className="w-4 h-4" /></a>
									<a className="social inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/8 text-white/90 bg-white/3 transition hover:scale-105" href="#" aria-label="Twitter" title="Twitter"><FaTwitter aria-hidden="true" className="w-4 h-4" /></a>
									<a className="social inline-flex items-center justify-center w-9 h-9 rounded-md border border-white/8 text-white/90 bg-white/3 transition hover:scale-105" href="#" aria-label="LinkedIn" title="LinkedIn"><FaLinkedinIn aria-hidden="true" className="w-4 h-4" /></a>
								</div>

								<a className="sit-privacy inline-block mt-2 text-sm text-white/60 hover:text-white" href="#">Privacy & cookies</a>
							</div>

							<div className="right md:max-w-[420px]">
								<h3 className="card-heading text-sm text-white/90 font-semibold mb-4">Notify me about renewals</h3>

								<form className="sit-form w-full" onSubmit={handleSubmit} noValidate>
									<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-end">
										<div>
											<label htmlFor="sit-email" className="block text-xs text-white/70 mb-1">Email address</label>
											<input
												id="sit-email"
												aria-label="Email"
												placeholder="you@example.com"
												className={`sit-input w-full bg-transparent text-white rounded-lg px-4 py-3 border border-white/8 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition ${status === 'error' ? 'ring-2 ring-red-400/40' : ''}`}
												type="email"
												required
												aria-invalid={status === 'error'}
												value={email}
												onChange={(e) => setEmail(e.target.value)}
											/>
										</div>

										<div>
											<label htmlFor="sit-renewal" className="block text-xs text-white/70 mb-1">Renewal date (optional)</label>
											<input
												id="sit-renewal"
												aria-label="Renewal date (optional)"
												className="sit-input w-full bg-transparent text-white rounded-lg px-4 py-3 border border-white/8 placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/20 transition"
												type="date"
												value={renewalDate}
												onChange={(e) => setRenewalDate(e.target.value)}
											/>
										</div>

										<div className="sm:col-span-2 flex justify-end">
											<button
													className={`sit-button inline-flex items-center justify-center px-6 py-3 rounded-lg ${status === 'success' ? 'bg-green-400/90 text-black' : 'bg-gradient-to-r from-[#D4AF37] to-[#B8860B] text-black'} font-semibold shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-4 focus-visible:ring-[#D4AF37]/20`}
													type="submit"
													aria-live="polite"
													disabled={status === 'loading' || status === 'success'}
													aria-busy={status === 'loading'}
												>
													<span className="relative z-10 inline-flex items-center gap-2">
														{status === 'loading' ? (
															<svg className="w-4 h-4 text-black animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
																<circle cx="12" cy="12" r="10" stroke="rgba(0,0,0,0.15)" strokeWidth="3" />
																<path d="M22 12a10 10 0 0 0-10-10" stroke="black" strokeWidth="3" strokeLinecap="round" />
															</svg>
														) : null}

														{status === 'success' ? (
															<svg className="w-4 h-4 text-black" viewBox="0 0 24 24" fill="none" aria-hidden="true">
																<path d="M20 6L9 17l-5-5" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
															</svg>
														) : null}

														<span>{status === 'success' ? 'THANK YOU' : (status === 'loading' ? 'Sending...' : 'Notify me')}</span>
													</span>
												</button>
										</div>
									</div>

									<div className="form-meta mt-3 min-h-[22px] text-sm" role="status" aria-live="polite">
										{status === 'error' && <span className="error text-red-400 font-semibold">{errorMsg}</span>}
										{status === 'success' && (
											<>
												<span className="success text-[#D4AF37] font-semibold">Thanks — we will contact you around your renewal date.</span>
												{successMsg && <div className="mt-1 text-sm text-white/80">{successMsg}</div>}
											</>
										)}
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default StayInTouch
					
							