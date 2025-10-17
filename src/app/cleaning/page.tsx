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

			<section className="relative z-10 py-16 md:py-24">
				<div className="mx-auto max-w-5xl px-6">
					<div className="text-center mb-12">
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-br from-white via-[#FFD700] to-[#D4AF37] tracking-tight leading-tight">
							Cleaning specialists
						</h1>
						<div className="w-28 h-1 rounded-full bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mb-6 shadow-lg shadow-[#D4AF37]/40" />
						<p className="text-white/75 max-w-3xl mx-auto text-lg leading-relaxed">
							We provide specialist insurance for cleaning businesses through our dedicated brand, Polished Insurance. For full details of cover and to enquire, please visit the Polished site.
						</p>
					</div>

					<div className="mx-auto max-w-xl">
						<a
							href="https://polished-insurance.co.uk/"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative block w-full text-center rounded-xl px-8 py-5 bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] text-black font-bold shadow-lg shadow-[#D4AF37]/30 hover:shadow-xl hover:shadow-[#D4AF37]/40 hover:scale-[1.02] transition-all duration-400 overflow-hidden"
						>
							<span className="relative z-10 inline-flex items-center justify-center gap-3">
								Visit Polished Insurance
								<svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
								</svg>
							</span>
							<span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 -translate-x-full group-hover:translate-x-full transition-all duration-700 ease-in-out group-hover:opacity-100" />
						</a>

						<p className="text-center text-white/60 text-sm mt-4">
							Opens in a new tab: polished-insurance.co.uk
						</p>
					</div>
				</div>
			</section>
		</main>
	);
}
