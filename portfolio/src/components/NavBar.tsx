"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaGithub } from "react-icons/fa";

type NavItem = {
  label?: string;
  href: string;
  icon?: React.ReactNode;
  external?: boolean;
};

const navItems: NavItem[] = [
  { label: "Work",    href: "/work" },
  { label: "Contact", href: "/contact" },
  { label: "Posts", href: "/posts"},
  { label:" Source",
    href: "https://github.com/GucciRemyBoi/portfolio",
    icon: <FaGithub size={24} />,
    external: true,
  },
];

export default function NavBar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 w-full bg-dark-extra/70 backdrop-blur z-50">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <Link href="/" className="font-bold text-xl text-off-white hover:text-purple-haze transition">
          Lorenz V. Wilkins
        </Link>
        <ul className="flex items-center space-x-8">
          {navItems.map(({ label, href, icon, external }) => {
            const isActive = !external && pathname === href;
            const colorClasses = external
              ? "text-off-white hover:text-purple-haze"
              : isActive
              ? "text-purple-haze font-semibold"
              : "text-off-white hover:text-purple-haze";

            return (
              <li key={href}>
                <Link
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className={`transition ${colorClasses} flex items-center space-x-2`}
                  aria-label={icon ? "View source code on GitHub" : undefined}
                >
                  {icon && <span>{icon} </span>}
                  {label && <span>{label} </span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
