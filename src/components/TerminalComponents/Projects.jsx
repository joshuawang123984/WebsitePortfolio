import Block from "../Block";
import PROJECTS from "../../assets/Projects.json"

export default function Projects() {
    return (
        <Block cmnd="ls projects/">
            <div className="flex flex-col gap-6">
                {PROJECTS.map((project) => (
                    <div key={project.name} className="flex flex-col gap-1">
                        <div className="flex justify-between items-center">
                            <span className="text-white font-bold font-mono">{project.name}</span>
                            <button
                                onClick={() => window.open(project.github, '_blank')}
                                className="text-xs font-mono px-2 py-1 border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition-colors"
                            >
                                view on github
                            </button>
                        </div>
                        <p className="text-green-400 font-mono text-sm">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                            {project.tech.map((t) => (
                                <span key={t} className="text-xs font-mono px-2 py-0.5 border border-green-800 text-green-500">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Block>
    );
}