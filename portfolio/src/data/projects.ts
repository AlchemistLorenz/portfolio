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
        title:"Bug Tracking Web",
        thumbnail:"/images/projects/bugtracker2.png",
        short:"Small scale website of a bug tracker, soon to be full stack website.",
        description:"This app lets you track bugs in real‐time, with live updates, user auth, and a sleek bootstrap design. Built to streamline work processes and keep developers on the same page.",
        images:["/images/projects/bugtracker.png", "/images/projects/bugtracker2.png"],
        repo:"https://github.com/GucciRemyBoi/bugtrackerprototype?tab=readme-ov-file",
        stack:["Flask", "HTML & Bootstrap", "JSON"],
    },
    {
        slug: "second-serving",
        title: "Project: Second Serving",
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

export const skillIcons: Record<string, { icon: string; color: string }> = {
    Flask: { icon: "SiFlask", color: "#000000" },
    "HTML & Bootstrap": { icon: "FaHtml5", color: "#E34F26" },
    JSON: { icon: "VscJson", color: "#f0c420" },
    FastAPI: { icon: "SiFastapi", color: "#009688" },
    React: { icon: "FaReact", color: "#61DAFB" },
    MongoDB: { icon: "SiMongodb", color: "#47A248" },
    Render: { icon: "SiRender", color: "#0468D7" },
    Python: { icon: "FaPython", color: "#3776AB" },
    "Machine Learning": { icon: "SiTensorflow", color: "#FF6F00" },
    "Scikit-learn": { icon: "SiScikitlearn", color: "#F7931E" },
    Pandas: { icon: "SiPandas", color: "#150458" },
    "Shell Scripting": { icon: "FaTerminal", color: "#4EAA25" },
    TypeScript: { icon: "SiTypescript", color: "#3178C6" },
    "Next.js": { icon: "SiNextdotjs", color: "#000000" },
    "Node.js": { icon: "FaNodeJs", color: "#339933" },
    Tailwind: { icon: "SiTailwindcss", color: "#06B6D4" },
    PHP: { icon: "SiPhp", color: "#777BB4" },
    "AI/ML": { icon: "SiTensorflow", color: "#FF6F00" },
    "C/C++": { icon: "SiCplusplus", color: "#00599C" },
    SQL: { icon: "SiMysql", color: "#4479A1" },
    "CI/CD Pipelines": { icon: "SiJenkins", color: "#D24939" },
};