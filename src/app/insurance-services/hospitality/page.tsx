import ServicePageTemplate from '../ServicePageTemplate';

export default function Hospitality() {
  return (
    <ServicePageTemplate
      title="Hospitality"
      paragraphs={[
        'Insurance solutions for hotels, restaurants, pubs and catering businesses. Cover includes public liability, employer liability, stock and contents, and business interruption.',
        'Specialist extensions for liquor liability, food contamination, and cover for events or temporary closures can be arranged.',
      ]}
      activePath="/insurance-services/hospitality"
    />
  );
}
