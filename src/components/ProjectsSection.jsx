import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "Interactive 3D Hero",
    description: "A landing section powered by Spline with smooth overlays and modern UI.",
    tags: ["React", "Spline", "Tailwind"],
    href: "https://spline.design/",
  },
  {
    title: "Retro Grid Gallery",
    description: "A clean grid layout with subtle shadows and tasteful borders.",
    tags: ["UI", "Grid"],
    href: "https://tailwindcss.com/",
  },
  {
    title: "Framer Motion",
    description: "Delightful micro-interactions that elevate the experience.",
    tags: ["Animation"],
    href: "https://www.framer.com/motion/",
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-16">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-gray-900">Featured Projects</h2>
            <p className="mt-2 text-gray-600 max-w-2xl">
              A selection of crisp, modern UI elements and experiments.
            </p>
          </div>
          <a href="#contact" className="hidden sm:inline-flex text-sm text-gray-700 hover:text-black">Get in touch</a>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}
