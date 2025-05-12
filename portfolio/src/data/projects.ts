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
        thumbnail:"/bugtracker2.png",
        short:"Small scale website of a bug tracker, soon to be full stack website.",
        description:"This app lets you track bugs in real‐time, with live updates, user auth, and a sleek bootstrap design. Built to streamline work processes and keep developers on the same page.",
        images:["/bugtracker.png", "/bugtracker2.png"],
        repo:"https://github.com/GucciRemyBoi/bugtrackerprototype?tab=readme-ov-file",
        stack:["Flask", "HTML & Bootstrap", "JSON"],
    },
    {
        slug: "second-serving",
        title: "Project: Second Serving",
        thumbnail:"/secondserving.png",
        short: "Award winning hackathon project, FARM stack application for donating food to those in needs.",
        description: "1st Place hackathon project, a food-sharing platform powered by AI that connects individuals and restaurants with surplus meals to families in need and shelters.",
        images: ["/secondservingDB.png", "/secondservinghome.png"],
        repo: "https://github.com/GucciRemyBoi/secondserving",
        stack: ["FastAPI", "Flask", "React", "MongoDB", "Render"],
    },
    {
        slug: "honey-pot",
        title: "Honey Pot with Flask & Machine Learning Comparison",
        thumbnail:"/pythonLogo.png",
        short: "Researching the effectiveness of logistic regression and random forest classifiers for honey pot detection.",
        description: "Low interaction honeypot made to study the effectiveness of logistic regression and random forest classifiers. Soon to be a honeypot for detecting malicious activity on a network.",
        images: ["/model_comparison_chart.png", "/rf_confusion_matrix.png"],
        repo: "https://github.com/GucciRemyBoi/honeypotproject",
        stack: ["Python", "Flask", "Machine Learning", "Scikit-learn", "Pandas", "Shell Scripting"],
    },
    // More Projects Added Here
];