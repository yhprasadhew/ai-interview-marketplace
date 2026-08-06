"use client";

import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import { Terminal } from "lucide-react";

export function CodeDemo({
  duration,
  delay,
  writing,
  cursor,
}) {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="h-[390px] w-[500px] max-w-full border-teal-500/20 shadow-2xl shadow-teal-500/5 bg-zinc-950/90 backdrop-blur-md rounded-xl"
      code={`import { MockmateAI } from "@mockmate/sdk";

// Start real-time AI interview session
const session = await MockmateAI.start({
  role: "Lead React Developer",
  audio: true,
  video: true
});

session.on("feedback", (metrics) => {
  console.log({
    score: metrics.technicalScore,  // 94%
    clarity: metrics.clarityScore, // 91%
    sentiment: "Confident"
  });
});`}
    >
      <CodeHeader icon={Terminal} copyButton className="bg-zinc-900 border-b border-zinc-800 text-zinc-400">
        mockmate-session.ts
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="typescript"
        writing={writing}
        duration={duration}
        delay={delay}
        className="text-zinc-300 font-mono"
      />
    </Code>
  );
}