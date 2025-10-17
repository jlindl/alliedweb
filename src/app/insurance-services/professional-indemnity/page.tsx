"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';


export default function Page() {
  return (
    <ServicePageTemplate
      title="Professional Indemnity"
      paragraphs={["Professional services firms face high stakes: one oversight can result in claims, investigations, or reputational damage."]}
      ctaLabel="Talk to a Professional Indemnity (Architects, Engineers, Accountants) Insurance Expert"
      imageSrc="/images/Proindem.jpg"
      activePath="/insurance-services/professional-indemnity"
      highlights={{
        risks: [
          'Errors or omissions in design or advice',
          'Breach of duty or contract',
          'Regulatory investigation',
          'Reputational damage from client claims',
          'Intellectual property disputes',
        ],
        helps: [
          'Professional indemnity insurance tailored to your sector',
          'Legal defence costs',
          'Regulatory investigation cover',
          'Contract review and advisory',
          'Reputation management support',
        ],
        reasons: [
          'Experience across professional services sectors',
          'Protection aligned with UK regulatory standards',
          'Focused on safeguarding your reputation and finances',
        ],
      }}
    >

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Professional Indemnity (Architects, Engineers, Accountants) Insurance Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
