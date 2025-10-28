import React from 'react';
import { Header } from '../../components/Header';

export const metadata = {
	title: 'Cleaning specialists — Allied',
	description: 'Specialist cleaning insurance from Polished Insurance. Learn more and get covered for your cleaning business.'
};

export default function CleaningSpecialistsPage() {
	return (
		<main className="relative min-h-screen bg-black text-white overflow-hidden">
			<Header activePath="/cleaning" />

			{/* Animated background accent */}
			<div className="absolute inset-0 pointer-events-none z-0">
				<div className="absolute left-1/2 top-0 -translate-x-1/2 w-[80vw] h-[40vh] bg-gradient-to-br from-[#FFD700]/30 via-[#D4AF37]/10 to-transparent blur-3xl opacity-60 animate-pulse" />
			</div>

			{/* Hero */}
			<section className="relative z-10 py-16 md:py-24">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
						<div className="lg:col-span-2">
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-[#FFD700] to-[#D4AF37] tracking-tight drop-shadow-lg leading-tight">
								Cleaning Contractors & Facilities Management
							</h1>
							<p className="text-2xl md:text-2xl font-semibold text-white/90 mb-4 drop-shadow">
								Cover Built for Cleaners, by Specialists
							</p>
							<p className="text-white/70 leading-relaxed text-lg mb-6">
								Running a cleaning business means you deal with more than dirt and grime — whether you clean homes, offices, industrial sites, or specialist surfaces, you’re working around people’s property, premises, and reputations. You need insurance that truly understands the cleaning trade — not a general-policy that leaves key exposures uncovered.
							</p>

							<div className="mt-6 flex flex-wrap items-center gap-4">
								<a
									href="https://polished-insurance.co.uk/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-3 rounded-xl px-6 py-3 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black font-bold shadow-xl shadow-[#FFD700]/30 hover:scale-[1.04] hover:shadow-2xl hover:shadow-[#FFD700]/40 transition-all duration-300 ring-2 ring-[#FFD700]/30 focus:outline-none focus:ring-4 focus:ring-[#FFD700]/50"
									aria-label="Visit Polished Insurance (opens in new tab)"
								>
									Visit Polished Insurance
									<svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
										<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
									</svg>
								</a>

								<a
									href="#contact"
									className="inline-flex items-center gap-2 rounded-xl px-5 py-3 border border-white/10 text-white/90 hover:bg-gradient-to-r hover:from-[#FFD700]/10 hover:to-white/10 transition focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40"
								>
									Get a tailored quote
								</a>
							</div>
						</div>

						{/* CTA / Contact Card */}
						<div
							id="contact"
							className="rounded-2xl bg-gradient-to-b from-white/10 via-white/5 to-white/0 p-6 ring-1 ring-[#FFD700]/20 shadow-xl shadow-[#FFD700]/10 backdrop-blur-md border border-white/10 transition-all duration-300 hover:ring-[#FFD700]/40 hover:shadow-2xl"
						>
							<h3 className="text-lg font-semibold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
								Enquire about specialist cover
							</h3>
							<p className="text-sm text-white/75 mb-4">
								Specialist public liability, treatment risk extensions, keyholder options, employers’ liability and tools cover — tailored for cleaning contractors across the UK & N. Ireland.
							</p>

							<div className="mb-4">
								<ul className="text-sm space-y-2">
									<li className="flex items-start gap-3">
										<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700]/30 to-white/10 text-[#FFD700] shadow-md">✓</span>
										<span className="text-white/80">Flexible policies for sole traders, partnerships and limited companies</span>
									</li>
									<li className="flex items-start gap-3">
										<span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-[#FFD700]/30 to-white/10 text-[#FFD700] shadow-md">✓</span>
										<span className="text-white/80">Treatment risk cover included</span>
									</li>
								</ul>
							</div>

							<a
								href="https://polished-insurance.co.uk/"
								target="_blank"
								rel="noopener noreferrer"
								className="block w-full text-center rounded-lg px-4 py-3 bg-gradient-to-r from-[#FFD700] via-[#D4AF37] to-[#FFD700] text-black font-semibold shadow-lg hover:scale-[1.03] hover:shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40"
							>
								Visit Polished Insurance
							</a>

							<p className="text-xs text-white/50 mt-3">
								Opens in a new tab: polished-insurance.co.uk
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Content Sections */}
			<section className="relative z-10 py-12 border-t border-white/10">
				<div className="mx-auto max-w-6xl px-6">
					<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
						{/* Risks */}
						<div className="lg:col-span-1 rounded-xl bg-gradient-to-br from-white/10 via-[#FFD700]/5 to-black/10 p-6 shadow-lg shadow-[#FFD700]/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#FFD700]/30">
							<h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
								Risks We See Every Day
							</h4>
							<p className="text-sm text-white/70 mb-4">Common exposures that general policies often miss:</p>
							<ul className="space-y-3 text-sm list-disc list-inside pl-2">
								{[
									"Damage to the property or item being cleaned (carpets, upholstery, glass, surfaces)",
									"Chemical or treatment risks (discolouration, shrinkage, corrosion)",
									"Loss of customer keys or failure to secure premises after work",
									"Public liability and injury claims",
									"Employer’s-liability risk if you use staff or subcontractors",
									"Theft or damage to tools & equipment"
								].map((text, idx) => (
									<li key={idx} className="text-white/80">{text}</li>
								))}
							</ul>
						</div>

						{/* How We Help */}
						<div className="rounded-xl bg-gradient-to-br from-white/10 via-[#FFD700]/5 to-black/10 p-6 shadow-lg shadow-[#FFD700]/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#FFD700]/30">
							<h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
								How We Help
							</h4>
							<ul className="space-y-3 text-sm text-white/80">
								<li>Specialist public liability cover for cleaners, including damage to the item being worked on.</li>
								<li>Treatment risk extensions to policy (covering cleaning-agent damage etc) built in.</li>
								<li>Keyholder cover and failure to secure premises options for peace of mind.</li>
								<li>Employers’ liability cover for when you have employees or subcontractors.</li>
								<li>Tools & equipment insurance to protect the kit that keeps your business going.</li>
								<li>Flexible policy tailored to cleaning contractors across the UK & N. Ireland.</li>
							</ul>
						</div>

						{/* Why Work With Us */}
						<div className="rounded-xl bg-gradient-to-br from-white/10 via-[#FFD700]/5 to-black/10 p-6 shadow-lg shadow-[#FFD700]/10 border border-white/10 backdrop-blur-md transition-all duration-300 hover:shadow-xl hover:ring-2 hover:ring-[#FFD700]/30">
							<h4 className="text-xl font-semibold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-[#FFD700] via-white to-[#D4AF37]">
								Why Work With Us
							</h4>
							<ul className="space-y-3 text-sm text-white/80">
								<li>We specialise only in cleaning business insurance — we understand the job, the risks, and the industry language.</li>
								<li>Our policies include cover elements many standard insurers exclude — fewer surprise gaps.</li>
								<li>Easy quoting for cleaning businesses, with options built for your trade: domestic cleaners, contract cleaners, window cleaners, carpet & upholstery cleaners.</li>
							</ul>

							<div className="mt-6">
								<a
									href="https://polished-insurance.co.uk/"
									target="_blank"
									rel="noopener noreferrer"
									className="inline-block rounded-lg px-5 py-3 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black font-semibold shadow-lg hover:scale-[1.04] hover:shadow-xl transition-transform focus:outline-none focus:ring-2 focus:ring-[#FFD700]/40"
								>
									Get covered now
								</a>
							</div>
						</div>
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
