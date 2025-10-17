"use client";
import { useRouter } from 'next/navigation';
import { Hero } from "../components/Hero";
import Industries from '../components/Industries';
import WhyAllied from "../components/WhyAllied";
import TestimonialsCarousel from "../components/TestimonialsCarousel";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Hero
        eyebrow="Commercial Insurance, Simplified"
        title={"Protecting Your Business\nWith Confidence and Clarity"}
        subtitle="Allied delivers tailored coverage, fast claims, and expert support—so you can focus on what matters."
        onPrimary={() => router.push('/get-a-quote')}
        onSecondary={() => alert('How it works clicked!')}
      />
      <Industries />
      <WhyAllied />
      <TestimonialsCarousel />
    </>
  );
}
