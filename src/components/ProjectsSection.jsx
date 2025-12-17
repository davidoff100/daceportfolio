import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Directional Movement System",
    description: "Smooth Directional Movement with Custom Shift Lock.",
    image: "projects/project1.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://screenpal.com/content/video/cTlDqJnYa5G",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Lobby Teleport System",
    description:
      "A simple teleport system with the option to expand and add multiple features as needed.",
    image: "projects/project2.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://www.youtube.com/watch?v=TCQ_INnUb48",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "ATM System",
    description:
      "ATM System using DataStore, easy to expand and very interesting.",
    image: "projects/project3.png",
    tags: ['Roblox Lua'],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-center items-center">
                  <a
                    href={project.demoUrl || project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="cosmic-button"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-20">
          {" "}
          Older <span className="text-primary"> Projects </span>
        </h2>
      </div>
    </section>
  );
};
