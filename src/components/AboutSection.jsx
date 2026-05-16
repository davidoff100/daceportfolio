import { Briefcase, Code, User, Zap, Database, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const AboutSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section 
      id="about" 
      className="py-24 px-4 relative bg-gradient-to-b from-background via-secondary/20 to-background overflow-hidden" 
      ref={ref}
    >
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/3 rounded-full blur-3xl -z-10" />
      
      <div className={`container mx-auto max-w-6xl transition-all duration-700 ${isVisible ? "scroll-fade-in" : "opacity-0"}`}>
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        {/* Main Info Grid: Bio and Skills/Experience */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-16">
          
          {/* Left Column: Bio Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary">
              Passionate Roblox Developer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
             Hey! I’m DaceDev. I’ve been around Roblox for over 6 years now, though my real dive into scripting started back in 2022. Like many developers, I started just by playing and studying the top games, trying to figure out how they actually worked.
            </p>
            <p className="text-muted-foreground leading-relaxed">
             I actually took a short break a while back to learn other programming languages. That time away was a game-changer, it gave me a fresh perspective and a much sharper toolkit. Now, I’m back on the platform with a renewed passion, focused on building game systems that are creative.
            </p>
          </div>

          {/* Right Column: Skills & Experience */}
          <div className="space-y-12">
            
            {/* Skills Grid */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Zap className="h-5 w-5 text-primary" />
                Core Skills
              </h4>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: "Lua Scripting", icon: Code },
                  { name: "DataStore Systems", icon: Database },
                  { name: "Modular Design", icon: Briefcase },
                  { name: "Performance Optimization", icon: Zap }
                ].map((skill, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-card/30 rounded-lg border border-border/30 hover:bg-card/50 transition-colors">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Experience Timeline - Fixed Centering and Alignment */}
            <div>
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                Experience
              </h4>
              <div className="space-y-0">
                
                {/* Item 1 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center w-6 shrink-0"> 
                    <div className="w-3 h-3 bg-primary rounded-full z-10"></div>
                    <div className="w-px h-full bg-primary/30 -mt-1"></div>
                  </div>
                  <div className="pb-8">
                    <h5 className="font-semibold leading-none">Advanced Intermediate Roblox Scripter</h5>
                    <p className="text-sm text-muted-foreground mt-1">2025 - Present</p>
                    <p className="text-sm text-muted-foreground mt-2">After over three years of scripting, I’ve reached a point where my skills and confidence allow me to build good projects.</p>
                  </div>
                </div>

                {/* Item 2 */}
                <div className="flex gap-4">
                  <div className="flex flex-col items-center w-6 shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full z-10"></div>
                    <div className="w-px h-full bg-primary/30 -mt-1"></div>
                  </div>
                  <div className="pb-8">
                    <h5 className="font-semibold leading-none">Beginner Roblox Scripter</h5>
                    <p className="text-sm text-muted-foreground mt-1">2022 - 2024</p>
                    <p className="text-sm text-muted-foreground mt-2">The beginner stage was the most challenging, as it required overcoming obstacles to build a solid foundation.</p>
                  </div>
                </div>

                {/* Item 3 */}
                 <div className="flex gap-4">
                  <div className="flex flex-col items-center w-6 shrink-0">
                    <div className="w-3 h-3 bg-primary rounded-full z-10"></div>
                    <div className="w-px h-full bg-primary/30 -mt-1"></div>
                  </div>
                  <div className="pb-8">
                    <h5 className="font-semibold leading-none">Roblox Enthusiast</h5>
                    <p className="text-sm text-muted-foreground mt-1">2019 - 2022</p>
                    <p className="text-sm text-muted-foreground mt-2">The entry stage many developers go through. During this time, I focused on exploring and studying top-page games to understand what makes them successful.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Cards - Full Width Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="gradient-border p-8 card-hover bg-card/20 rounded-xl border border-border/50">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold mb-2">Creative Solutions</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">Creating my own methods to solve game system challenges.</p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-8 card-hover bg-card/20 rounded-xl border border-border/50">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold mb-2">Collaborative Mindset</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">Open to ideas and perspectives from everyone.</p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-8 card-hover bg-card/20 rounded-xl border border-border/50">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h5 className="font-semibold mb-2">Organized Architect</h5>
                <p className="text-sm text-muted-foreground leading-relaxed">Focusing on modular development to build systems that are easy to manage and expand.</p>        </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};