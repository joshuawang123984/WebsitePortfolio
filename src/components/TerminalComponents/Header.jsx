import Block from "../Block"
import Cursor from "../Cursor"

export default function Header() {
    return (
        <Block cmnd="whoami">
            <p className="text-green-200 text-xl font-bold tracking-widest">
                Joshua Wang<Cursor />
            </p>
            <p className="text-green-600 text-sm mt-1">Software Developer · CS @ Carleton</p>
        </Block>
    );
}