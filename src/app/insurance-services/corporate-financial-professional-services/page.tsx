"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function CorporateFinancialPage() {
  return (
    <ServicePageTemplate
      title="Corporate Financial & Professional Services"
      paragraphs={[
        'Financial and professional service firms face regulatory oversight, cyber exposure, and reputational risk. Cover must be precise and proactive.',
      ]}
      ctaLabel="Talk to a Corporate Financial & Professional Services Expert"
      activePath="/insurance-services/corporate-financial-professional-services"
  imageSrc="/images/Proindem.jpg"
  imageAlt="Financial and professional services"
    >
      
    </ServicePageTemplate>
  );
}
