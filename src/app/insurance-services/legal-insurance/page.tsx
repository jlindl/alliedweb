import ServicePageTemplate from '../ServicePageTemplate';

export default function LegalInsurance() {
  return (
    <ServicePageTemplate
      title="Legal Insurance"
      paragraphs={[
        'Legal expenses cover to assist with employment disputes, contract issues, debt recovery and certain regulatory defence costs. Policies typically include access to legal helplines and insured legal representation.',
        'Limits and scope vary; we can tailor cover to reflect business size and likely legal exposures.',
      ]}
      activePath="/insurance-services/legal-insurance"
    />
  );
}
