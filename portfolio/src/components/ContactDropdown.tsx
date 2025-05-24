import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function ContactDropdown() {
  return (
    <div className="absolute top-full left-1 mt-2 bg-dark-extra text-off-white shadow-lg p-4 animate-slide-down rounded-md z-50 w-max">
      <h2 className="text-2xl font-bold mb-4"> Links </h2>
      <ul className="space-y-4">
        <li>
          <a
            href="https://www.linkedin.com/in/lorenz-wilkins/?trk=PROFILE_DROP_DOWN"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-purple-haze transition"
          >
            <FaLinkedin size={24} />
            <span>LinkedIn</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/AlchemistLorenz"
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
            href="https://instagram.com/thealchemistlorenz"
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
  );
}
