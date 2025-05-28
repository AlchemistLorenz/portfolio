import { FaHtml5, FaReact, FaPython, FaTerminal, FaNodeJs, FaJs, FaCss3Alt, FaRocket, FaServer, FaLock, FaGit, FaGithub, FaMicrosoft, FaAws } from "react-icons/fa";
import { SiFlask, SiFastapi, SiMongodb, SiTensorflow, SiScikitlearn, SiPandas, SiRender, SiTypescript, SiNextdotjs, SiTailwindcss, SiPhp, SiCplusplus, SiMysql, SiJenkins, SiGraphql, SiWebpack, SiGithubactions, SiJest, SiFigma, SiGooglecloud, SiCypress, SiPostgresql, SiVercel } from "react-icons/si";
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
    SiWebpack,
    SiGithubactions,
    SiJest,
    SiFigma,
    SiGooglecloud,
    SiCypress,
    SiPostgresql,
    SiVercel,
    FaGit,
    FaGithub,
    FaMicrosoft,
    FaAws
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
    Database: ["MongoDB", "PostgreSQL", "SQL"],
    DevOps: ["GitHub Actions", "CI/CD Pipelines", "Shell Scripting"],
    Cloud: ["AWS", "Google Cloud Platform", "Azure", "Vercel"],
    Testing: ["Unit Testing (Jest, Mocha)"],
    Tools: ["Webpack/Vite", "Figma", "Git", "GitHub/GitLab"],
    DataScience: ["Python", "Machine Learning", "Scikit-learn", "Pandas"],
    SoftSkills: ["Problem-Solving", "Communication", "Team Collaboration", "Time Management"],
};

export default function Skills() {
    return (
        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-off-white]">Skills</h2>
            <div className="flex overflow-x-auto space-x-6 snap-x snap-mandatory p-4">
                {Object.entries(skillSections).map(([section, skills]) => (
                    <div
                        key={section}
                        className="snap-start flex-shrink-0 min-w-[280px] p-6 rounded-lg shadow-md"
                        style={{
                            backgroundColor: 'var(--foreground)',
                            color: 'var(--background)',
                        }}
                    >
                        <h3 className="text-xl font-semibold mb-4 border-b border-gray-600 pb-2 text-center">{section}</h3>
                        <ul className="space-y-2">
                            {skills.map(skill => {
                                if (typedSkillIcons.hasOwnProperty(skill)) {
                                    const { icon, color } = typedSkillIcons[skill];
                                    const IconComponent = iconComponents[icon];

                                    return (
                                        <li key={skill} className="flex flex-col gap-2">
                                            {/* Pill wrapper for icon and label */}
                                            <div
                                                className="inline-flex items-center gap-2 px-3 py-1 rounded-full transition hover:brightness-110"
                                                style={{ backgroundColor: color, color: '#fff' }}
                                            >
                                                {IconComponent && <IconComponent size={16} />}
                                                <span className="text-sm font-medium">{skill}</span>
                                            </div>
                                            {/* Proficiency bar */}
                                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                                                <div
                                                    className="h-2.5 rounded-full"
                                                    style={{
                                                        width: `${typedSkillIcons[skill]?.proficiency || 0}%`,
                                                        backgroundColor: color,
                                                    }}
                                                />
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