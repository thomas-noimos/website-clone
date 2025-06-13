import Image from "next/image";

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Section } from "lucide-react";
import { SectionTitle } from "./ui/section-title";

// Order is reversed so we can use 'rtl' in the scroll area
const works = [
  {
    year: "Present",
    description: "Scaling to other Europe-based clients",
  },
  {
    year: "2024",
    description: "Launch and Go-Live with a Tier 1 Swiss insurance company",
  },
  {
    year: "2023",
    description: "First pilot go live in productive environment",
  },
  {
    year: "2022",
    description: "First MVP available",
  },
  {
    year: "2021",
    description: "Noimos was founded",
  },
];

export const OurHistory = () => {
  return (
    <div className="w-full pt-16 md:pb-12" id="our-history">
      <SectionTitle title="Our History" />
      <ScrollArea className="mx-auto" dir="rtl">
        <div className="from-noimos/40 bg-radial-[at_100%_50%] to-transparent to-70% pb-28 md:pt-16 lg:px-20 xl:px-32">
          <div className="via-noimos/80 flex gap-30 bg-gradient-to-br from-transparent from-[calc(50%-2px)] via-50% to-transparent to-[calc(50%+2px)] px-4 pt-12 pb-6 md:px-16 lg:px-26 xl:px-36">
            {works.map(({ year, description }, i) => (
              <div
                key={i}
                className="flex w-100 max-w-dvw flex-col items-center gap-8"
              >
                <h2 className="text-6xl font-bold text-neutral-100">{year}</h2>
                <p className="text-center text-2xl font-semibold text-neutral-200">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};
