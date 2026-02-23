import Header from "./TerminalComponents/Header"
import Links from "./TerminalComponents/Links"
import Skills from "./TerminalComponents/Skills"
import Education from "./TerminalComponents/Education"
import IdlePrompt from "./IdlePrompt"
import Experience from "./TerminalComponents/Experience"

export default function Terminal() {
    return (
        <div className="bg-neutral-950 p-6 text-green-400">
            <Header />
            <Links />
            <Skills />
            <Education />
            {/* <IdlePrompt /> */}

            <Experience />
        </div>
    )
}