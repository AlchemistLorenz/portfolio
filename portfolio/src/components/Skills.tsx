import { FaHtml5, FaReact, FaPython, FaTerminal, FaNodeJs } from "react-icons/fa";
import { SiFlask, SiFastapi, SiMongodb, SiTensorflow, SiScikitlearn, SiPandas, SiRender, SiTypescript, SiNextdotjs, SiTailwindcss, SiPhp, SiCplusplus, SiMysql, SiJenkins } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { skillIcons } from "../data/projects";

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
};

interface SkillIcon {
    icon: keyof typeof iconComponents;
    color: string;
}

const typedSkillIcons: Record<string, SkillIcon> = skillIcons;

export default function Skills() {
    const skills = ["TypeScript", "React", "Next.js", "Node.js", "Tailwind", "Python", "MongoDB", "PHP", "AI/ML", "C/C++", "SQL", "CI/CD Pipelines"];

    return (
        <div className="max-w-2xl mx-auto py-16">
            <h2 className="text-2xl font-semibold mb-6 border-b-2 border-[#985F99] pb-2">Skills</h2>
            <ul className="flex flex-wrap gap-4">
                {skills.map(skill => {
                    if (typedSkillIcons.hasOwnProperty(skill)) {
                        const { icon, color } = typedSkillIcons[skill];
                        const IconComponent = iconComponents[icon];

                        return (
                            <li
                                key={skill}
                                className="flex items-center gap-2 px-4 py-2 border rounded-full hover:scale-105 transition"
                                style={{ borderColor: color || "#ccc" }}
                            >
                                {IconComponent && <IconComponent size={20} color={color} />}
                                <span>{skill}</span>
                            </li>
                        );
                    }

                    return (
                        <li
                            key={skill}
                            className="px-4 py-2 border rounded-full hover:scale-105 transition"
                        >
                            {skill}
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}