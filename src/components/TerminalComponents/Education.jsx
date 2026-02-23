import Block from "../Block"

export default function Education() {
    return (
        <Block cmnd="cat education.txt">
            <div className="text-sm space-y-1">
                <p className="text-green-200 font-semibold">Carleton University</p>
                <p className="text-green-500">BSc Honours Computer Science</p>
                <p className="text-green-500">Minor in Mathematics &amp; Statistics</p>
                <p className="text-green-700 mt-1">2023 – 2028 &nbsp;·&nbsp; GPA: 3.78</p>
            </div>
        </Block>
    );
}