const timeline = [
    {year: "2000", event: "Born in Denver, Colorado."},
    {year: "2019", event: "Graduated with Honors from DSST Green Valley Ranch."},
    {year: "2024", event: "Began Working as Store Associate at Costco Wholesale."},
    {year: "2025", event: "Completed Bachelor's in Computer Science from University of Colorado Denver."}
]

export default function About(){
    return (
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold border-b-2 border-[#985F99] pb-2">
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