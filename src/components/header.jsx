"use client";

import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
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
        className="stroke-foreground"
        strokeWidth="1.6"
      />

      {/* Antenna */}
      <line
        x1="18"
        y1="11"
        x2="18"
        y2="8"
        className="stroke-teal-500 dark:stroke-teal-400"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <circle cx="18" cy="6.7" r="1.3" className="fill-teal-500 dark:fill-teal-400" />

      {/* Head */}
      <circle
        cx="18"
        cy="19"
        r="6.3"
        className="stroke-teal-500 dark:stroke-teal-400"
        strokeWidth="1.6"
      />
      <circle cx="15.3" cy="19" r="1.15" className="fill-teal-500 dark:fill-teal-400" />
      <circle cx="20.7" cy="19" r="1.15" className="fill-teal-500 dark:fill-teal-400" />
      <path
        d="M15 21.8 Q18 24 21 21.8"
        className="stroke-teal-500 dark:stroke-teal-400"
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
    <header className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50 supports-[backdrop-filter]:bg-background/80">
      <div className="w-full max-w-screen-2xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        {/* Branding */}
        <Link href="/" className="flex items-center gap-3 select-none group">
          <Logo />
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:opacity-90 transition-opacity">
            mockmate
            <span className="text-teal-500 dark:text-teal-400">.ai</span>
          </span>
        </Link>

        {/* Navigation & Auth Actions */}
        <div className="flex items-center gap-4">
          <ModeToggle />

          {isLoaded && (
            <>
              {!isSignedIn ? (
                <div className="flex items-center gap-3">
                  <SignInButton mode="modal">
                    <Button
                      variant="ghost"
                      className="h-10 px-4 cursor-pointer font-semibold text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      Sign In
                    </Button>
                  </SignInButton>

                  <SignUpButton mode="modal">
                    <Button
                      className="h-10 px-5 cursor-pointer font-semibold text-sm bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm rounded-lg transition-colors"
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
                        avatarBox: "w-10 h-10 rounded-full border border-border/50 shadow-sm",
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



//dbpwsrd yes34yesyes5g@