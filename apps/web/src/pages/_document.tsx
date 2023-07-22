import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="text-gray-200">
                <Background />
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}

function Background() {
    return (
        <div className="fixed -z-10 h-full w-full bg-gradient-to-t from-slate-800 to-slate-900">
            <div
                className="h-full w-full [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
                style={{
                    backgroundSize: "40px 40px",
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,.02) 1px, transparent 1px)
                    `,
                }}
            />
            {/* <div
                className="fixed -left-1/2 -top-1/2 -rotate-12"
                style={{
                    width: "200%",
                    height: "200%",
                    backgroundSize: "314px 314px",
                    backgroundImage: `
                        linear-gradient(to right, rgba(255,255,255,.02) 1px, transparent 1px),
                        linear-gradient(to bottom, rgba(255,255,255,.02) 1px, transparent 1px)
                    `,
                }}
            /> */}
        </div>
    );
}
