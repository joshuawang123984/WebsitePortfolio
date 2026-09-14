import Block from "../Block";
import { useState } from "react";

const jobs = [
    {
        company: "Government of Canada",
        role: "Software Developer Intern",
        location: "Toronto, On",
        date: "Sept 2026 – Present",
        bullets: [
            "Independently leading the migration of ICAM from legacy Drupal PHP to a TypeScript/Next.js SPA, designing authentication flows and an integration layer for restricted backend APIs."
        ],
    },
    {
        company: "Government of Canada",
        role: "Software Developer Intern",
        location: "Toronto, On",
        date: "May 2026 – Sept",
        bullets: [
            "Rewrote and expanded unit-test coverage for RSP-Core, diagnosing failures across application logic and Mapster object mappings between Dataverse entities and DTOs."
        ],
    },
    {
        company: "XK Innovate",
        role: "Software Developer Intern",
        location: "Remote",
        date: "June 2025 – September 2025",
        bullets: [
            "Engineered a Python data pipeline with Pandas and NumPy that processed 100,000+ accelerometer and gyroscope readings, reducing preprocessing time by 35% and enabling near real-time downstream analysis.",
        ],
    },
];

function ExperienceCard({ job }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="border border-green-800 p-3 flex flex-col gap-2">
            <div className="flex justify-between items-center">
                <span className="text-white font-bold font-mono">{job.company}</span>
                <div className="flex gap-2 items-center">
                    <span className="text-green-400 font-mono text-sm">{job.date}</span>
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="text-xs font-mono px-2 py-1 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors"
                    >
                        {expanded ? 'hide' : 'info'}
                    </button>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <span className="text-green-300 font-mono text-sm italic">{job.role}</span>
                <span className="text-green-400 font-mono text-sm">{job.location}</span>
            </div>

            {expanded && (
                <ul className="mt-2 flex flex-col gap-1">
                    {job.bullets.map((bullet, i) => (
                        <li key={i} className="text-green-400 font-mono text-sm flex gap-2">
                            <span className="text-green-500 mt-0.5">▸</span>
                            <span>{bullet}</span>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default function Experience() {
    return (
        <Block cmnd="cat experience">
            <div className="flex flex-col gap-4">
                {jobs.map((job) => (
                    <ExperienceCard key={job.company} job={job} />
                ))}
            </div>
        </Block>
    );
}