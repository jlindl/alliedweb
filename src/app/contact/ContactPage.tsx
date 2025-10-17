import React from "react";
import Contact from "../../components/Contact";
import { Header } from "../../components/Header";

export const metadata = {
  title: "Contact — Allied",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-black">
      <Header activePath="/contact" />

      <section className="relative z-10 py-12">
        <div className="mx-auto max-w-4xl px-6">
          <div className="text-center mb-8">
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-white mb-2">
              Get in <span className="text-[#D4AF37]">Touch</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Use the details below to contact our team — phone, email or visit our office.
            </p>
          </div>

          {/* Reuse the already-simplified Contact component */}
          <Contact />
        </div>
      </section>
    </main>
  );
}
          