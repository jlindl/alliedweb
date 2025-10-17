"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

const paragraphs = [
  'Corporate healthcare and life sciences firms manage patient safety, clinical research, compliance, and innovation risks.',
];

export default function CorporateHealthcarePage() {
  return (
    <ServicePageTemplate
      title="Corporate Healthcare & Life Sciences"
      paragraphs={paragraphs}
      ctaLabel="Talk to a Corporate Healthcare Expert"
      activePath="/insurance-services/corporate-healthcare-life-sciences"
      imageSrc="/images/healthcare.jpg"
      imageAlt="Healthcare and life sciences"
      highlights={{
        risks: [
          'Medical malpractice claims',
          'Clinical trial exposures',
          'Data protection & cyber threats',
          'Product liability and recalls',
          'Regulatory investigations',
        ],
        helps: [
          'Medical malpractice insurance',
          'Clinical trial liability cover',
          'Cyber liability protection',
          'Product recall cover',
          'Regulatory investigation support',
        ],
        reasons: [
          'Expertise across healthcare providers and biotech firms',
          'Experience in clinical trial cover and compliance',
          'Protection that balances innovation with responsibility',
        ],
      }}
    >

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Corporate Healthcare &amp; Life Sciences Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
