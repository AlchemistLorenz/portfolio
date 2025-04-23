import "./globals.css";
import { ReactNode } from "react";

export const metadata ={
  title: "Lorenz V. Wilkins - Aspiring Software Engineer",
  description: "Portfolio of Lorenz V. Wilkins, specalizing in React, Next.js, Tailwind."
};

export default function RootLayout({ children }: {children: ReactNode }) {
  return (
    <html lang='en'>
      <body className="bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
