import {
  Mail,
  MessageCircle,
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
    <section id="contact" className="py-24 px-4 relative bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-3 text-center">
          Let's Connect
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ready to collaborate or just want to chat? Reach out to me!
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Discord Card */}
          <div className="group card-hover bg-card p-8 rounded-xl border border-primary/20 hover:border-primary/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-500">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Discord</h3>
              <p className="text-sm text-muted-foreground mb-4">Preferred &amp; fastest response</p>
              <a
                href="https://discord.com/users/davidoff10"
                target="_blank"
                rel="noreferrer"
                className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-500"
              >
                @davidoff10
              </a>
            </div>
          </div>

          {/* Email Card */}
          <div className="group card-hover bg-card p-8 rounded-xl border border-primary/20 hover:border-primary/50 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <div className="mb-4 flex justify-center">
                <div className="p-4 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors duration-500">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground mb-4">Get a response within 24h</p>
              <a
                href="mailto:dacedev2@gmail.com"
                className="inline-block px-6 py-2 rounded-full bg-primary text-primary-foreground font-medium hover:shadow-[0_0_20px_rgba(239,68,68,0.5)] transition-all duration-500"
              >
                dacedev2@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
