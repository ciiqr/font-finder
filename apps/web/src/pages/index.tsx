import { TrashIcon } from "@radix-ui/react-icons";
import localFont from "next/font/local";
import Head from "next/head";
import { useState } from "react";
import { fonts as defaultFonts } from "~/fonts";

const adobeNotDefFont = localFont({
    src: "../../public/Adobe-NotDef-Regular.ttf",
});

export default function Home() {
    // TODO: maybe have pre defined character sets you can cycle through (Aa, Bb, ..., +-=, '", fl, etc)
    const [text, setText] = useState(
        "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789+-=~`@,.,@",
    );
    // TODO: could store fonts in url...
    const [fonts, setFonts] = useState(defaultFonts);

    return (
        <>
            <Head>
                <title>font-finder</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="flex flex-col p-1">
                <input
                    className="rounded-sm border-2 border-slate-500 bg-slate-50 p-2"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <div className="flex flex-row flex-wrap justify-center gap-1 py-1">
                    {fonts.length > 0 ? (
                        fonts.map((font) => (
                            <div
                                key={font.name}
                                className="relative flex min-h-[4rem] min-w-[4rem] justify-center overflow-hidden rounded-sm border-2 border-slate-500"
                                title={font.name}
                            >
                                <span
                                    className="text-center text-2xl"
                                    style={{
                                        overflowWrap: "anywhere",
                                        fontFamily: `${font.css.style.fontFamily}, ${adobeNotDefFont.style.fontFamily}`,
                                    }}
                                >
                                    {text}
                                </span>
                                <button
                                    className="absolute bottom-1 right-1 rounded-sm bg-red-500 p-1 text-white"
                                    type="button"
                                    onClick={() =>
                                        setFonts(
                                            fonts.filter(
                                                (f) => f.name !== font.name,
                                            ),
                                        )
                                    }
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
