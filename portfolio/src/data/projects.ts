export type SkillIcon = {
    icon: "SiFlask" | "FaHtml5" | "VscJson" | "SiFastapi" | "FaReact" | "SiMongodb" | "SiRender" | "FaPython" | "SiTensorflow" | "SiScikitlearn" | "SiPandas" | "FaTerminal" | "SiTypescript" | "SiNextdotjs" | "FaNodeJs" | "SiTailwindcss" | "SiPhp" | "SiCplusplus" | "SiMysql" | "SiJenkins" | "FaJs" | "FaCss3Alt" | "FaRocket" | "FaServer" | "FaLock" | "SiGraphql" | "SiWebpack" | "SiGithubactions" | "SiMicrosoftazure" | "SiJest" | "SiFigma" | "FaGit" | "FaGithub" | "SiAmazonaws" | "SiGooglecloud" | "SiCypress" | "SiPostgresql" | "SiVercel";
    color: string;
    proficiency?: number;
};

export interface Project {
    slug: string;
    title: string;
    thumbnail: string;
    short: string;
    description: string;
    images: string[];
    repo: string;
    stack: string[];
}

export const projects: Project[] = [
    {
        slug:"bug-tracker",
        title:"Rapid Application Development (RAD): Bug Tracking Web Application",
        thumbnail:"/images/projects/bugtracker2.png",
        short:"Small scale website of a bug tracker, soon to be full stack website.",
        description:"This app lets you track bugs in real‐time, with live updates, user auth, and a sleek bootstrap design. Built to streamline work processes and keep developers on the same page.",
        images:["/images/projects/bugtracker.png", "/images/projects/bugtracker2.png"],
        repo:"https://github.com/GucciRemyBoi/bugtrackerprototype?tab=readme-ov-file",
        stack:["Flask", "HTML & Bootstrap", "JSON"],
    },
    {
        slug: "second-serving",
        title: "Auraria Hackathon Full-Stack Project: Second Serving",
        thumbnail:"/images/projects/secondserving.png",
        short: "Award winning hackathon project, FARM stack application for donating food to those in needs.",
        description: "1st Place hackathon project, a food-sharing platform powered by AI that connects individuals and restaurants with surplus meals to families in need and shelters.",
        images: ["/images/projects/secondservingDB.png", "/images/projects/secondservinghome.png"],
        repo: "https://github.com/GucciRemyBoi/secondserving",
        stack: ["FastAPI", "Flask", "React", "MongoDB", "Render"],
    },
    {
        slug: "honey-pot",
        title: "Honey Pot with Flask & Machine Learning Comparison",
        thumbnail:"/images/projects/pythonLogo.png",
        short: "Researching the effectiveness of logistic regression and random forest classifiers for honey pot detection.",
        description: "Low interaction honeypot made to study the effectiveness of logistic regression and random forest classifiers. Soon to be a honeypot for detecting malicious activity on a network.",
        images: ["/images/projects/model_comparison_chart.png", "/images/projects/rf_confusion_matrix.png"],
        repo: "https://github.com/GucciRemyBoi/honeypotproject",
        stack: ["Python", "Flask", "Machine Learning", "Scikit-learn", "Pandas", "Shell Scripting"],
    },
    // More Projects Added Here
];

export const skillIcons: Record<string, SkillIcon> = {
    Flask: { icon: "SiFlask", color: "#000000", proficiency: 75 },
    "HTML & Bootstrap": { icon: "FaHtml5", color: "#E34F26", proficiency: 80 },
    JSON: { icon: "VscJson", color: "#f0c420", proficiency: 75 },
    FastAPI: { icon: "SiFastapi", color: "#009688", proficiency: 80 },
    React: { icon: "FaReact", color: "#61DAFB", proficiency: 70 },
    MongoDB: { icon: "SiMongodb", color: "#47A248", proficiency: 65 },
    Render: { icon: "SiRender", color: "#0468D7", proficiency: 60 },
    Python: { icon: "FaPython", color: "#3776AB", proficiency: 80 },
    "Machine Learning": { icon: "SiTensorflow", color: "#FF6F00", proficiency: 60 },
    "Scikit-learn": { icon: "SiScikitlearn", color: "#F7931E", proficiency: 65 },
    Pandas: { icon: "SiPandas", color: "#150458", proficiency: 80 },
    "Shell Scripting": { icon: "FaTerminal", color: "#4EAA25", proficiency: 75 },
    TypeScript: { icon: "SiTypescript", color: "#3178C6", proficiency: 75 },
    "Next.js": { icon: "SiNextdotjs", color: "#000000", proficiency: 60 },
    "Node.js": { icon: "FaNodeJs", color: "#339933", proficiency: 65 },
    Tailwind: { icon: "SiTailwindcss", color: "#06B6D4", proficiency: 70 },
    PHP: { icon: "SiPhp", color: "#777BB4", proficiency: 70 },
    "AI/ML": { icon: "SiTensorflow", color: "#FF6F00", proficiency: 60 },
    "C/C++": { icon: "SiCplusplus", color: "#00599C", proficiency: 70 },
    SQL: { icon: "SiMysql", color: "#4479A1", proficiency: 75 },
    "GitHub Actions": { icon: "SiGithubactions", color: "#2088FF", proficiency: 45 },
    "CI/CD Pipelines": { icon: "SiJenkins", color: "#D24939", proficiency: 40 },
    "JavaScript (ES6+)": { icon: "FaJs", color: "#F7DF1E", proficiency: 70 },
    "CSS Frameworks": { icon: "FaCss3Alt", color: "#1572B6", proficiency: 80 },
    "Web Performance Optimization": { icon: "FaRocket", color: "#FF4500", proficiency: 40 },
    "RESTful APIs": { icon: "FaServer", color: "#4CAF50", proficiency: 55 },
    GraphQL: { icon: "SiGraphql", color: "#E10098", proficiency: 45 },
    "Authentication (OAuth, JWT)": { icon: "FaLock", color: "#FF5722", proficiency: 40 },
    "Webpack/Vite": { icon: "SiWebpack", color: "#8DD6F9", proficiency: 40 },
    Figma: { icon: "SiFigma", color: "#F24E1E", proficiency: 65 },
    Git: { icon: "FaGit", color: "#F05032", proficiency: 55 },
    "GitHub/GitLab": { icon: "FaGithub", color: "#181717", proficiency: 65 },
    "Unit Testing (Jest, Mocha)": { icon: "SiJest", color: "#C21325", proficiency: 40 },
    AWS: { icon: "SiAmazonaws", color: "#FF9900", proficiency: 35 },
    "Google Cloud Platform": { icon: "SiGooglecloud", color: "#4285F4", proficiency: 40 },
    Azure: { icon: "SiMicrosoftazure", color: "#0078D4", proficiency: 45 },
    Vercel: { icon: "SiVercel", color: "#000000", proficiency: 55 },
    "End-to-End Testing": { icon: "SiCypress", color: "#17202C", proficiency: 30 },
    PostgreSQL: { icon: "SiPostgresql", color: "#336791", proficiency: 60 },
};