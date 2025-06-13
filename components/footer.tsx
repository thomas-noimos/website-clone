import Link from "next/link";
import Image from "next/image";
import { links } from "@/consts";

export const Footer = () => {
  return (
    <footer className="bg-noimos/60 mt-8 w-full py-8 text-sm text-neutral-400 md:mt-16 md:py-16">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Link href="/">
            <Image
              src="/noimos-ag-neg.svg"
              alt="Noimos Logo"
              width={150}
              height={50}
              className="mb-4"
            />
          </Link>
          <p>
            &copy; {new Date().getFullYear()} Noimos.
            <br />
            All rights reserved.
          </p>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-lg font-semibold text-neutral-100">Links</h4>
          {links.slice(0, 3).map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-neutral-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-lg font-semibold text-neutral-100">Legal</h4>
          <Link
            href="/privacy-policy/en"
            className="transition-colors hover:text-neutral-50"
          >
            Privacy Policy
          </Link>
          <Link
            href="/whistleblowing"
            className="transition-colors hover:text-neutral-50"
          >
            Whistleblowing
          </Link>
        </div>
        <div className="flex flex-col items-start gap-2">
          <h4 className="text-lg font-semibold text-neutral-100">
            Work with us
          </h4>
          <Link
            href="https://career.noimos.ai/"
            className="transition-colors hover:text-neutral-50"
            target="_blank"
          >
            Careers
          </Link>
        </div>
      </div>
    </footer>
  );
};
