export default function Skills() {
    <Block cmd="ls skills/">
        <div className="flex flex-wrap gap-4">
            {SKILLS.map((s) => (
                <SkillBadge key={s.name} name={s.name} icon={s.icon} />
            ))}
        </div>
    </Block>
}