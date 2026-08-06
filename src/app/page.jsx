"use client";

import { SectionLabel } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { StarsBackgroundDemo } from "@/components/ui/demo-components-backgrounds-stars";
import { CodeDemo } from "@/components/demo-components-animate-code";

export default function Home() {
  return (
    <div className="bg-slate-950 text-slate-100 min-h-[calc(100vh-81px)] overflow-hidden relative selection:bg-indigo-500/30 isolate">
      {/* Background stars component */}
      <StarsBackgroundDemo />

      {/* Subtle Glow Effects for Modern Depth */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[250px] h-[250px] bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Hero Section */}
      <section className="relative isolate z-10 min-h-[calc(100vh-81px)] grid grid-cols-1 lg:grid-cols-5 px-6 lg:px-12 pt-8 lg:pt-12 pb-12 gap-8 items-center max-w-7xl mx-auto">
        
        {/* Left Content Column */}
        <div className="col-span-full lg:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left">
          
          {/* Badge / Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs sm:text-sm font-medium backdrop-blur-md mb-6">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <SectionLabel>AI-Powered Interview Platform</SectionLabel>
          </div>

          {/* Unified Gradient Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Practice for Your{" "}
            <span className="bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Dream Job
            </span>{" "}
            <span className="block sm:inline text-slate-200">
              With Confidence
            </span>
          </h1>

          {/* Body Description */}
          <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-400 leading-relaxed font-normal">
            Master technical and behavioral interviews with AI-driven mock sessions, 
            real-time feedback, and actionable, personalized insights tailored to your career goals.
          </p>

          {/* Action Callouts */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg" 
              className="bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 shadow-lg shadow-indigo-600/25 transition-all duration-200"
            >
              Get Started Free
            </Button>

            <Button 
              variant="outline" 
              size="lg"
              className="border-slate-800 bg-slate-900/60 hover:bg-slate-800/80 text-slate-300 hover:text-white backdrop-blur-sm transition-all duration-200"
            >
              Watch Demo
            </Button>
          </div>

          {/* Social Proof / Key Highlights Bar */}
          <div className="mt-10 pt-6 border-t border-slate-800/60 flex items-center gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-semibold">✓</span> Real-Time AI Scoring
            </div>
            <div className="flex items-center gap-2">
              <span className="text-emerald-400 font-semibold">✓</span> Custom Role Simulations
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="col-span-full lg:col-span-2 flex justify-center lg:justify-end">
          <div className="w-full max-w-md lg:max-w-none rounded-xl border border-slate-800 bg-slate-900/40 p-2 shadow-2xl backdrop-blur-md">
            <CodeDemo
              duration={12000}
              delay={400}
              writing={true}
              cursor={true}
            />
          </div>
        </div>

      </section>
    </div>
  );
}