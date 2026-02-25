export default function Help() {
    return (
        <div className="flex flex-col gap-1 font-mono text-sm mt-2">
            <span className="text-white font-bold mb-1">available commands:</span>
            <span><span className="text-green-300">show experience</span> — display work experience</span>
            <span><span className="text-green-300">show projects</span>  — display projects</span>
            <span><span className="text-green-300">clear</span>          — clear the terminal</span>
            <span><span className="text-green-300">help</span>           — show available commands</span>
        </div>
    )
}