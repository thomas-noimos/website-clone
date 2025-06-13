import { cn } from "@/lib/utils";
import {
  Camera,
  Car,
  FileText,
  ScanSearch,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SectionTitle } from "./ui/section-title";

const capabilities = [
  {
    title: "Guided photo taking and documentation",
    icon: Camera,
  },
  {
    title: "Windshield repair assessment",
    icon: FileText,
  },
  {
    title: "Car damage assessment",
    icon: Car,
  },
  {
    title: "Text extraction and analysis",
    icon: ScanSearch,
  },
  {
    title: "Fraud prevention",
    icon: ShieldCheck,
  },
  {
    title: "Triage / Orientation at FNOL",
    icon: Sparkles,
  },
];

export const Capabilities = () => {
  return (
    <div
      className="from-noimos/60 flex w-full justify-center bg-radial-[at_-10%_50%] to-transparent to-70%"
      id="capabilities"
    >
      <div className="w-full max-w-4xl px-4 pt-16 pb-12">
        <SectionTitle title="Capabilities" />
        <div className="grid grid-cols-1 gap-x-14 gap-y-6 md:grid-cols-12">
          {capabilities.map(({ title, ...props }, index) => (
            <div
              key={index}
              className={cn(
                "flex flex-col items-center gap-4 rounded-lg p-4 text-center md:col-span-6",
                index % 3 === 0 && "md:col-start-1",
                index % 3 === 1 && "md:col-start-7",
                index % 3 === 2 && "md:col-start-4",
              )}
            >
              <div className="flex size-16 items-center justify-center rounded-full border-2 border-slate-700/80">
                <props.icon size={32} />
              </div>
              <p className="text-lg font-bold text-balance text-neutral-200">
                {title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
