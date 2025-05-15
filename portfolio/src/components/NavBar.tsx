"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import ContactDropdown from "./ContactDropdown";

type NavItem = {
  label?: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Works", href: "/work" },
  { label: "Skills", href: "/skills" },
  { label: "Garden", href: "/notes" },
  { label: "Source",
    href: "https://github.com/GucciRemyBoi/portfolio",
    icon: <FaGithub size={24} />,
    external: true,
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-dark-extra/70 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl text-off-white hover:text-purple-haze transition">
          Lorenz V. Wilkins
        </Link>
        <ul className="flex items-center space-x-8">
          {navItems.filter(({ external }) => !external).map(({ label, href }) => {
            const isActive = pathname === href;
            const colorClasses = isActive
              ? "text-purple-haze font-semibold"
              : "text-off-white hover:text-purple-haze";
            return (
              <li key={href}>
                <Link href={href} className={`transition ${colorClasses}`}>
                  {label}
                </Link>
              </li>
            );
          })}
          <li className="relative">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="hover:text-purple-haze transition"
            >
              On the Web
            </button>
            {isContactOpen && <ContactDropdown />}
          </li>
          {navItems.filter(({ external }) => external).map(({ label, href, icon }) => {
            const colorClasses = "text-off-white hover:text-purple-haze";
            return (
              <li key={href}>
                <Link
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`transition ${colorClasses} flex items-center space-x-2`}
                  aria-label="View source code on GitHub"
                >
                  <span className="flex items-center space-x-2">
                    {icon && <span>{icon}</span>}
                    {label && <span>{label}</span>}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
