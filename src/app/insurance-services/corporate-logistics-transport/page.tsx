"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

const paragraphs = [
  'Global logistics companies connect supply chains but carry risks at every link — cargo, fleet, warehousing, regulation.',
];

export default function CorporateLogisticsPage() {
  return (
    <ServicePageTemplate
      title="Corporate Logistics & Transport"
      paragraphs={paragraphs}
  ctaLabel="Talk to a Logistics Expert"
  imageSrc="/images/transport.jpg"
  imageAlt="Trucks and transport logistics"
      activePath="/insurance-services/corporate-logistics-transport"
      highlights={{
        risks: [
          'Cargo theft and damage',
          'Fleet accidents and liability',
          'Warehousing and distribution centre exposures',
          'International trade compliance risks',
          'Business interruption from strikes or disruption',
        ],
        helps: [
          'Cargo and freight cover',
          'Fleet liability insurance',
          'Warehouse property and liability cover',
          'Trade compliance support',
          'Business continuity planning',
        ],
        reasons: [
          'Expertise in international transport regulations',
          'Coverage across air, sea, and land logistics',
          'Focus on keeping supply chains resilient',
        ],
      }}
    >


      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Corporate Logistics &amp; Transport Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
