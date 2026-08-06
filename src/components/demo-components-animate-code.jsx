"use client";

import {
  Code,
  CodeBlock,
  CodeHeader,
} from "@/components/animate-ui/components/animate/code";
import ReactIcon from "@/components/icons/react-icon";


export function CodeDemo({
  duration,
  delay,
  writing,
  cursor,
}) {
  return (
    <Code
      key={`${duration}-${delay}-${writing}-${cursor}`}
      className="w-[420px] h-[372px]"
      code={`'use client';

import * as React from 'react';

function MyComponent(props) {
  return (
    <div {...props}>
      <p>My Component</p>
    </div>
  );
}

export { MyComponent };`}
    >
      <CodeHeader icon={ReactIcon} copyButton>
        my-component.jsx
      </CodeHeader>

      <CodeBlock
        cursor={cursor}
        lang="jsx"
        writing={writing}
        duration={duration}
        delay={delay}
      />
    </Code>
  );
}