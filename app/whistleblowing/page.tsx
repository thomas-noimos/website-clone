"use client";

import { Button } from "@/components/ui/button";
import { SectionTitle } from "@/components/ui/section-title";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@radix-ui/react-label";
import { whistleblowingAction } from "./actions";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

export default function WhistleblowingPage() {
  const [state, action, isPending] = useActionState(whistleblowingAction, {
    success: false,
    message: "",
  });

  useEffect(() => {
    if (!state.message) return;
    if (state.success) {
      toast.success(state.message, {
        richColors: true,
      });
    } else {
      toast.error(state.message, {
        richColors: true,
      });
    }
  }, [state]);

  return (
    <div className="mx-auto flex min-h-dvh flex-col items-center">
      <div className="max-w-prose flex-1 px-4 pt-30">
        <SectionTitle title="Whistleblowing" />
        <p className="mb-2">
          With this form, you are able to inform the Compliance Officer of
          noimos ag about unethical or illegal wrongdoing within the company.
          The whistleblowing process is handled by the Compliance Officer, who
          also initiates the necessary follow-up processes.
        </p>
        <p>
          The whole procedure underlies strict confidentiality. The identity of
          the whistleblower will be kept strictly secret. If you don’t enter
          personal data yourself, your identity remains also for the Compliance
          Officer anonymous.
        </p>
        <form action={action} className="space-y-4 pt-12">
          <div className="grid w-full gap-3 md:col-span-2">
            <Label htmlFor="message">Type your message *</Label>
            <Textarea
              placeholder="What issue (unethical or illegal wrongdoing) would you like to report?"
              name="message"
              className="min-h-40"
              required
            />
          </div>
          <div>
            <Button type="submit">
              Submit
              {isPending && <Loader2Icon className="animate-spin" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
