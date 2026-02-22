export default function SkillBadge({name, icon}) {
    return (
        <div className="flex flex-col items-center gap-1 group cursor-default">
          <div className="w-12 h-12 rounded-md bg-neutral-800 border border-neutral-700 flex items-center justify-center group-hover:border-green-500 transition-colors">
            <img src={icon} alt={name} className="w-7 h-7" />
          </div>
          <span className="text-xs font-mono text-green-700 group-hover:text-green-400 transition-colors">
            {name}
          </span>
        </div>
      );
}