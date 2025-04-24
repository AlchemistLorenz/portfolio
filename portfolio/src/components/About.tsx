const timeline = [
    {year: "2019", event: "Graduated HS DSST GVR"},
    {year: "2022", event: "blank for now"},
    {year: "2024", event: "blank for now also"}
]

export default function About(){
    return (
        <div className="max-w-3xl mx-auto py-16">
          <h2 className="text-2xl font-semibold border-b-2 border-gray-700 pb-2">
            Bio
          </h2>
          <dl className="mt-4 space-y-4">
            {timeline.map(({ year, event }) => (
              <div key={year} className="flex">
                <dt className="w-24 font-mono text-gray-400">{year}</dt>
                <dd>{event}</dd>
              </div>
            ))}
          </dl>
        </div>
      );
}