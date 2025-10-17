"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Header } from "./Header";

interface JobPosting {
  title: string;
  responsibilities: string[];
}

const jobPostings: JobPosting[] = [
  {
    title: "Commercial Account Handler",
    responsibilities: [
      "Managing incoming correspondence",
      "Responding to existing client queries",
      "Responding to client quotation requests",
      "Dealing with existing client renewals",
      "Credit control",
      "Assisting Execs with larger clients admin",
      "Liaising with insurers",
    ],
  },
  {
    title: "Schemes Account Handler",
    responsibilities: [
      "Dealing with existing scheme client queries",
      "Renewal of scheme client policies",
      "Respond to new scheme client quotations",
      "Marketing of scheme business",
      "Dealing with scheme claims",
      "Assist with development of new schemes",
      "Liaise with insurers underwriters",
      "Credit control",
    ],
  },
  {
    title: "Account Executive",
    responsibilities: [
      "New client acquisition",
      "Maintenance of client base",
      "Development of new scheme initiatives",
      "Credit control",
      "Development of insurer relations",
      "Development of commercial accounts",
    ],
  },
];

export default function Careers() {
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const toggleJob = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  // helper to build a mailto link with encoded subject and body
  const makeMailto = (subject: string, body: string) => {
    return `mailto:lynda.bibby@alliedinsurance.co.uk?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header activePath="/careers" />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Join Our Team
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto">
            Build your career with a leading insurance services provider committed to excellence and innovation.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Info Section */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-8 mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
              Current Opportunities
            </h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Explore our open positions below. Don&apos;t see the right fit? Send us your CV anyway – we&apos;ll keep it on file and reach out when relevant opportunities arise.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={makeMailto(
                  'CV Submission',
                  'Hello Allied Careers,\n\nPlease find attached my CV for your consideration. I will attach my CV to this email and include my contact details below.\n\nName:\nEmail:\nPhone:\nRole of interest:\n\nKind regards,'
                )}
                className="inline-flex items-center bg-[#D4AF37] text-black font-semibold px-6 py-3 rounded-lg hover:bg-[#C4A037] transition-colors"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Your CV
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center border border-white/20 text-white px-6 py-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6 text-gray-200">Open Positions</h3>
            {jobPostings.map((job, index) => (
              <div
                key={index}
                className="bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-[#D4AF37]/40 transition-all duration-300 hover:shadow-lg hover:scale-[1.01]"
              >
                {/* Job Header */}
                <button
                  onClick={() => toggleJob(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all duration-200 group"
                >
                  <h4 className="text-lg md:text-xl font-semibold text-white group-hover:text-[#D4AF37] transition-colors">{job.title}</h4>
                  <svg
                    className={`w-5 h-5 text-[#D4AF37] transition-transform ${
                      expandedJob === index ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {/* Job Details */}
                {expandedJob === index && (
                  <div className="px-6 pb-6 border-t border-white/10">
                    <div className="pt-5">
                      <h5 className="text-sm font-semibold text-[#D4AF37] mb-3 uppercase tracking-wide">
                        Key Responsibilities
                      </h5>
                      <ul className="space-y-2 mb-6">
                        {job.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                            <span className="text-[#D4AF37] mt-1">•</span>
                            <span>{responsibility}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={makeMailto(
                          `Application for ${job.title}`,
                          `Hello Allied Careers,\n\nI am applying for the ${job.title} position. Please find my CV attached.\n\nName:\nEmail:\nPhone:\nCovering note:\n\nKind regards,`
                        )}
                        className="inline-flex items-center bg-[#D4AF37] text-black font-semibold px-5 py-2.5 rounded-lg hover:bg-[#C4A037] transition-transform duration-200 transform hover:scale-105 text-sm"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="mt-12 text-center bg-white/5 border border-white/10 rounded-lg p-8">
            <h3 className="text-xl md:text-2xl font-bold mb-3 text-white">
              Don&apos;t See What You&apos;re Looking For?
            </h3>
            <p className="text-gray-300 mb-5 max-w-xl mx-auto">
              We&apos;re always open to connecting with talented professionals. Share your CV with us for future opportunities.
            </p>
            <a
              href={makeMailto(
                'CV Submission',
                'Hello Allied Careers,\n\nPlease find attached my CV for future opportunities. I will attach my CV to this email and include my contact details below.\n\nName:\nEmail:\nPhone:\nRole of interest (optional):\n\nKind regards,'
              )}
              className="inline-flex items-center border border-[#D4AF37] text-[#D4AF37] px-6 py-3 rounded-lg hover:bg-[#D4AF37] hover:text-black transition-colors font-semibold"
            >
              Submit Your CV
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
         

