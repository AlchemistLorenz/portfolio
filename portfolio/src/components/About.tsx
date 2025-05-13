const timeline = [
    { year: "2000", event: "Born in Denver, Colorado." },
    { year: "2014", event: "Made my First Roblox Game, 'The Escape'." },
    { year: "2019", event: "Began my bachelor's degree in Computer Science at University of Colorado Denver" },
    { year: "2021", event: "Made my first project in Python, a CL Bug Tracker." },
    { year: "2025", event: "Create Second Serving, a web app for food donation for a Hackathon and won 1st place." },
    { year: "", event: "Graduated with a Bachelor's in Computer Science."}
];

export default function About(){
    return (
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold border-b-2 border-[#985F99] pb-2">
            Bio
          </h2>
          <dl className="mt-4 space-y-4">
            {timeline.map(({ year, event }, index) => (
              <div key={index} className="flex items-start space-x-4">
                <dt className="w-24 font-mono text-off-white text-right pr-2">{year || "-"}</dt>
                <dd className="text-left">{event}</dd>
              </div>
            ))}
          </dl>
        </div>
      );
}