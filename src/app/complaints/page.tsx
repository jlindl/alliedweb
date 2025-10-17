import React from 'react';
import { Header } from '../../components/Header';

export const metadata = {
  title: 'Complaints — Allied',
};

export default function ComplaintsPage() {
  return (
    <div className="min-h-screen w-full bg-black text-white">
      <Header activePath="/complaints" />

      <main className="relative z-10 max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#D4AF37]">What if I have a complaint?</h1>

        <section className="mt-6 prose prose-invert text-zinc-300">
          <p>
            Our goal is to give excellent service to all our customers but we recognise that things do go wrong
            occasionally. We take all complaints we receive seriously and aim to resolve our customers’ problems
            promptly.
          </p>

          <p>
            To ensure that we provide the kind of service you expect we welcome your feedback. We record and analyse
            your comments to make sure we continually improve the service we offer.
          </p>

          <h2>What will happen if you complain?</h2>
          <p>
            Most of our customers’ concerns can be resolved quickly (within 5 working days) but occasionally more
            detailed enquiries are needed. If this is likely we will contact you with an update and give you an expected
            date of response. This will not be beyond 20 days from when you first made your complaint.
          </p>

          <p>
            If you are dissatisfied with our final decision, you may refer the matter to the Financial Ombudsman Service
            (FOS).
          </p>

          <p>
            The FOS will only consider your complaint if you have given us the opportunity to resolve it and you are a
            private policy holder, those that employ less than 10 persons and whose turnover annual balance sheet is less
            than 2 million Euros, and charities or trusts whose turnover or net assets respectively are less than £1m.
          </p>

          <p>
            Should you remain dissatisfied with our final decision or more than 8 weeks have passed since receipt of your
            complaint then if you wish, you may contact the FOS. Details can be found at
            <a className="text-[#D4AF37] underline ml-1" href="https://www.financial-ombudsman.org.uk" target="_blank" rel="noreferrer">www.financial-ombudsman.org.uk</a>.
          </p>

          <h2>Making a complaint</h2>
          <p className="font-semibold">By e-mail: <a className="text-[#D4AF37] underline" href="mailto:info@alliedinsurance.co.uk">info@alliedinsurance.co.uk</a></p>
          <p className="font-semibold">By post: Allied House, 98 Standishgate, Wigan, Lancs, WN1 2AG</p>
          <p className="font-semibold">By telephone: 01942 403370</p>

          <h2>The Financial Ombudsman Service</h2>
          <p className="font-semibold">By e-mail: <a className="text-[#D4AF37] underline" href="mailto:complaint.info@financial-ombudsman.org.uk">complaint.info@financial-ombudsman.org.uk</a></p>
          <p className="font-semibold">By post: South Quay Plaza, 183 Marsh Road, London E14 9SR</p>
          <p className="font-semibold">By telephone: 0800 023 4567</p>
        </section>
      </main>
    </div>
  );
}
