import Head from "next/head";

export default function Home() {
    const fonts = [{ id: "nope" }];

    return (
        <>
            <Head>
                <title>font-finder</title>
                <link rel="icon" href="/favicon.png" />
            </Head>
            <main className="container mx-auto flex flex-col items-center p-4">
                {fonts.length > 0 ? (
                    fonts.map((font) => (
                        <p key={font.id} className="text-2xl">
                            {font.id}
                        </p>
                    ))
                ) : (
                    <p className="text-2xl">no guys?</p>
                )}
            </main>
        </>
    );
}
