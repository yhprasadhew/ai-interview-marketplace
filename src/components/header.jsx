"use client";

import { useAuth, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import Link from "next/link";

export function Header() {
  const { isSignedIn, isLoaded } = useAuth();

  return (
    <header className="border-b border-border/40 bg-background/95 backdrop-blur-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Branding */}
        <Link href="/" className="text-xl font-bold font-serif tracking-tight text-foreground select-none hover:opacity-90 transition-opacity">
          Mockmate-AI
        </Link>

        {/* Navigation & Auth Actions */}
        <div className="flex items-center gap-3">
          <ModeToggle />

          {isLoaded && (
            <>
              {!isSignedIn ? (
                <>
                  <SignInButton mode="modal">
                    <Button variant="ghost" size="sm" className="cursor-pointer font-medium">
                      Sign In
                    </Button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <Button size="sm" className="cursor-pointer font-medium bg-primary text-primary-foreground hover:bg-primary/95">
                      Sign Up
                    </Button>
                  </SignUpButton>
                </>
              ) : (
                <div className="flex items-center gap-3">
                  <UserButton 
                    appearance={{
                      elements: {
                        avatarBox: "w-8 h-8 rounded-full border border-border/50 shadow-sm"
                      }
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