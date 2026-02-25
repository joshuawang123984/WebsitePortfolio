import Block from "../Block"

export default function Header() {
    return (
        <Block cmnd="whoami">
            <p className="text-green-200 text-xl font-bold tracking-widest">
                Joshua Wang
            </p>
            <p className="text-green-600 text-sm mt-1">Software Developer · CS @ Carleton</p>
            <p className="py-4">Hi there! I'm Joshua Wang, a Software Developer attending Carleton University. I focus on ML systems, full-stack applications, and data pipelines.</p>
        </Block>
    );
}