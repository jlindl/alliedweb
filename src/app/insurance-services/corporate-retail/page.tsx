import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function CorporateRetailPage() {
  return (
    <ServicePageTemplate
      title="Corporate Retail"
      paragraphs={[
        'Large retailers face multi‑channel risks — physical stores, online platforms, distribution networks. Protecting assets, employees, and customer trust is critical.',
      ]}
      ctaLabel="Talk to a Corporate Retail Expert"
      imageSrc="/images/corporateretail.jpg"
      imageAlt="Retail storefronts and warehouse logistics"
      activePath="/insurance-services/corporate-retail"
      highlights={{
        risks: [
          'Property damage or stock loss across multiple sites',
          'Cyber and payment fraud risk',
          'Customer and employee liability',
          'Supply chain disruption for inventory and logistics',
          'Regulatory & reputational exposure',
        ],
        helps: [
          'Property, stock & contents insurance',
          'Cyber and data breach coverage',
          "Public & employers’ liability",
          'Business interruption cover',
          'Supply chain risk management',
        ],
        reasons: [
          'Sector expertise in both in‑store and e‑commerce retail',
          'Protection for large scale operations and logistics',
          'Flexible policies for fast‑changing environments',
        ],
      }}
    >
      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Corporate Retail Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
