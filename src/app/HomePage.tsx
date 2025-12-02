"use client";
import { useRouter } from 'next/navigation';
import { Hero } from "../components/Hero";
import Industries from '../components/Industries';
import dynamic from 'next/dynamic';

// Avoid SSR markup for components affected by extension-injected attributes
const WhyAllied = dynamic(() => import('../components/WhyAllied'), { ssr: false });
const TestimonialsCarousel = dynamic(() => import('../components/TestimonialsCarousel'), { ssr: false });

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
