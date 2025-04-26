"use client";

import Home from "./Home";
import Timeline from "./About";
import About from "./Bio";
import Skills from "./Skills";
import Link from "next/link";

export default function HomeSection() {
  return (
    <div className="bg-dark-extra text-off-white min-h-screen pt-30">
      <section>
        <Home />
      </section>
      <section className="max-w-3xl mx-auto py-12 space-y-8 text-center">
        <Timeline />
        <About />
        <Skills />
        <Link
          href="/work"
          className="inline-block mt-8 bg-[#BB4430] hover:bg-[#EB5E28] text-white px-6 py-2 rounded transition">
          View My Portfolio →
        </Link>
      </section>
    </div>
  );
}
