import Block from "../Block"
import SkillBadge from "./SkillBadge";
import SKILLS from "../../assets/Logos.json"

export default function Skills() {
    return (
        <Block cmnd="ls skills/">
            <div className="flex flex-wrap gap-4">
                {SKILLS.map((s) => (
                    <SkillBadge key={s.name} name={s.name} icon={s.icon} />
                ))}
            </div>
        </Block>
    );
}