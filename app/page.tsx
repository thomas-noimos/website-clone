import { Capabilities } from "@/components/capabilities";
import { ContactUs } from "@/components/contact-us";
import { Hero } from "@/components/hero";
import { OurHistory } from "@/components/our-history";
import { WhyNoimos } from "@/components/why-noimos";

export default function Home() {
  return (
    <div className="mx-auto flex flex-col items-center">
      <Hero />
      <Capabilities />
      <WhyNoimos />
      <OurHistory />
      <ContactUs />
    </div>
  );
}
