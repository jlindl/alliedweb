"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div>
            <h3
              className="font-bold mb-3"
              style={{
                background: "linear-gradient(90deg,#FFD700,#FFB200)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Commercial Products
            </h3>
            <ul className="text-sm space-y-2 text-white/95">
              <li><Link href="/insurance-services/contractors-and-tradesmen" className="hover:underline">Builders & Building Contractors</Link></li>
              <li><Link href="/insurance-services/self-employed-contractors-and-sub-contractors" className="hover:underline">Self‑Employed Contractors & Sub‑Contractors</Link></li>
              <li><Link href="/insurance-services/professional-indemnity" className="hover:underline">Professional Indemnity (Architects, Engineers, Accountants)</Link></li>
              <li><Link href="/insurance-services/public-liability-small-businesses" className="hover:underline">Public Liability for Small Businesses</Link></li>
              <li><Link href="/insurance-services/retail-shops" className="hover:underline">Retail & Shops</Link></li>
              <li><Link href="/insurance-services/tradespeople" className="hover:underline">Tradespeople (Carpenters, Electricians, Plumbers)</Link></li>
              <li><Link href="/insurance-services/corporate-insurance" className="hover:underline">Corporate Insurance & Risk Management</Link></li>
              <li><Link href="/insurance-services/corporate-manufacturing" className="hover:underline">Corporate Manufacturing</Link></li>
              <li><Link href="/insurance-services/corporate-retail" className="hover:underline">Corporate Retail</Link></li>
              <li><Link href="/insurance-services/corporate-logistics-transport" className="hover:underline">Corporate Logistics & Transport</Link></li>
              <li><Link href="/insurance-services/corporate-real-estate-property" className="hover:underline">Corporate Real Estate & Property</Link></li>
              <li><Link href="/insurance-services/corporate-financial-professional-services" className="hover:underline">Corporate Financial & Professional Services</Link></li>
              <li><Link href="/insurance-services/corporate-healthcare-life-sciences" className="hover:underline">Corporate Healthcare & Life Sciences</Link></li>
              <li><Link href="/insurance-services/corporate-energy-utilities" className="hover:underline">Corporate Energy & Utilities</Link></li>
              <li><Link href="/insurance-services/corporate-technology-media" className="hover:underline">Corporate Technology & Media</Link></li>
            </ul>
          </div>

          <div>
            <h3
              className="font-bold mb-3"
              style={{
                background: "linear-gradient(90deg,#FFD700,#FFB200)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Personal Products
            </h3>
            <ul className="text-sm space-y-2 text-white/95">
              <li><Link href="/insurance-services/motor-high-value-other" className="hover:underline">Motor (High Value/other)</Link></li>
              <li><Link href="/insurance-services/home-high-value-other" className="hover:underline">Home (High Value/other)</Link></li>
              <li><Link href="/insurance-services/travel" className="hover:underline">Travel</Link></li>
            </ul>

            <div className="hidden md:block">
              <h3
                className="font-bold mb-3"
                style={{
                  background: "linear-gradient(90deg,#FFD700,#FFB200)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                }}
              >
                Policies
              </h3>
              <ul className="text-sm space-y-2 text-white/95">
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
                <li><Link href="/terms-conditions" className="hover:underline">Terms & Conditions</Link></li>
                <li><Link href="/complaints" className="hover:underline">Complaints</Link></li>
                <li><Link href="/cookies" className="hover:underline">Cookies</Link></li>
              </ul>
            </div>
          </div>

          <div className="md:col-span-2">
            <h3
              className="font-bold mb-3"
              style={{
                background: "linear-gradient(90deg,#FFD700,#FFB200)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Who Are We?
            </h3>
            <p className="text-sm text-white/95">
              Allied Insurance Services Ltd are authorised and regulated by the Financial Conduct Authority under reference 309497.
            </p>
            <div className="mt-4 text-sm text-white/95">
              <p>Registered address</p>
              <p>Allied House,</p>
              <p>98 Standishgate,</p>
              <p>Wigan, WN1 1XA</p>
              <p className="mt-3">Registered in England no: 04319831</p>
            </div>
          </div>

          <div>
            <h3
              className="font-bold mb-3"
              style={{
                background: "linear-gradient(90deg,#FFD700,#FFB200)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              General Enquiries
            </h3>
            <ul className="text-sm space-y-2 text-white/95">
              <li>01942 403370</li>
              <li><a href="mailto:enquiry@alliedinsurance.co.uk" className="underline">enquiry@alliedinsurance.co.uk</a></li>
              <li className="mt-4">
                Allied Insurance Services Ltd
                <br />Allied House, 98 Standishgate,
                <br />Wigan, WN1 1XA
              </li>
              <li className="mt-4">
                <Link
                  href="/contact"
                  className="inline-block px-5 py-2 text-sm rounded-full border-2 border-[#FFD700] bg-white/5 backdrop-blur-sm text-white hover:brightness-110 cta-shimmer"
                >
                  MAKE AN ENQUIRY
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm gap-3">
            <div>&copy; {new Date().getFullYear()} Allied Insurance Services. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="#top" className="underline text-white">Back to top</a>
            </div>
          </div>
        </div>
      </div>

      {/* Shimmer styles for gold sweep on hover */}
      <style jsx>{`
        .cta-shimmer {
          position: relative;
          overflow: hidden;
        }
        .cta-shimmer::before {
          content: "";
          position: absolute;
          top: 0;
          left: -75%;
          width: 50%;
          height: 100%;
          background: linear-gradient(
            90deg,
            rgba(255, 215, 0, 0) 0%,
            rgba(255, 215, 0, 0.95) 50%,
            rgba(255, 215, 0, 0) 100%
          );
          transform: skewX(-20deg);
          transition: none;
          will-change: left;
        }
        .cta-shimmer:hover::before {
          animation: shimmer 0.9s forwards;
        }
        @keyframes shimmer {
          from {
            left: -75%;
          }
          to {
            left: 125%;
          }
        }
      `}</style>
    </footer>
  );
}
