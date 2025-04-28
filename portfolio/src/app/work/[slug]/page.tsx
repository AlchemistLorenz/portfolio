"use client";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { projects } from "../../../data/projects";

interface Params { params: { slug: string } }

export default function ProjectDetail({ params }: Params) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return notFound();

  return (
    <main className="min-h-screen bg-dark-extra text-off-white p-8 text-center">
      <h1 className="text-4xl font-bold mb-4 text-center">{project.title}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {project.images.map((src) => (
          <div key={src} className="relative w-full h-140 rounded overflow-hidden">
            <Image 
                quality={100} 
                src={src} 
                alt={project.title} 
                className="object-full" />
          </div>
        ))}
      </div>
      <p className="mb-6 leading-relaxed text-center">{project.description}</p>
      <div className="flex flex-wrap items-center gap-4 mb-8">
        <Link
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center space-x-2 bg-[#BB4430] hover:bg-[#EB5E28] px-4 py-2 rounded transition mx-auto"
        >
          <FaGithub size={20} />
          <span>Source</span>
        </Link>
        <div className="inline-flex flex-wrap justify-center gap-2 mx-auto mb-6">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 border border-off-white rounded-full text-sm hover:scale-105 transition mx-auto"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      <Link href="/work" className="inline-block underline mx-auto">
        ← Back
      </Link>
    </main>
  );
}
