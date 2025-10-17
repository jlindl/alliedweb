import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';
export default function Page() {
  return (
    <ServicePageTemplate
      title="Builders & Building Contractors"
      paragraphs={[
        'As a builder or contractor in the UK, you face site risks, regulatory requirements, and client expectations that demand robust protection.',
      ]}
      ctaLabel="Talk to a Builders & Building Contractors Insurance Expert"
  imageSrc="/images/contractor-hero.jpg"
  imageAlt="Builders and tradespeople on a construction site"
      activePath="/insurance-services/contractors-and-tradesmen"
      highlights={{
        risks: [
          'On‑site accidents and injuries',
          'Damage to tools, equipment, or temporary works',
          'Delays due to weather or supply issues',
          'Contract disputes and liability',
          'Regulatory compliance costs',
        ],
        helps: [
          'Builders’ all risks cover',
          'Public & employers’ liability insurance',
          'Tools and equipment cover',
          'Contractual liability protection',
          'Health & safety advisory',
        ],
        reasons: [
          'Specialist contractor insurance expertise in the UK',
          'Tailored cover for both large and small projects',
          'Guidance on compliance with UK regulations',
        ],
      }}
    >
      
    </ServicePageTemplate>
  );
}
