"use client";

import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Badge outline */}
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="9"
        className="stroke-amber-400/80"
        strokeWidth="1.6"
      />

      {/* Antenna */}
      <line
        x1="18"
        y1="11"
        x2="18"
        y2="8"
        className="stroke-amber-500 dark:stroke-amber-400"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18" cy="6.7" r="1.3" className="fill-amber-500 dark:fill-amber-400" />

      {/* Head */}
      <circle
        cx="18"
        cy="19"
        r="6.3"
        className="stroke-amber-500 dark:stroke-amber-400"
        strokeWidth="1.6"
      />
      <circle cx="15.3" cy="19" r="1.15" className="fill-amber-500 dark:fill-amber-400" />
      <circle cx="20.7" cy="19" r="1.15" className="fill-amber-500 dark:fill-amber-400" />
      <path
        d="M15 21.8 Q18 24 21 21.8"
        className="stroke-amber-500 dark:stroke-amber-400"
        strokeWidth="1.6"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-md sticky top-0 z-50 supports-[backdrop-filter]:bg-slate-950/60">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-3 select-none group">
          <Logo />
          <span className="text-xl font-bold tracking-tight text-slate-100 group-hover:opacity-90 transition-opacity">
            mockmate
            <span className="text-amber-500 dark:text-amber-400 font-extrabold">.ai</span>
          </span>
        </Link>

        {/* Navigation & Auth Actions */}
        <div className="flex items-center gap-4">
          {isLoaded && (
            <>
              {!isSignedIn ? (
                <div className="flex items-center gap-3">
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      className="h-10 px-4 cursor-pointer font-medium text-sm text-slate-300 hover:text-amber-400 hover:bg-slate-900 transition-colors"
                    >
                      Sign In
                    </Button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <Button
                      className="h-10 px-5 cursor-pointer font-semibold text-sm bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md shadow-amber-500/10 rounded-lg transition-all"
                    >
                      Get Started
                    </Button>
                  </SignUpButton>
                </div>
              ) : (
                <div className="flex items-center gap-3 pl-1">
                  <UserButton
                    appearance={{
                      elements: {
                        avatarBox: "w-10 h-10 rounded-full border border-amber-500/40 shadow-sm",
                      },
                    }}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </header>
  );
}