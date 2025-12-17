import { Briefcase, Code, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section id="about" className="py-24 px-4 relative bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -z-10" />
      <div className={`container mx-auto max-w-5xl transition-all duration-700 ${isVisible ? "scroll-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Roblox Scripter
            </h3>

            <p className="text-muted-foreground">
            Hello! I’m DaceDev, a passionate developer who’s been scripting in Roblox Studio since late 2022 and part of the Roblox platform for over 6 years.
            </p>

            <p className="text-muted-foreground">
            I specialize in writing scalable code with a strong focus on creativity and organization, making it easy for any developer to understand and edit at any time. While I’m always learning and growing to further strengthen my skill set is solid, allowing me to work efficiently with other developers.
            </p>

            <p className="text-muted-foreground">
            After taking a break from Roblox development last year to explore and master other programming languages, I returned with a stronger skillset and renewed motivation. Now I’m back, more powerful and fully committed to continuing my destined journey in roblox development.
            </p>

            {/* Removed contact and CV buttons as requested */}
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Creative</h4>
                  <p className="text-muted-foreground">
                  I’m a creative person who enjoys finding smart fixes and elegant solutions for all kinds of systems.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Friendly</h4>
                  <p className="text-muted-foreground">
                  I’m very open-minded and love exchanging ideas, discussing different perspectives, and hearing how others think.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Organized</h4>
                  <p className="text-muted-foreground">
                  I’m also highly organized and rely on modular code in almost every project, which helps keep things clean and easy to improve over time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
