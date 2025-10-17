import ServicePageTemplate from '../ServicePageTemplate';

export default function PropertyOwners() {
  return (
    <ServicePageTemplate
      title="Property Owners (Commercial & Residential)"
      paragraphs={[
        'Policies for landlords and property owners including buildings, contents, loss of rent and liability. Covers both single properties and portfolios.',
        'Optional features include tenant default cover, accidental damage and loss of rent protection to maintain cashflow during repairs.',
      ]}
      activePath="/insurance-services/property-owners-commercial-residential"
    />
  );
}
