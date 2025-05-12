"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function WorkPage() {
  return (
    <div className="max-w-5xl mx-auto py-16 px-4 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="block border rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition"
        >
          <div className="relative w-full h-56">
            <Image
              src={p.thumbnail}
              alt={p.title}
              fill
              className="object-cover hover:scale-105 transition"
            />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-[#E0E2DB]">{p.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

