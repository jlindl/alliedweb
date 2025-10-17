"use client";

import React from 'react';
import ServicePageTemplate from '../ServicePageTemplate';

export default function Page() {
  return (
    <ServicePageTemplate
      title="Tradespeople Insurance"
      paragraphs={['Insurance for tradespeople — honest, simple cover for carpenters, electricians, plumbers and other trades.']}
      ctaLabel="Talk to a Tradespeople (Carpenters, Electricians, Plumbers) Insurance Expert"
      imageSrc="/images/tradesppl.jpg"
      activePath="/insurance-services/tradespeople"
      highlights={{
        risks: [
          'Injury from tools, ladders or machinery',
          'Loss or damage to tools and plant',
          'Client liability for accidents or mistakes',
          'Disputes over workmanship',
          'Health & safety compliance failures',
        ],
        helps: [
          'Trades insurance bundles (tools, liability, indemnity)',
          'Employers’ and public liability',
          'Professional indemnity (if you design/advise)',
          'Contract advisory services',
          'Health & safety training support',
        ],
        reasons: [
          'Policies built for UK trades',
          'Knowledge of regulations and common risks',
          'Affordable packages designed for sole traders and small firms',
        ],
      }}
    >

      <footer className="mt-8 flex justify-center">
        <a className="rounded-full border border-white px-5 py-3 text-sm text-white hover:bg-white/10 transition" href="/get-a-quote">Talk to a Tradespeople (Carpenters, Electricians, Plumbers) Insurance Expert</a>
      </footer>
    </ServicePageTemplate>
  );
}
