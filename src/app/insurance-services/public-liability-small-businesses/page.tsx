"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';


export default function Page() {
  return (
    <ServicePageTemplate
      title="Public Liability for Small Businesses"
      paragraphs={['Any small business can face public liability claims. Cover ensures you are protected against costly accidents and disputes.']}
  ctaLabel="Talk to an Expert"
      activePath="/insurance-services/public-liability-small-businesses"
      highlights={{
        risks: [
          'Injury to customers, suppliers, or third parties',
          'Damage to third‑party property',
          'Legal costs of defence',
          'Accidents at your premises or offsite',
          'Claims from services or products',
        ],
        helps: [
          'Flexible public liability insurance',
          'Legal defence cover',
          'Optional enhanced limits for contracts',
          'Claims management support',
          'Risk reduction guidance',
        ],
        reasons: [
          'Affordable liability protection for small businesses',
          'Straightforward policies',
          'Fast claims handling',
        ],
      }}
    >

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Public Liability for Small Businesses Insurance Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
