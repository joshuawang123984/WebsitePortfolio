import Block from "../Block";
import { useState } from "react";

const jobs = [
    {
        company: "XK Innovate",
        role: "Software Developer Intern",
        location: "Remote",
        date: "June 2025 – September 2025",
        bullets: [
            "Engineered a Python data pipeline with Pandas and NumPy that processed 100,000+ accelerometer and gyroscope readings, reducing preprocessing time by 35% and enabling near real-time downstream analysis.",
            "Expanded a raw acoustic dataset for water-pipe anomaly detection using sliding-window segmentation, signal transformations, and noise augmentation, increasing training data volume by 3× and improving model detection accuracy by up to 12%.",
            "Built a responsive React frontend styled with Tailwind CSS to visualize accelerometer and gyroscope data, implementing hook-based state management to support real-time motion analysis across x, y, z axes.",
        ],
    },
    {
        company: "Bell Canada",
        role: "Software Developer, Solutions Team – BBM",
        location: "Toronto, ON",
        date: "May 2024 – September 2024",
        bullets: [
            "Supported the Pathway Python web application that automated 5,000+ monthly user email notifications and work-process tracking for internal Bell systems, reducing manual notification effort by 60%.",
            "Collaborated with a cross-functional team of 8 developers and QA analysts to optimize application performance and workflow efficiency, contributing to a reduction in average processing latency.",
            "Developed and maintained Python automation workflows for email generation and distribution, integrating REST APIs and implementing CI/CD pipelines with Git and Docker, accelerating email delivery time by 20% and reducing production errors by 15%.",
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
        <Block cmnd="cat experience.txt">
            <div className="flex flex-col gap-4">
                {jobs.map((job) => (
                    <ExperienceCard key={job.company} job={job} />
                ))}
            </div>
        </Block>
    );
}