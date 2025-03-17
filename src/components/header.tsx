"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
} from "@/components/ui/dialog";
import { Menu } from "lucide-react";
import ThemeToggle from "@/components/theme-toggle";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed inset-x-0 top-0 z-50 w-full bg-background/75 backdrop-blur-sm border-b border-border/40">
      <header className="container mx-auto max-w-3xl lg:max-w-4xl py-4 text-sm">
        <nav className="flex items-center justify-between px-4 sm:px-6">
          {/* Logo */}
          <Link href="/" className="font-serif text-2xl font-bold">
            RG
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <li>
              <Link
                href="/about-me"
                className="transition-colors hover:text-foreground"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/posts"
                className="transition-colors hover:text-foreground"
              >
                Posts
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="transition-colors hover:text-foreground"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="transition-colors hover:text-foreground"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu & Theme Toggle */}
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <button className="md:hidden p-2 rounded-md transition hover:bg-muted">
                  <Menu className="w-6 h-6" />
                </button>
              </DialogTrigger>
              <DialogTitle className="sr-only">Menu</DialogTitle>
              <DialogContent className="w-72 p-6 rounded-lg bg-background">
                <ul className="flex flex-col gap-4 text-lg font-medium text-muted-foreground">
                  <li>
                    <Link 
                      href="/about-me" 
                      onClick={() => setOpen(false)}
                      className="block py-2 transition-colors hover:text-foreground"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/posts" 
                      onClick={() => setOpen(false)}
                      className="block py-2 transition-colors hover:text-foreground"
                    >
                      Posts
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/projects" 
                      onClick={() => setOpen(false)}
                      className="block py-2 transition-colors hover:text-foreground"
                    >
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link 
                      href="/contact" 
                      onClick={() => setOpen(false)}
                      className="block py-2 transition-colors hover:text-foreground"
                    >
                      Contact
                    </Link>
                  </li>
                </ul>
              </DialogContent>
            </Dialog>
          </div>
        </nav>
      </header>
    </div>
  );
}