import "./globals.css";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";

export const metadata ={
  title: "Lorenz V. Wilkins",
  description: "Portfolio of Lorenz V. Wilkins"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased">
        <NavBar />
        {/* This is your only client‐side “usePathname” wrapper */}
        <PageTransition>
          {children}
        </PageTransition>
      </body>
    </html>
  );
}