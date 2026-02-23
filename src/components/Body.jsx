export default function Body() {
    return (
        <>
            <Block cmd="whoami">
                <p className="text-green-200 text-xl font-bold tracking-widest">
                    Joshua Wang<Cursor />
                </p>
                <p className="text-green-600 text-sm mt-1">Software Developer · CS @ Carleton</p>
            </Block>


            <Block cmd="cat links.txt">
                <div className="flex gap-3">
                    <a
                        href="https://www.linkedin.com/in/joshuawanggg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded border border-neutral-700 text-blue-400 hover:border-blue-500 hover:bg-neutral-800 transition-colors"
                    >
                        <LinkedInIcon />
                        <span className="text-sm">LinkedIn</span>
                    </a>
                    <a
                        href="https://github.com/joshuawang9999"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-3 py-2 rounded border border-neutral-700 text-gray-300 hover:border-gray-400 hover:bg-neutral-800 transition-colors"
                    >
                        <GitHubIcon />
                        <span className="text-sm">GitHub</span>
                    </a>
                </div>
            </Block>
        </>
    );
}