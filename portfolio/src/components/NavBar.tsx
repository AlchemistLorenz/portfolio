"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub, FaSun, FaMoon } from "react-icons/fa";
import { useState, useEffect } from "react";
import ContactDropdown from "./ContactDropdown";
import UnderConstructionModal from "./UnderConstructionModal";

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
  {
    label: "Source",
    href: "https://github.com/GucciRemyBoi/portfolio",
    icon: <FaGithub size={24} />,
    external: true,
  },
];

export default function NavBar() {
  const pathname = usePathname();
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [showUnderConstruction, setShowUnderConstruction] = useState(false);
  // Theme setup with SSR-safe default
  const [theme, setTheme] = useState<"light" | "dark">("light");
  // On mount, load stored theme or system preference
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    } else {
      setTheme(
        window.matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
      );
    }
  }, []);
  // Apply theme attribute and persist on change
  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className="fixed top-0 w-full bg-dark-extra/70 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link
          href="/"
          className="font-bold text-xl text-off-white hover:text-purple-haze transition"
        >
          Lorenz V. Wilkins
        </Link>
        <ul className="flex items-center space-x-8">
          {navItems
            .filter(({ external }) => !external)
            .map(({ label, href }) => {
              const isActive = pathname === href;
              const colorClasses = isActive
                ? "text-purple-haze font-semibold"
                : "text-off-white hover:text-purple-haze";
              // Intercept Garden link
              if (href === "/notes") {
                return (
                  <li key={href}>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        setShowUnderConstruction(true);
                      }}
                      className={`transition ${colorClasses}`}
                    >
                      {label}
                    </button>
                  </li>
                );
              }
              return (
                <li key={href}>
                  <Link href={href} className={`transition ${colorClasses}`}>
                    {label}
                  </Link>
                </li>
              );
            })}
          {showUnderConstruction && (
            <UnderConstructionModal onClose={() => setShowUnderConstruction(false)} />
          )}
          <li className="relative">
            <button
              onClick={() => setIsContactOpen(!isContactOpen)}
              className="hover:text-purple-haze transition"
            >
              On the Web
            </button>
            {isContactOpen && <ContactDropdown />}
          </li>
          {navItems
            .filter(({ external }) => external)
            .map(({ label, href, icon }) => {
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
          {/* Theme toggle */}
          <li>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
              aria-label="Toggle light/dark theme"
              className="p-2 rounded-full transition"
              style={{
                backgroundColor: "var(--toggle-bg)",
                color: "var(--toggle-fg)",
              }}
            >
              {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
