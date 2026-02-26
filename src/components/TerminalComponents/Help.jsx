export default function Help({ cmnds }) {
    return (
        <div className="flex flex-col gap-1 font-mono text-sm mt-2">
            <span className="text-white font-bold mb-1">available commands:</span>

            {Object.entries(cmnds).map(([cmnd, { description }]) => (
                <span key={cmnd}>
                    <span className="text-green-300">{cmnd}</span> — {description}
                </span>
            ))}
        </div>
    )
}