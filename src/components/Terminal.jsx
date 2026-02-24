import Header from "./TerminalComponents/Header"
import Links from "./TerminalComponents/Links"
import Skills from "./TerminalComponents/Skills"
import Education from "./TerminalComponents/Education"
import IdlePrompt from "./IdlePrompt"
import Experience from "./TerminalComponents/Experience"
import Projects from "./Projects"

import { useState } from "react";

export default function Terminal() {
    const [userInput, setUserInput] = useState("");

    // may be useful in the future
    const [history, setHistory] = useState([]);

    function handleUserInput(e) {
        if (e.key === 'Enter') {
            const output = commands[userInput.trim().toLowerCase()];
            setHistory([...history, { cmnd: userInput, output }]);
            setUserInput("");
        }
    }
    return (
        <div className="bg-neutral-950 p-6 text-green-400">
            <Header />
            <Links />
            <Skills />
            <Education />

            {/* change this to prompt, its going to be dynamic rather than idle. also, have it start withthe cmnd "help (press enter to run) as default text, and as long as the cmnd starts with "help", then call the help method. just check the first 4 chars ig"*/}
            {/* <IdlePrompt handleInput={handleUserInput}/> */}

            {true && <Experience />}
            {true && <Projects />}
        </div>
    )
}