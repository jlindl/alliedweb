import ServicePageTemplate from '../ServicePageTemplate';

export default function MotorTradeInsurance() {
  return (
    <ServicePageTemplate
      title="Motor Trade Insurance"
      paragraphs={[
        'Policies designed for motor traders, dealers and repairers providing road risk cover, transit for sold vehicles, and premises cover for stock and tools.',
        'Options include courtesy car cover, client vehicle cover, and protection for test drives and delivery.',
      ]}
      activePath="/insurance-services/motor-trade-insurance"
    />
  );
}
