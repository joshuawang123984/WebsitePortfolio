import Prompt from "./Prompt";

export default function Block({ cmnd, children }) {
    return (
        <>
            <div className="mb-8">
                <Prompt cmnd={cmnd} />
                <div className="pl-4 border-l border-green-900">{children}</div>
            </div>
        </>
    );
}