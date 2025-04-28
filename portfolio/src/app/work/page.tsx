"use client";
import Link from "next/link";
import Image from "next/image";
import { projects } from "../../data/projects";

export default function WorkPage() {
  return (
    <div className="max-w-4xl mx-auto py-16 grid md:grid-cols-2 gap-6">
      {projects.map((p) => (
        <Link
          key={p.slug}
          href={`/work/${p.slug}`}
          className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
        >
          <div className="relative w-full h-48">
            <Image src={p.thumbnail} alt={p.title} fill className="object-cover" />
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.short}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

