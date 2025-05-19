import "./globals.css";
import { ReactNode } from "react";
import NavBar from "../components/NavBar";
import PageTransition from "../components/PageTransition";

export const metadata ={
  title: "Lorenz V. Wilkins",
  description: "Portfolio of Lorenz V. Wilkins"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  console.log("RootLayout rendered");
  return (
    <html lang="en">
      <body className="bg-gray-900 text-gray-100 antialiased data-theme-dark">
        <NavBar />
        <PageTransition>
          <main className="pt-20">{children}</main>
        </PageTransition>
      </body>
    </html>
  );
}