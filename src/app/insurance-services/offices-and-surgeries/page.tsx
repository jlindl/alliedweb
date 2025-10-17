import ServicePageTemplate from '../ServicePageTemplate';

export default function OfficesAndSurgeries() {
  return (
    <ServicePageTemplate
      title="Offices and Surgeries"
      paragraphs={[
        'Specialist premises cover for offices, clinics and surgeries including property, contents, business interruption and public liability.',
        'We can include professional indemnity for clinical professionals and arrange indemnity tailored to regulated environments.',
      ]}
      activePath="/insurance-services/offices-and-surgeries"
    />
  );
}
