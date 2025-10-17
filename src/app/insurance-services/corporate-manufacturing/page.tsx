"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function CorporateManufacturingPage() {
  return (
    <ServicePageTemplate
      title="Corporate Manufacturing"
      paragraphs={[
        'Manufacturing at scale requires resilience. Corporate manufacturers face risks across supply chains, worker safety, automation, and global compliance. Protecting production lines and reputation is essential.',
      ]}
      ctaLabel="Talk to a Corporate Manufacturing Expert"
  imageSrc="/images/manufacturing.jpg"
  imageAlt="Manufacturing plant and assembly line"
      activePath="/insurance-services/corporate-manufacturing"
      highlights={{
        risks: [
          'Machinery breakdown and downtime',
          'Supply chain disruption across global suppliers',
          'Product liability and mass recalls',
          'Health & safety for large workforces',
          'Environmental compliance in multiple regions',
        ],
        helps: [
          'Property and machinery breakdown cover',
          'Global supply chain risk transfer and continuity planning',
          'Product liability and recall insurance',
          'Workers’ comp and liability tailored to large operations',
          'Environmental liability protection',
        ],
        reasons: [
          'Experience with global manufacturing corporations',
          'Integrated coverage for supply chains and production',
          'Risk management strategies to reduce downtime',
          'Specialist teams for recall and regulatory defence',
        ],
      }}
    >
      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Corporate Manufacturing Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
