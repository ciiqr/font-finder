import { TrashIcon } from "@radix-ui/react-icons";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
    const [text, setText] = useState("Aa");
    const fonts = [
        { id: "nope" },
        { id: "yep" },
        { id: "yep-1" },
        { id: "yep-2" },
        { id: "yep-3" },
        { id: "yep-4" },
        { id: "yep-5" },
        { id: "yep-6" },
        { id: "yep-7" },
        { id: "yep-8" },
        { id: "yep-9" },
        { id: "yep-10" },
    ];

    return (
        <>
            <Head>
                <title>font-finder</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="flex flex-col p-1">
                <input
                    className="border-2 border-slate-500 bg-slate-50 p-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="flex flex-row flex-wrap justify-center gap-1 py-1">
                    {fonts.length > 0 ? (
                        fonts.map((font) => (
                            <div
                                key={font.id}
                                className="relative flex aspect-square w-32 items-center justify-center overflow-hidden border-2 border-slate-500"
                                title={font.id}
                            >
                                <span
                                    key={font.id}
                                    className=" text-center text-2xl"
                                >
                                    {text}
                                </span>
                                <button
                                    className="absolute bottom-1 right-1 rounded-sm bg-red-500 p-1 text-white"
                                    type="button"
                                    onClick={() => {
                                        console.log("delete", font.id);
                                    }}
                                >
                                    <TrashIcon />
                                </button>
                            </div>
                        ))
                    ) : (
                        <p className="text-2xl">no guys?</p>
                    )}
                </div>
            </main>
        </>
    );
}
