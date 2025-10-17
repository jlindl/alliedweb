import ServicePageTemplate from '../ServicePageTemplate';

export default function ManufacturingAndWholesale() {
  return (
    <ServicePageTemplate
      title="Manufacturing & Wholesale"
      paragraphs={[
        'Insurance for manufacturers and wholesalers covering property, stock, product liability and business interruption. Policies are tailored to production processes and supply chain exposures.',
        'Considerations include product recall, transit cover, and contingent business interruption for key customers or suppliers.',
      ]}
      activePath="/insurance-services/manufacturing-and-wholesale"
    />
  );
}
