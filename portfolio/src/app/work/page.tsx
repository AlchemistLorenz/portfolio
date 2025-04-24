// src/app/projects/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  // 1. Define your projects array right here
  const projects = [
    {
      slug: "my-first-app",
      title: "My First App",
      thumbnail: "/thumbs/first-app.png",
      short: "A quick demo of React/Next.js skills.",
    },
    {
      slug: "bug-tracker",
      title: "Flask Bug Tracker",
      thumbnail: "/thumbs/bug-tracker.png",
      short: "A simple bug-tracking system.",
    },
    // …add more objects here…
  ];

  // 2. Build an array of JSX elements via a for…of loop
  const projectElements: JSX.Element[] = [];
  for (const p of projects) {
    projectElements.push(
      <Link
        key={p.slug}
        href={`/projects/${p.slug}`}
        className="block border rounded-lg overflow-hidden hover:shadow-lg transition"
      >
        <div className="relative w-full h-48">
          <Image
            src={p.thumbnail}
            alt={p.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{p.title}</h3>
          <p className="text-sm text-gray-400">{p.short}</p>
        </div>
      </Link>
    );
  }

  // 3. Render them
  return (
    <div className="max-w-4xl mx-auto py-16 grid md:grid-cols-2 gap-6">
      {projectElements}
    </div>
  );
}
