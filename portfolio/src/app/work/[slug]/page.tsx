import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projects, skillIcons } from "../../../data/projects";
import { FaHtml5, FaReact, FaPython, FaTerminal, FaNodeJs } from "react-icons/fa";
import { SiFlask, SiFastapi, SiMongodb, SiTensorflow, SiScikitlearn, SiPandas, SiRender, SiTypescript, SiNextdotjs, SiTailwindcss, SiPhp, SiCplusplus, SiMysql, SiJenkins } from "react-icons/si";
import { VscJson } from "react-icons/vsc";

const iconComponents = {
  SiFlask,
  FaHtml5,
  VscJson,
  SiFastapi,
  FaReact,
  SiMongodb,
  SiRender,
  FaPython,
  SiTensorflow,
  SiScikitlearn,
  SiPandas,
  FaTerminal,
  SiTypescript,
  SiNextdotjs,
  FaNodeJs,
  SiTailwindcss,
  SiPhp,
  SiCplusplus,
  SiMysql,
  SiJenkins,
};

export default function ProjectDetail({ params }: any) {
  console.log("Params:", params);
  console.log("Available slugs:", projects.map((p) => p.slug));

  if (!params || !params.slug) {
    console.error("Slug is undefined or missing in params.");
    return notFound();
  }

  const normalizedSlug = params.slug.trim().toLowerCase();
  const project = projects.find((p) => p.slug.trim().toLowerCase() === normalizedSlug);

  console.log("Available slugs:", projects.map((p) => p.slug));
  console.log("Normalized slug:", normalizedSlug);

  if (!project) {
    console.error(`No project found for slug: ${normalizedSlug}`);
    return notFound();
  }

  return (
    <main className="bg-dark-extra text-off-white py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <h1 className="text-4xl font-bold text-center">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((src) => (
            <div key={src} className="relative w-full h-64 rounded overflow-hidden">
              <Image
                src={src}
                alt={`Image of ${project.title}`}
                width={640}
                height={360}
                quality={100}
                className="object-cover"
              />
            </div>
          ))}
        </div>
        <p className="text-center leading-relaxed">{project.description}</p>
        <div className="text-center mb-2">
          <Link
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 bg-[#BB4430] hover:bg-[#EB5E28] px-5 py-2 rounded transition mx-auto mr-4"
          >
            <span className="flex items-center space-x-1">
              <FaGithub size={20} />
              <span>Source</span>
            </span>
          </Link>
          <div className="inline-flex flex-wrap justify-center gap-2">
            {project.stack.map((tech) => {
              const skillData = skillIcons[tech];
              const IconComponent = skillData ? iconComponents[skillData.icon as keyof typeof iconComponents] : null;

              return (
                <span
                  key={tech}
                  className="flex items-center gap-1 px-2 py-1 border rounded-full text-sm hover:scale-105 hover:bg-opacity-20 transition"
                  style={{ borderColor: skillData?.color || "#ccc", color: skillData?.color || "#fff", backgroundColor: skillData?.color ? `${skillData.color}33` : "transparent" }}
                >
                  {IconComponent && <IconComponent size={16} />}
                  {tech}
                </span>
              );
            })}
          </div>
        </div>
        <div className="text-center mt-8">
          <Link href="/work" className="inline-block underline">
            ← Back to Projects
          </Link>
        </div>
      </div>
    </main>
  );
}