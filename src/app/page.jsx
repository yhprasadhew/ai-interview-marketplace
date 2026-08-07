"use client";

import { SectionLabel } from "@/components/reusable";
import { Button } from "@/components/ui/button";
import { StarsBackgroundDemo } from "@/components/ui/demo-components-backgrounds-stars";
import { CodeDemo } from "@/components/demo-components-animate-code";
import { LOGOS, ROLES, PLANS } from "@/lib/data";
import Image from "next/image";
import { SectionHeading } from "@/components/reusable";
import { BentoCard } from "@/components/BentoCard";
import { Bot, Sparkles, Video, FileText } from "lucide-react";

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

      <section className="relative z-10 border-y border-slate-800/60 py-12">
        <p className="text-center text-[10px] font-bold tracking-widest text-slate-500 uppercase mb-8">
          Mockmate candidates got hired at top tech companies
        </p>

        <div className="flex flex-wrap items-center justify-center gap-12 md:gap-20 px-6">
          {LOGOS.map((l) => (
            <Image
              key={l.alt}
              src={l.src}
              alt={l.alt}
              width={100}
              height={32}
              className={`h-6 w-auto object-contain opacity-45 hover:opacity-90 transition-all duration-300 ${
                l.effect === "invert" ? "invert brightness-200" : "grayscale brightness-200"
              }`}
            />
          ))}
        </div>
      </section>


      <section className="relative z-10 py-28 max-w-5xl mx-auto px-6" >
        <div className="text-center mb-16">
          <SectionLabel>Features</SectionLabel>
          <SectionHeading
            gray="Everything you need" 
            gold="nothing you don't" 
          />
        </div>

        <div className="grid grid-cols-12 gap-4">
          {/* Row 1 */}
          <div className="col-span-12 md:col-span-7">
            <BentoCard
              icon={<Bot size={20} className="text-amber-400" />}
              title="Real-Time AI Scoring"
              description="Get instant feedback on your technical answers, syntax logic, and verbal communication as you speak."
              link="/features/ai-scoring"
            />
          </div>

          <div className="col-span-12 md:col-span-5">
            <BentoCard
              icon={<Sparkles size={20} className="text-amber-400" />}
              title="Role Simulations"
              description="Practice roles tailored to top tech companies, from Frontend Developer to Product Manager."
              link="/features/simulations"
            />
          </div>

          {/* Row 2 */}
          <div className="col-span-12 md:col-span-5">
            <BentoCard
              icon={<Video size={20} className="text-amber-400" />}
              title="Mock Video Rooms"
              description="Experience realistic simulated video settings with built-in code compilers and prompt boards."
              link="/features/video-rooms"
            />
          </div>

          <div className="col-span-12 md:col-span-7">
            <BentoCard
              icon={<FileText size={20} className="text-amber-400" />}
              title="Deep Feedback Reports"
              description="Receive comprehensive post-interview feedback highlighting fillers, vocabulary, and optimal technical solutions."
              link="/features/reports"
            />
          </div>
        </div>
      </section>

      {/* Target Audience Section (Interviewees / Interviewers) */}
      <section className="relative z-10 py-24 max-w-5xl mx-auto px-6 border-t border-slate-800/60">
        <div className="text-center mb-16">
          <SectionLabel>WHO IS IT FOR?</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mt-2">
            Built for both sides of the table
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ROLES.map((role) => (
            <div 
              key={role.label}
              className="relative bg-slate-900/40 border border-slate-800 hover:border-amber-400/20 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 group"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-xs font-semibold text-amber-400 mb-6">
                  {role.label}
                </span>

                <div className="mb-4">
                  <div className="[&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:font-bold [&_span]:text-2xl [&_span]:sm:text-3xl [&_span]:font-bold">
                    {role.title}
                  </div>
                </div>

                <p className="text-sm text-slate-400 leading-relaxed mb-8">
                  {role.desc}
                </p>

                <ul className="space-y-3.5 mb-8">
                  {role.perks.map((perk, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="text-amber-400 font-semibold mt-0.5 shrink-0">✓</span>
                      <span>{perk}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-800/60 mt-auto">
                <Button className="w-full bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition-colors">
                  Join as {role.label}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-24 max-w-5xl mx-auto px-6 border-t border-slate-800/60">
        <div className="text-center mb-16">
          <SectionLabel>PRICING</SectionLabel>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-slate-100 mt-2">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-slate-400 text-sm max-w-md mx-auto">
            Choose the plan that fits your preparation needs. Upgrade or cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 border ${
                plan.featured
                  ? "bg-slate-900/60 border-amber-400/30 shadow-xl shadow-amber-400/5 ring-1 ring-amber-400/20"
                  : "bg-slate-900/40 border-slate-800 hover:border-slate-700"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-amber-400 text-slate-950 text-[10px] font-extrabold tracking-wider uppercase">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-lg font-bold text-slate-100 mb-2">{plan.name}</h3>
                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl font-extrabold text-slate-100">{plan.price}</span>
                  <span className="text-xs text-slate-400 font-medium">/ month</span>
                </div>
                <p className="text-xs text-amber-400 font-semibold mb-6">{plan.credits}</p>

                <ul className="space-y-3 mb-8 border-t border-slate-800/60 pt-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <span className="text-emerald-400 font-semibold shrink-0">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <Button
                className={`w-full font-semibold transition-all ${
                  plan.featured
                    ? "bg-amber-400 hover:bg-amber-300 text-slate-950 shadow-md"
                    : "bg-slate-850 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700"
                }`}
              >
                Choose {plan.name}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}