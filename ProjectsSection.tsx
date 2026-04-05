import { useScrollReveal } from "./useScrollReveal";
import { ExternalLink } from "lucide-react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "Web Development",
    category: "Digital Development",
    description: "Building modern, responsive web experiences using cutting-edge technologies and clean design principles.",
    image: project3,
    tags: ["React", "Python", "Web Design"],
    link: "#",
  },
  {
    title: "Video Production Clips & AI ",
    category: "Videography",
    description: "Professional video editing for music clips, short films, and creative visual content with cinematic quality.",
    image: project1,
    tags: ["Video Editing" , "Color Grading"],
    link: "#",
  },
  {
    title: "Photo Editing & Retouching",
    category: "Photography",
    description: "High-quality photo editing, retouching, and color correction for professional and creative projects.",
    image: project2,
    tags: ["Photoshop", "Lightroom", "AI Tools"],
    link: "#",
  },
];

const ProjectsSection = () => {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="projects" className="py-32 relative">
      <div ref={ref} className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className={`text-sm tracking-[0.3em] uppercase text-primary mb-4 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Selected Work
          </p>
          <h2
            className={`text-4xl lg:text-6xl font-display font-bold transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </div>

        <div className="space-y-24">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group grid lg:grid-cols-2 gap-12 items-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"
              } ${i % 2 === 1 ? "lg:direction-rtl" : ""}`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              {/* Image */}
              <div className={`relative overflow-hidden rounded-2xl ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Info */}
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <span className="text-xs tracking-[0.2em] uppercase text-primary font-medium">
                  {project.category}
                </span>
                <h3 className="text-3xl lg:text-4xl font-display font-bold mt-2 mb-4 group-hover:text-gradient transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-secondary text-secondary-foreground border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity"
                  >
                    <ExternalLink size={16} />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
