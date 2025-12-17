import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Twitch,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setIsSubmitting(false);
    }, 1500);
  };
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-3xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Contact
        </h2>

        <div className="bg-card p-8 rounded-lg shadow-xs mx-4 md:mx-0">
          <div className="flex flex-col items-center gap-6">
          <p className="text-2xl text-muted-foreground">
          Discord: @davidoff10
            </p>

            <p className="text-2xl text-muted-foreground">
            Email: dacedev2@gmail.com
            </p>

            <p className="text-sm text-muted-foreground">Preferred &amp; fastest response via Discord</p>
          </div>
        </div>
      </div>
    </section>
  );
};
