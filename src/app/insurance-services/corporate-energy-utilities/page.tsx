"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function CorporateEnergyPage() {
  return (
    <ServicePageTemplate
      title="Corporate Energy & Utilities"
      paragraphs={[
        'Energy and utilities corporations operate in high‑risk, highly regulated environments. Risks span environmental, operational, and political challenges.',
      ]}
      ctaLabel="Talk to a Corporate Energy & Utilities Expert"
      activePath="/insurance-services/corporate-energy-utilities"
  imageSrc="/images/factory.jpg"
      highlights={{
        risks: [
          'Environmental and pollution liability',
          'Operational breakdowns',
          'Political and supply chain instability',
          'Worker safety in hazardous environments',
          'Transition to renewables',
        ],
        helps: [
          'Pollution liability cover',
          'Property and breakdown protection',
          'Political risk insurance',
          'Contractor and workforce safety programs',
          'Renewable transition advisory',
        ],
        reasons: [
          'Global energy and utility sector expertise',
          'Balanced solutions for traditional and renewable operations',
          'Support in navigating regulatory and political challenges',
        ],
      }}
    >
      
    </ServicePageTemplate>
  );
}
