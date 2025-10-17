import ServicePageTemplate from '../ServicePageTemplate';

export default function CommercialMotorInsurance() {
  return (
    <ServicePageTemplate
      title="Commercial Motor Insurance"
      paragraphs={[
        'Cover for fleets and commercial vehicles including liability, accidental damage and theft. Policies can be structured for single vehicles, small fleets or larger commercial operations.',
        'Tailored options include hire and reward, goods in transit and drivers cover across multiple territories.',
      ]}
      activePath="/insurance-services/commercial-motor-insurance"
    />
  );
}
