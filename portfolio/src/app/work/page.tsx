"use client";
import Link from "next/link";
import Image from "next/image";
import { projects, skillIcons } from "../../data/projects";
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

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p, index) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="block border rounded-lg overflow-hidden hover:shadow-xl hover:scale-105 transition-transform duration-300"
        >
          <div>
            <div className="relative w-full h-56">
              <Image
                src={p.thumbnail}
                alt={p.title}
                fill
                className="object-cover hover:opacity-90 transition-opacity duration-300"
                placeholder="blur"
                blurDataURL="/images/projects/placeholder.png"
                priority={index < 3}
              />
            </div>
            <div className="p-4 bg-[#1E1E1E] hover:bg-[#2A2A2A] transition-colors duration-300">
              <h3 className="font-semibold text-lg text-white">{p.title}</h3>
              <p className="text-sm text-[#E0E2DB] mb-2">{p.short}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((skill) => {
                  const skillData = skillIcons[skill];
                  const IconComponent = skillData ? iconComponents[skillData.icon as keyof typeof iconComponents] : null;

                  return (
                    <span
                      key={skill}
                      className="flex items-center gap-1 px-2 py-1 border rounded-full text-sm hover:scale-105 hover:bg-opacity-20 transition"
                      style={{ borderColor: skillData?.color || "#ccc", color: skillData?.color || "#fff", backgroundColor: skillData?.color ? `${skillData.color}33` : "transparent" }}
                    >
                      {IconComponent && <IconComponent size={16} />}
                      {skill}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

