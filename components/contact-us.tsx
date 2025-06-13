"use client";

import { contactUsAction } from "@/app/actions";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { SectionTitle } from "./ui/section-title";
import { Textarea } from "./ui/textarea";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";
import { Loader2Icon } from "lucide-react";

export const ContactUs = () => {
  const [state, action, isPending] = useActionState(contactUsAction, {
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
    <div className="w-full max-w-4xl px-4 pt-16 pb-12" id="contact-us">
      <SectionTitle title="Contact Us" />
      <form action={action} className="grid gap-6 md:grid-cols-2">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="name">Name *</Label>
          <Input type="text" placeholder="Name" name="name" required />
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="company">Company</Label>
          <Input type="text" name="company" placeholder="Company" />
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="email">Email *</Label>
          <Input type="email" name="email" placeholder="Email" required />
        </div>
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="phone">Phone</Label>
          <Input type="text" name="phone" placeholder="Phone" />
        </div>
        <div className="grid w-full gap-3 md:col-span-2">
          <Label htmlFor="message">Message *</Label>
          <Textarea
            placeholder="Type your message here."
            name="message"
            className="min-h-40"
            required
          />
        </div>
        <div>
          <Button type="submit" disabled={isPending}>
            Submit
            {isPending && <Loader2Icon className="animate-spin" />}
          </Button>
        </div>
      </form>
    </div>
  );
};
