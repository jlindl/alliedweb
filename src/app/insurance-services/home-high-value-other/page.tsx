import ServicePageTemplate from '../ServicePageTemplate';

export default function HomeHighValue() {
  return (
    <ServicePageTemplate
      title="Home (High value/other)"
      paragraphs={[
        'High-value and bespoke home insurance for unique properties, contents and valuable collections. Policies include tailored valuations and specified item cover.',
        'We work with clients to document items and recommend appropriate limits and endorsements for high-net-worth residences.',
      ]}
      activePath="/insurance-services/home-high-value-other"
    />
  );
}
