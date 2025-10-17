"use client";
import React from "react";
import dynamic from "next/dynamic";

// Dynamically import the Careers component from components to avoid server-side bundling issues
const Careers = dynamic(() => import("@/components/Careers"), { ssr: false });

export default function CareersPage() {
  return <Careers />;
}
