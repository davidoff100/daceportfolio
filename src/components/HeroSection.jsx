import { ArrowDown } from "lucide-react";
import { useEffect, useState, memo } from "react";

const isMobile = () => window.innerWidth < 768;

export const HeroSection = memo(() => {
  const phrases = [
    "Roblox Scripter",
    "Programmer",
    "Roblox Developer"
  ];
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [mobile, setMobile] = useState(isMobile());

  useEffect(() => {
    const handleResize = () => setMobile(isMobile());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Disable typing animation on mobile for performance
    if (mobile) {
      setText(phrases[index]);
      return;
    }

    let timeout;
    const fullText = phrases[index];
    const speed = isDeleting ? 40 : 120;

    if (!isDeleting && text === fullText) {
      timeout = setTimeout(() => setIsDeleting(true), 900);
    } else if (isDeleting && text === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setIndex((i) => (i + 1) % phrases.length);
      }, 300);
    } else {
      timeout = setTimeout(() => {
        const next = isDeleting
          ? fullText.substring(0, text.length - 1)
          : fullText.substring(0, text.length + 1);
        setText(next);
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, index, mobile]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Gradient background effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/3 rounded-full blur-3xl" />
      </div>

      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="md:opacity-0 md:animate-fade-in"> Hey, I'm</span>
            <span className="text-primary md:opacity-0 md:animate-fade-in-delay-1">
              {" "}
              DaceDev
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto md:opacity-0 md:animate-fade-in-delay-3">
            <span className="text-primary font-medium">{text}</span>
            {!mobile && <span className="ml-1 text-primary font-medium animate-blink">_</span>}
          </p>

          <div className="pt-4 md:opacity-0 md:animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Projects
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center hidden md:flex md:animate-bounce" style={{ willChange: 'transform' }}>
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";
