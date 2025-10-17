import ServicePageTemplate from '../ServicePageTemplate';

export default function DirectorsAndOfficersLiabilityInsurance() {
  return (
    <ServicePageTemplate
      title="Directors & Officers Liability Insurance"
      paragraphs={[
        'Protects company directors and officers against claims alleging wrongful acts in their managerial capacity. Policies can cover defence costs, settlements and regulatory investigations.',
        'Suitable for private companies, charities and not-for-profits, with limits sized to reflect organisation governance and exposure.',
      ]}
      activePath="/insurance-services/directors-and-officers-liability-insurance"
    />
  );
}
