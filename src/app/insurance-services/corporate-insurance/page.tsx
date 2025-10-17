"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';


export default function CorporateInsurancePage() {
  return (
    <ServicePageTemplate
      title="Corporate Insurance & Risk Management"
      paragraphs={[
        'Tailored insurance for large organisations: cover for complex operations, high-value assets, M&A exposures and continuity of business.',
      ]}
      ctaLabel="Get a Quote"
      activePath="/insurance-services/corporate-insurance"
  imageSrc="/images/corporateinsurance.jpg"
  imageAlt="Corporate office buildings and insured assets"
      highlights={{
        risks: [
          'Liability exposures (employee, public, product) and litigation cost risk',
          'Regulatory & compliance risks across multiple jurisdictions',
          'Cyber threats, data breaches, and reputational damage',
          'Physical property damage and business interruption (fires, flood, supply chain failures)',
          'Mergers & Acquisitions transaction risk, latent defects in developments',
          'Intellectual property infringement or loss',
          'Crisis risk: terrorism, environmental disasters, workplace incidents',
          'Fleet & vehicle exposures for large commercial vehicle operations',
          'Trade credit risk: non‑payment from customers, fluctuations in global trade',
        ],
        helps: [
          'Bespoke liability insurance (General, Products, Public & Employers’)',
          'Cyber liability & risk advisory, tailored to your threat landscape',
          'Commercial property insurance with business interruption and asset damage cover',
          'Directors & Officers insurance designed for complex boards and global operations',
          'M&A due diligence support & transactional insurance products',
          'Trade credit insurance to protect cash flow',
          'Crisis management & disaster recovery planning',
          'Latent defects insurance for construction and property development projects',
          'Claims management & loss recovery services to streamline resolution effectively',
          'Delegated authority / underwriting framework support for specialist risks',
        ],
        reasons: [
          'Deep experience serving large, complex organisations with multi‑national footprints',
          'Broad expertise across the full spectrum of risks, not just insurance but prevention & response',
          'Strong track record in claims handling, meaning faster resolution & less disruption',
          'Flexibility & breadth: broad policy wordings, custom terms, coverage specific to your industry or regulatory environment',
          'Proactive partnership: risk management advice, scenario planning & resilience strategies',
        ],
      }}
    >
     
    </ServicePageTemplate>
  );
}
