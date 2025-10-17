"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';
import CorporateRealEstateContent from './CorporateRealEstateContent';

export default function CorporateRealEstatePage() {
  return (
    <ServicePageTemplate
      title="Corporate Real Estate & Property"
      paragraphs={[
        'Property portfolios and developments carry high-value risks. From natural catastrophes to tenant liability, comprehensive cover ensures resilience.',
      ]}
      activePath="/insurance-services/corporate-real-estate-property"
      scopers={['Portfolio owners', 'Developers', 'Residential landlords']}
  imageSrc="/images/corporateproperty.jpg"
  imageAlt="Commercial real estate and property"
      highlights={{
        risks: [
          'Catastrophic property damage',
          'Tenant liability exposures',
          'Development project risk and latent defects',
          'Regulatory compliance and planning exposure',
          'Business interruption from closures',
        ],
        helps: [
          'Commercial property and casualty cover',
          'Latent defects insurance',
          'Business interruption cover',
          'Public liability for tenants & visitors',
          'Environmental liability protection',
        ],
        reasons: [
          'Specialist property and real estate insurance teams',
          'Experience across retail, office, industrial and residential assets',
          'Support for development projects and ongoing operations',
        ],
      }}
    >
      <CorporateRealEstateContent />
    </ServicePageTemplate>
  );
}
