import Header from "./TerminalComponents/Header"
import Links from "./TerminalComponents/Links"
import Skills from "./TerminalComponents/Skills"
import Education from "./TerminalComponents/Education"
import Experience from "./TerminalComponents/Experience"
import Projects from "./TerminalComponents/Projects"
import Help from "./TerminalComponents/Help"

import { useState } from "react";

const commands = {
    "show experience": <Experience />,
    "show projects": <Projects />,
    "help": <Help />,
    "clear": null
}

export default function Terminal() {
    const [userInput, setUserInput] = useState("");
    const [history, setHistory] = useState([]);
    const [shown, setShown] = useState(new Set())

    function handleUserInput(e) {
        if (e.key !== 'Enter') return

        const cmnd = userInput.trim().toLowerCase()
        setUserInput('')

        if (cmnd === 'clear') {
            setShown(new Set())
            setHistory([])
            return
        }

        //check if command already exists in history state
        if (shown.has(cmnd)) return

        //error line
        const output = commands[cmnd] ?? (
            <span className="text-red-400 font-mono text-sm">
                command not found: {cmnd} — type 'help' for available commands
            </span>
        )

        setHistory([...history, { cmnd: cmnd, output }])
        setShown(new Set([...shown, cmnd]))
    }

    return (
        <div className="bg-neutral-950 p-6 text-green-400">
            <Header />
            <Links />
            <Skills />
            <Education />

            {history.map((item, i) => (
                <div key={i}>
                    <div className="font-mono text-green-500">joshua@portfolio :~$ {item.cmnd}</div>
                    {item.output}
                </div>
            ))}

            <div className="flex gap-2 font-mono">
                <span className="text-green-500">joshua@portfolio :~$</span>
                <input
                    className="bg-transparent outline-none text-green-400 flex-1 placeholder-gray-600"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    onKeyDown={handleUserInput}
                    placeholder="help"
                    autoFocus
                />
            </div>
        </div>
    )
}