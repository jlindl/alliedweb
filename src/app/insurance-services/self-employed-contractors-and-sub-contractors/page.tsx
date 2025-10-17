import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="Self‑Employed Contractors & Sub‑Contractors"
      paragraphs={["For tradespeople and contractors working independently, every job matters — and so does every risk."]}
      ctaLabel="Talk to a Self‑Employed Contractors & Sub‑Contractors Insurance Expert"
      imageSrc="/images/contractor-hero.jpg"
      activePath="/insurance-services/self-employed-contractors-and-sub-contractors"
      highlights={{
        risks: [
          'Client or third‑party liability claims',
          'Loss of tools or materials',
          'Downtime due to disputes or delays',
          'Errors or omissions in advice or work',
          'Workplace safety issues',
        ],
        helps: [
          'Tailored public liability cover',
          'Professional indemnity for advice/design work',
          'Tools and materials insurance',
          'Business interruption cover',
          'Dispute resolution and legal expense support',
        ],
        reasons: [
          'UK‑specific cover for sole traders and subcontractors',
          'Clear, affordable policies',
          'Protection scaled to your work and contracts',
        ],
      }}
    >

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Self‑Employed Contractors &amp; Sub‑Contractors Insurance Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
