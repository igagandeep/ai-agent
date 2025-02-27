import Link from "next/link";
import React from "react";
import AgentPulse from "./AgentPulse";
import { Button } from "./ui/button";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Header = () => {
  return (
    <header className="sticky top-0 left-0 right-0 bg-white/80 px-4 md:px-0 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center ml-4 gap-4">
              <AgentPulse size="small" />
              <h1 className="text-xl font-semibold bg-gradient-to-r from-red-400 to-red-200 bg-clip-text text-transparent">
                AgentTube
              </h1>
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <SignedIn>
              <Link href="/manage-plan">
                <Button variant="outline" className="cursor-pointer">Manage Plan</Button>
              </Link>

              <div className="p-2 w-10 h-10 flex items-center justify-center rounded-full border bg-blue-100 border-blue-200">
                <UserButton />
              </div>
            </SignedIn>

            <SignedOut>
              <SignInButton mode="modal">
                <Button
                  variant="ghost"
                  className="bg-gradient-to-r from-red-500 to-red-400 text-transparent bg-clip-text cursor-pointer"
                >
                  Sign in
                </Button>
              </SignInButton>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
