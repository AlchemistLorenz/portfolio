"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Intro() {
  const [text, setText] = useState("");
  const fullText = "Hi, I'm Lorenz - an aspiring developer based in Colorado!";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, ++i));
      if (i === fullText.length) clearInterval(timer);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center space-y-6">
      <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
        <Image
          src="/profile.jpg"
          alt="Lorenz Wilkins"
          fill
          className="object-cover"
        />
      </div>
      <h1 className="text-3xl font-mono">{text}</h1>
      <p className="max-w-xl text-center">
        Innovation Engineer • Full-Stack Alchemist
      </p>
    </div>
  );
}