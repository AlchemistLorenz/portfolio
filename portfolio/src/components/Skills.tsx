import { FaHtml5, FaReact, FaPython, FaTerminal, FaNodeJs, FaJs, FaCss3Alt, FaRocket, FaServer, FaLock, FaGit, FaGithub } from "react-icons/fa";
import { SiFlask, SiFastapi, SiMongodb, SiTensorflow, SiScikitlearn, SiPandas, SiRender, SiTypescript, SiNextdotjs, SiTailwindcss, SiPhp, SiCplusplus, SiMysql, SiJenkins, SiGraphql, SiRedis, SiFirebase, SiWebpack, SiEslint, SiGithubactions, SiCircleci, SiMicrosoftazure, SiJest, SiFigma, SiKubernetes, SiDocker, SiAmazonaws, SiGooglecloud, SiCypress, SiPostgresql } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { skillIcons, SkillIcon as ProjectSkillIcon } from "../data/projects";

const iconComponents = {
    SiFlask,
    FaHtml5,
    VscJson,
    SiFastapi,
    FaReact,
    SiMongodb,
    SiRender,
    FaPython,
    SiTensorflow,
    SiScikitlearn,
    SiPandas,
    FaTerminal,
    SiTypescript,
    SiNextdotjs,
    FaNodeJs,
    SiTailwindcss,
    SiPhp,
    SiCplusplus,
    SiMysql,
    SiJenkins,
    FaJs,
    FaCss3Alt,
    FaRocket,
    FaServer,
    FaLock,
    SiGraphql,
    SiRedis,
    SiFirebase,
    SiWebpack,
    SiEslint,
    SiGithubactions,
    SiCircleci,
    SiMicrosoftazure,
    SiJest,
    SiFigma,
    FaGit,
    FaGithub,
    SiKubernetes,
    SiDocker,
    SiAmazonaws,
    SiGooglecloud,
    SiCypress,
    SiPostgresql,
};

interface SkillIcon {
    icon: keyof typeof iconComponents;
    color: string;
    proficiency: number;
}

const typedSkillIcons: Record<string, ProjectSkillIcon> = skillIcons;

const skillSections = {
    Frontend: ["React", "Next.js", "TypeScript", "JavaScript (ES6+)", "CSS Frameworks", "Web Performance Optimization", "Tailwind", "HTML & Bootstrap", "JSON"],
    Backend: ["Node.js", "RESTful APIs", "GraphQL", "Authentication (OAuth, JWT)", "PHP", "FastAPI", "Flask", "Render"],
    Database: ["MongoDB", "PostgreSQL", "Redis", "Firebase", "SQL"],
    DevOps: ["Docker", "Kubernetes", "GitHub Actions", "CircleCI", "CI/CD Pipelines", "Shell Scripting"],
    Cloud: ["AWS", "Google Cloud Platform", "Azure"],
    Testing: ["Unit Testing (Jest, Mocha)", "End-to-End Testing (Cypress, Playwright)"],
    Tools: ["Webpack/Vite", "ESLint/Prettier", "Figma", "Git", "GitHub/GitLab"],
    DataScience: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    SoftSkills: ["Problem-Solving", "Communication", "Team Collaboration", "Time Management"],
};

export default function Skills() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-off-white]">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {Object.entries(skillSections).map(([section, skills]) => (
                    <div key={section} className="bg-[#985F99] p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold mb-4 text-off-white border-b border-gray-600 pb-2 text-center">{section}</h3>
                        <ul className="space-y-2">
                            {skills.map(skill => {
                                if (typedSkillIcons.hasOwnProperty(skill)) {
                                    const { icon, color } = typedSkillIcons[skill];
                                    const IconComponent = iconComponents[icon];

                                    return (
                                        <li
                                            key={skill}
                                            className="flex flex-col gap-2 p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
                                        >
                                            <div className="flex items-center gap-3">
                                                {IconComponent && <IconComponent size={24} color={color} />}
                                                <span className="text-white">{skill}</span>
                                            </div>
                                            <div className="w-full bg-gray-600 rounded-full h-2.5">
                                                <div
                                                    className="bg-[#EB5E28] h-2.5 rounded-full"
                                                    style={{ width: `${typedSkillIcons[skill]?.proficiency || 0}%` }}
                                                ></div>
                                            </div>
                                        </li>
                                    );
                                }

                                return (
                                    <li
                                        key={skill}
                                        className="p-2 bg-gray-700 rounded-md hover:bg-gray-600 transition"
                                    >
                                        <span className="text-white">{skill}</span>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}