"use client";
import Link from "next/link";

const sections = ["home","bio","skills","projects","contact"] as const;

export default function NavBar() {
  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link href="#home" className="font-bold text-xl">Lorenz</Link>
        <ul className="flex space-x-6">
          {sections.map(sec => (
            <li key={sec}>
              <Link
                href={`#${sec}`}
                className="capitalize hover:text-blue-600 transition"
              >
                {sec}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
