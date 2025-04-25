// src/components/HomeSection.tsx
"use client";

import Home from "./Home";      // your typing-intro + avatar
import Timeline from "./About"; // the year-event list
import About from "./Bio";      // your Bio paragraph + “My Portfolio” button
import Skills from "./Skills";  // your skill pills
import Link from "next/link";

export default function HomeSection() {
  return (
    <div className="bg-gray-900 text-gray-100 min-h-screen pt-20">
      {/* 1. Hero */}
      <section>
        <Home />
      </section>

      {/* 2. Timeline • Bio • Skills */}
      <section className="max-w-3xl mx-auto py-16 space-y-12 text-center">
        {/* Timeline */}
        <Timeline />

        {/* About paragraph */}
        <About />

        {/* Skills list */}
        <Skills />

        {/* Call-to-action → Work page */}
        <Link
          href="/work"
          className="inline-block mt-8 bg-red-800 hover:bg-red-900 text-white px-6 py-2 rounded transition"
        >
          View My Work →
        </Link>
      </section>
    </div>
  );
}
