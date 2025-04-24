"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home",   href: "./Home" },
  { label: "Work",   href: "./work" },
  { label: "About",  href: "./about" },
  { label: "Skills", href: "./skills" },    // make sure you have this route
  { label: "Projects", href: "./projects" },
  { label: "Contact",  href: "./contact" },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-white/70 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Home link */}
        <Link href="/" className="font-bold text-xl">
          Lorenz
        </Link>

        {/* Nav links */}
        <ul className="flex space-x-6">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`
                    capitalize transition
                    ${isActive
                      ? "text-blue-600 font-semibold"
                      : "text-gray-700 hover:text-blue-600"}
                  `}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

