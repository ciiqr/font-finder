import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html className="h-full">
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="h-full bg-slate-200 text-slate-950">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
