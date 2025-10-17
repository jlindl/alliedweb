import ServicePageTemplate from '../ServicePageTemplate';

export default function Travel() {
  return (
    <ServicePageTemplate
      title="Travel"
      paragraphs={[
        'Single trip and annual multi-trip travel insurance to protect against medical emergencies, trip cancellations, lost baggage and personal liability while abroad.',
        'Policies can be tailored for business travel, adventure activities and pre-existing medical conditions where required.',
      ]}
      activePath="/insurance-services/travel"
    />
  );
}
