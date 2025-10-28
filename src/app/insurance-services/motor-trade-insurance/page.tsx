import ServicePageTemplate from '../ServicePageTemplate';

export default function HighNetWorthMotorInsurance() {
  return (
    <ServicePageTemplate
      title="High Net Worth Motor Insurance"
      paragraphs={[
        'Exceptional Protection for Exceptional Vehicles',
        'Owning a high-value car means more than transport — it’s about craftsmanship, performance, and prestige. From luxury marques and performance vehicles to cherished classics and collections, high net worth motor insurance gives you the peace of mind that your investment is protected with precision.'
      ]}
      activePath="/insurance-services/motor-trade-insurance"
      highlights={{
        risks: [
          'Accidents, theft, or damage involving high-performance or luxury vehicles.',
          'Underinsurance caused by standard policy limits that don’t reflect vehicle value or appreciation.',
          'Inadequate agreed value cover leading to shortfalls if the car is written off.',
          'Limited replacement vehicle options in standard policies.',
          'Lack of cover for driving abroad or for multiple drivers across different vehicles.',
          'Increased repair costs due to specialist parts, bespoke finishes, or manufacturer-approved workshops.',
          'Risks associated with storing vehicles, collection management, or use in shows and events.'
        ],
        helps: [
          'Tailored high net worth motor insurance designed for prestige, performance, and classic vehicles.',
          'Agreed value policies ensuring you receive the full, pre-agreed value if the vehicle is declared a total loss.',
          'Comprehensive “any driver” and “any vehicle” flexibility for family fleets and collections.',
          'Access to manufacturer-approved repairers and genuine parts for all repairs.',
          'Worldwide driving and European travel cover built in.',
          'Replacement vehicle matching your own class and standard while repairs are made.',
          'Multi-vehicle and family fleet policies for streamlined protection and administration.',
          'Optional cover for temporary storage, private track use, or event participation.'
        ],
        reasons: [
          'Expertise in high net worth and specialist vehicle insurance, with experience handling collections and bespoke risks.',
          'Relationships with premium underwriters who understand the value, rarity, and emotional investment of luxury cars.',
          'Dedicated claims managers to ensure discretion, efficiency, and minimal disruption.',
          'Annual policy reviews and valuation support to maintain correct coverage levels.',
          'Concierge-style service designed for discerning clients who expect more than standard insurance.'
        ]
      }}
    />
  );
}
