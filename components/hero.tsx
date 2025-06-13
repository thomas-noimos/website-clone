import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { Stars } from "./stars";

export const Hero = () => {
  return (
    <section className="hero from-noimos relative isolate flex w-full flex-col items-center justify-center overflow-hidden bg-radial-[at_50%_-10%] to-transparent to-70% md:h-dvh md:max-h-250">
      <Stars />
      <div className="flex max-w-6xl flex-col items-center overflow-hidden px-4 pt-24 pb-16 md:flex-row">
        <div className="flex-3 portrait:max-md:pt-10">
          <h1 className="mb-4 text-3xl font-bold text-balance md:text-5xl">
            Supercharge your motor insurance processes with AI
          </h1>
          <p className="text-md mb-6 text-balance text-neutral-300 md:text-lg">
            We are committed to enhancing human capabilities in car insurance
            excellence.
          </p>
          <Button asChild>
            <Link href="#contact-us">Contact us</Link>
          </Button>
        </div>
        <Image
          src="/car.png"
          alt="Car"
          width={500}
          height={300}
          className="flex-2"
        />
      </div>
    </section>
  );
};
