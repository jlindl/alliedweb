import ServicePageTemplate from '../ServicePageTemplate';

export default function CareAndCharity() {
  return (
    <ServicePageTemplate
      title="Care & Charity"
      paragraphs={[
        'Specialist insurance solutions for care providers, charities, and not-for-profit organisations. We understand the unique operational and regulatory needs of care services and charitable operations.',
        'Covers can include public liability, professional indemnity, employers liability, and trustees liability tailored to your organisation’s activities and governance structure.',
      ]}
      activePath="/insurance-services/care-and-charity"
    />
  );
}
