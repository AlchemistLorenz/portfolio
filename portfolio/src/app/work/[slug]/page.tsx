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
    <main className="bg-dark-extra text-off-white py-16">
      <div className="max-w-4xl mx-auto space-y-12 px-4">
        <h1 className="text-4xl font-bold text-center">{project.title}</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {project.images.map((src) => (
            <div key={src} className="relative w-full h-64 rounded overflow-hidden">
              <Image
                src={src}
                alt={project.title}
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
         <FaGithub size={20} />
         <span>Source</span>
       </Link>

       <div className="inline-flex flex-wrap justify-center gap-2">
         {project.stack.map((tech) => (
           <span
             key={tech}
             className="px-3 py-1 border border-off-white rounded-full text-sm hover:scale-105 transition"
           >
             {tech}
           </span>
         ))}
       </div>
     </div>
     <div className="text-center mt-8">
       <Link href="/work" className="inline-block underline">
         ← Back to Projects
       </Link>
     </div>
     </div>
  </main>
  )
}