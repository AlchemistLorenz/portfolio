"use client";
import { useState } from "react";
import { FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed top-1/2 left-4 z-50 p-2 bg-[#BB4430] text-off-white rounded-full shadow-lg hover:bg-[#EB5E28] transition -translate-y-1/2"
        >
          Menu
        </button>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-1/2 left-0 h-auto w-64 bg-[#] text-off-white shadow-lg transform transition-transform duration-300 -translate-y-1/2 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4">
          <button
            onClick={() => setIsOpen(false)}
            className="mb-4 p-2 bg-[#BB4430] text-off-white rounded-full shadow-lg hover:bg-[#EB5E28] transition"
          >
            Close
          </button>
          <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
          <ul className="space-y-4">
            <li>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-purple-haze transition"
              >
                <FaGithub size={24} />
                <span>GitHub</span>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-purple-haze transition"
              >
                <FaTwitter size={24} />
                <span>Twitter</span>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 hover:text-purple-haze transition"
              >
                <FaInstagram size={24} />
                <span>Instagram</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
