export default function TitleBar() {
    return (
        <div className="bg-neutral-900 border-b border-green-900 px-4 py-2 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-yellow-400 opacity-80" />
            <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
            <span className="ml-3 text-green-800 text-xs">joshua@portfolio — zsh</span>
        </div>
    );
}