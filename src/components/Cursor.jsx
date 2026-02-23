import { useState, useEffect } from 'react';

export default function Cursor() {
    const [on, setOn] = useState(true);

    useEffect(() => {
        const t = setInterval(() => setOn((v) => !v), 530);
        return () => clearInterval(t);
    },
        []);

    return (
        <span
            className="inline-block w-2 h-4 bg-green-400 ml-1 align-middle transition-opacity duration-100"
            style={{ opacity: on ? 1 : 0 }}
        />
    );
}