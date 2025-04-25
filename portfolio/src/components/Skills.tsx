export default function Skills() {
    const skills = ["TypeScript","React","Next.js","Node.js","Tailwind","Python","MongoDB","PHP","AI/ML","C/C++","SQL","CI/CD Pipelines"];
    return (
      <div className="max-w-2xl mx-auto py-16 ">
        <h2 className="text-2xl font-semibold mb-6 border-b-2 border-[#985F99] pb-2">Skills</h2>
        <ul className="flex flex-wrap gap-4">
          {skills.map(skill => (
            <li
              key={skill}
              className="px-4 py-2 border rounded-full hover:scale-105 transition"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    );
  }