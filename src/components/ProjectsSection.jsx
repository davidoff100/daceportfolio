import { memo } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

// Memoized project card component for better performance
const ProjectCard = memo(({ project, isLarge = false }) => (
  <div
    className={`group bg-card rounded-lg overflow-hidden shadow-xs card-hover ${isLarge ? 'lg:col-start-2' : ''}`}
  >
    <div className="h-48 overflow-hidden bg-secondary/20">
      <img
        src={project.image}
        alt={project.title || "Project"}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover md:transition-transform md:duration-500 md:group-hover:scale-110"
        style={{ contentVisibility: 'auto' }}
      />
    </div>

    <div className="p-6">
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, idx) => (
          <span key={idx} className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
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
));

ProjectCard.displayName = "ProjectCard";

const projects = [
  {
    id: 1,
    title: "Directional Movement System",
    description: "Smooth Directional Movement with Custom Shift Lock.",
    image: "projects/project1.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://youtu.be/01_pJm1p0c0",
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
      "ATM system using Roblox DataStore. During testing and demonstration, you may notice the leaderstats money value updating automatically at times. This behavior is intentional and is caused by a script that adds some money to the player’s balance in order to demonstrate the functionality of the ATM system.",
    image: "projects/project3.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://youtu.be/TKRLcIzoiT0",
    githubUrl: "#",
  },  
  {
    id: 4,
    title: "Tycoon System",
    description:
      "This was probably the most fun project I’ve worked on. It took me two days to invent and build the system, and it’s designed to be highly expandable. The video is a bit long, but it covers all the features of the system.",
    image: "projects/project6.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://www.youtube.com/watch?v=ClKzzjqBVXo",
    githubUrl: "#",
  }
  ,];

const olderProjects = [
  {
    id: 5,
    title: "Inventory System",
    description:
      "This system is a bit old, made in early 2025, but still works fine.",
    image: "projects/project4.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://drive.google.com/file/d/1Tk14WMDQDUYMZ060BijUn3Koe9o7qfcK/view?t=6",
    githubUrl: "#",
  },
  {
    id: 6,
    description: "My first ever gun system, made back in early 2025. Basic but works well.",
    image: "projects/project5.png",
    tags: ['Roblox Lua'],
    demoUrl: "https://drive.google.com/file/d/14x3u4me_Rb6FQEO7HI1d6493UMTpxREv/view?t=26",
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
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              isLarge={project.id === 4}
            />
          ))}
        </div>

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center mt-20">
          {" "}
          Older <span className="text-primary"> Projects </span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          This section shows my older projects from the start of 2025. They are not as polished as my recent work but still demonstrate my growth as a developer.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-3xl mx-auto">
          {olderProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
