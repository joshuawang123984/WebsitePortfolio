export default function Prompt({ cmnd }) {
    return (
        <div className="flex items-center gap-1 text-sm font-mono mb-3">
          <span className="text-green-500">joshua</span>
          <span className="text-gray-500">@</span>
          <span className="text-green-400">portfolio</span>
          <span className="text-gray-600">:~$</span>
          <span className="text-white ml-1">{cmnd}</span>
        </div>
      );
}