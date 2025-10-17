import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';


export default function Page() {
  return (
    <ServicePageTemplate
      title="Retail & Shops"
      paragraphs={["Retailers — from independent shops to restaurants — face risks from theft to liability. Insurance helps keep your doors open."]}
      ctaLabel="Get a Quote"
      imageSrc="/images/retail.jpeg"
      activePath="/insurance-services/retail-shops"
      highlights={{
        risks: [
          'Theft, burglary or vandalism',
          'Stock damage or spoilage',
          'Customer accidents on premises',
          'Food safety and hygiene compliance',
          'Business interruption from fire, flood or closure',
        ],
        helps: [
          'Property and stock insurance',
          'Employers’ and public liability cover',
          'Business interruption insurance',
          'Specialist food hygiene advice (for food retail)',
          'Contents and fixtures cover',
        ],
        reasons: [
          'Sector expertise for UK shops and restaurants',
          'Tailored cover for small operations',
          'Balance of affordability and comprehensive protection',
        ],
      }}
    >

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Retail &amp; Shops Insurance Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
