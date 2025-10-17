import ServicePageTemplate from '../ServicePageTemplate';

export default function CleaningContractors() {
  return (
    <ServicePageTemplate
      title="Cleaning Contractors"
      paragraphs={[
        'We provide comprehensive insurance covers designed specifically for cleaning businesses. Our Public Liability Insurance policies include cover for damage to property worked upon, treatment risks, loss of customers keys and theft by employees. We can also arrange cover for your tools and equipment, goods in transit, legal expenses and many more covers.',
        'Cover can be arranged online by clicking here and the premium can be paid by monthly direct debit to help you spread the cost.',
      ]}
      activePath="/insurance-services/cleaning-contractors"
    />
  );
}
