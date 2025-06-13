import { cn } from "@/lib/utils";
import { SectionTitle } from "./ui/section-title";
import { ReactNode } from "react";

const advantages = [
  "Seamlessly woven into the Swiss automotive ecosystem and ready for API integration into other markets",
  "Active co-development with insurance experts for new capabilities",
  "In-house insurance background",
  "AI as a tool for empowerment rather than replacement",
];

export const WhyNoimos = () => {
  return (
    <div className="w-full max-w-6xl px-4 pt-16 pb-12" id="why-noimos">
      <SectionTitle title="Why Noimos" />
      <div className="grid grid-cols-1 gap-x-16 gap-y-12 md:grid-cols-12">
        {advantages.map((title, index) => (
          <div
            key={index}
            className={cn(
              "from-noimos/40 md:from-noimos/60 flex items-center gap-8 rounded-lg to-transparent p-8 shadow shadow-slate-800 max-sm:text-neutral-200 md:p-16",
              index === 0 && "bg-radial-[at_50%_-10%] md:col-span-12",
              index === 1 && "bg-radial-[at_25%_-10%] md:col-span-6",
              index === 2 && "bg-radial-[at_100%_50%] md:col-span-6",
              index === 3 && "bg-radial-[at_50%_100%] md:col-span-12",
            )}
          >
            <p
              className={cn(
                "order-2 text-xl font-semibold md:text-3xl",
                (index === 0 || index === 3) && "md:max-w-8/12",
              )}
            >
              {title}
            </p>
            {(index === 0 || index === 3) && (
              <GradientCircle
                className={cn(
                  "mx-auto hidden size-60 min-w-60 md:grid",
                  index === 0 ? "order-3" : "order-1",
                )}
              >
                <GradientCircle className="size-40">
                  <GradientCircle className="size-20" />
                </GradientCircle>
              </GradientCircle>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const GradientCircle = ({
  className,
  children,
}: {
  className?: string;
  children?: ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-full border border-slate-700/80 bg-slate-700/30 md:grid",
        className,
      )}
    >
      {children}
    </div>
  );
};
