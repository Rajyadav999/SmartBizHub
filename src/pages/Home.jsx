import React from "react";
import FeatureCard from "../components/FeatureCard";

export default function Home() {
  return (
    <section className="grid">
      <FeatureCard title="Modern UI" description="Clean and responsive design" />
      <FeatureCard title="Fast" description="Optimized performance" />
      <FeatureCard title="Accessible" description="WCAG compliant" />
    </section>
  );
}
