import ServicePageTemplate from '../ServicePageTemplate';

export default function HighNetWorthHomeInsurance() {
  return (
    <ServicePageTemplate
      title="High Net Worth Home Insurance"
      paragraphs={[
        'Exceptional Coverage for Extraordinary Homes',
        'When your property and possessions are far beyond average, you deserve an insurance solution that reflects that reality. Standard home insurance policies often fall short when you own a luxury residence, expensive art, antiques or bespoke architecture. With the right cover, you protect not just a building—but your lifestyle, your legacy and your peace of mind.'
      ]}
      activePath="/insurance-services/home-high-value-other"
      highlights={{
        risks: [
          'Rebuild cost vastly exceeding standard policy limits due to size, materials or bespoke design.',
          'Valuable contents (art, antiques, jewellery, watch collections) with standard limits that don’t suffice.',
          'Non-standard features: listed status, heritage features, out-buildings, leisure facilities, multiple homes or overseas properties.',
          'Worldwide exposure: your possessions or your residence may span multiple jurisdictions.',
          'Liability exposures from events, domestic staff, guests or high value areas in the home.',
          'Underinsurance due to inflation, increase in rebuild costs, or failure to reassess valuations.'
        ],
        helps: [
          'Bespoke insurance programmes designed for properties with high rebuild values and contents well beyond standard policy limits.',
          '“All risks” cover rather than basic “named perils”, and global cover for possessions when away from home.',
          'Professional valuation support for buildings, contents and collections, ensuring sums insured meet true value.',
          'Specialist claims service with dedicated account manager, risk-consultation and fast-track support.',
          'Cover for unique features and exposures: listed buildings, works in progress, leisure facilities, reinsuring addresses overseas, outbuildings, high value gardens.',
          'Liability protection designed for estates where guests, staff, events or high value interactions are frequent.'
        ],
        reasons: [
          'Focused expertise in high net worth homeowners and private clients with bespoke assets and complex risks.',
          'Tailored cover rather than standard packages — we match the scale, uniqueness and global nature of your property and possessions.',
          'Proactive approach: Helping you avoid underinsurance, keeping valuations up to date, advising on risk mitigation.',
          'Service built for premium clients: privacy, dedicated handling, swift claims resolution, specialist underwriters.'
        ]
      }}
    />
  );
}
