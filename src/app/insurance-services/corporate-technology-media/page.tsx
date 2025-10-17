"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function CorporateTechnologyPage() {
  return (
    <ServicePageTemplate
      title="Corporate Technology & Media"
      paragraphs={[
        'Corporate tech and media firms face rapid innovation cycles, IP disputes, and reputational exposure.',
      ]}
      ctaLabel="Talk to a Corporate Technology & Media Expert"
  imageSrc="/images/techmed.jpg"
  imageAlt="Technology and media"
      activePath="/insurance-services/corporate-technology-media"
      highlights={{
        risks: [
          'Cyber and ransomware attacks',
          'Intellectual property infringement',
          'Regulatory data privacy issues',
          'Production delays and cancellations',
          'Reputational crises',
        ],
        helps: [
          'Cyber liability and data breach cover',
          'IP protection insurance',
          'Errors & omissions cover',
          'Media and production risk policies',
          'Crisis management support',
        ],
        reasons: [
          'Experience protecting large tech and media organisations',
          'Solutions that adapt with rapid change',
          'Coverage for both creative and technical risks',
        ],
      }}
    >
      

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Corporate Technology &amp; Media Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
