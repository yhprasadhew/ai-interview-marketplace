"use client";

import {
  GoldTitle,
  GrayTitle,
  SectionLabel,
} from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { StarsBackgroundDemo } from "@/components/ui/demo-components-backgrounds-stars";

export default function Home() {
  return (
    <div className="bg-black overflow-hidden">
      {/* Hero */}
      <section className="relative h-screen grid grid-cols-1 lg:grid-cols-5 px-6 lg:px-10 overflow-hidden">
        <StarsBackgroundDemo />

        <div className="col-span-full lg:col-span-3 flex items-center justify-center">
          <div className="max-w-4xl text-center flex flex-col items-center lg:-rotate-2">
            <SectionLabel>
              AI-Powered Interview Platform
            </SectionLabel>

            <GrayTitle>Practice for Your</GrayTitle>

            <GoldTitle>Dream Job</GoldTitle>

            <GrayTitle>With Confidence</GrayTitle>

            <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
              Master technical and behavioral interviews with AI-powered mock
              interviews, real-time feedback, and personalized improvement
              suggestions.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}