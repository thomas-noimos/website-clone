"use client";

import Image from "next/image";
import Link from "next/link";
import {
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  Sheet,
  SheetClose,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";
import { links } from "@/consts";

export const Header = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Toggles header background color based on scroll position
    // It is transparent on mount so the radial gradiend is visible
    // and becomes dark when the user scrolls down so the links are readable
    const adjustHeaderBackground = () => {
      const header = headerRef.current;
      if (header) {
        header.classList.toggle("bg-dark-bg/80", window.scrollY > 0);
      }
    };

    window.addEventListener("scroll", adjustHeaderBackground);
    return () => window.removeEventListener("scroll", adjustHeaderBackground);
  }, []);

  return (
    <header
      className="fixed top-0 z-50 flex w-full items-center transition-colors"
      ref={headerRef}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-2">
        <Link href="/">
          <Image
            src="/noimos-ag-neg.svg"
            alt="Noimos Logo"
            width={150}
            height={50}
            className="h-12"
          />
        </Link>
        <nav className="hidden gap-2 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:bg-noimos rounded-lg px-4 py-2 transition-colors"
              target={link.target}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Sheet>
          <SheetTrigger className="md:hidden">
            <Menu />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>Navigation</SheetTitle>
              <SheetDescription className="flex flex-col gap-4 pt-4">
                {links.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link key={link.href} href={link.href}>
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};
