import ServicePageTemplate from '../ServicePageTemplate';

export default function Marine() {
  return (
    <ServicePageTemplate
      title="Marine"
      paragraphs={[
        'Marine transit and cargo insurance to protect goods in transit, whether domestic or international. Cover includes theft, damage and certain delay-related losses.',
        'We work with carriers and shippers to structure cover that matches your routes, packaging and logistics partners.',
      ]}
      activePath="/insurance-services/marine"
    />
  );
}
