import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogOverlay,
    DialogPortal,
    DialogTitle,
    DialogTrigger,
} from "@radix-ui/react-dialog";
import {
    CopyIcon,
    Cross2Icon,
    ExternalLinkIcon,
    InfoCircledIcon,
} from "@radix-ui/react-icons";
import { camelCase } from "moderndash";
import Link from "next/link";
import type { PrismTheme } from "prism-react-renderer";
import { Highlight, themes } from "prism-react-renderer";
import type { Font } from "~/fonts";

interface CodeBlockProps {
    code: string;
    language: string;
    theme: PrismTheme;
    lineNumbers?: boolean;
    copyButton?: boolean;
}

function CodeBlock({
    code,
    language,
    theme,
    lineNumbers = false,
    copyButton = false,
}: CodeBlockProps) {
    return (
        <div className="relative">
            {Boolean(copyButton) && (
                <button
                    className="absolute right-1 top-1 rounded-sm p-1 text-slate-200"
                    type="button"
                    onClick={() => {
                        // TODO: add a toast
                        void navigator.clipboard.writeText(code);
                    }}
                >
                    <CopyIcon />
                </button>
            )}
            <Highlight theme={theme} code={code} language={language}>
                {({ style, tokens, getLineProps, getTokenProps }) => (
                    <pre className="rounded-sm text-xs" style={style}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {Boolean(lineNumbers) && (
                                    <span className="inline-block w-4">
                                        {i + 1}
                                    </span>
                                )}
                                {line.map((token, key) => (
                                    <span
                                        key={key}
                                        {...getTokenProps({
                                            token,
                                        })}
                                    />
                                ))}
                            </div>
                        ))}
                    </pre>
                )}
            </Highlight>
        </div>
    );
}

interface Props {
    font: Font;
}

export function FontInfoDialog({ font }: Props) {
    return (
        <Dialog>
            <DialogTrigger className="absolute bottom-1 left-1 rounded-sm p-1">
                <InfoCircledIcon />
            </DialogTrigger>
            <DialogPortal>
                <DialogOverlay className="fixed inset-0 bg-slate-700 opacity-50" />
                <DialogContent className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-slate-200 p-4">
                    <div className="flex h-full flex-col justify-between">
                        <div className="flex flex-row justify-between">
                            <DialogTitle>{font.name}</DialogTitle>
                            <DialogClose className="p-1">
                                <Cross2Icon />
                            </DialogClose>
                        </div>
                        <div className="flex flex-grow flex-col justify-between">
                            {/* TODO: add other examples */}
                            <CodeBlock
                                language="tsx"
                                theme={themes.dracula}
                                lineNumbers
                                copyButton
                                code={`import { ${font.name.replaceAll(
                                    " ",
                                    "_",
                                )} } from "next/font/google";

// NOTE: include other subsets as needed
const ${camelCase(font.name)} = ${font.name.replaceAll(
                                    " ",
                                    "_",
                                )}({ subsets: ["latin"] });

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={${camelCase(font.name)}.className}>
      <Component {...pageProps} />
    </main>
  );
}`}
                            />
                            <div className="flex flex-row-reverse">
                                <Link
                                    className="p-1"
                                    target="_blank"
                                    href={`https://fonts.google.com/specimen/${encodeURIComponent(
                                        font.name,
                                    )}`}
                                >
                                    <ExternalLinkIcon />
                                </Link>
                            </div>
                        </div>
                    </div>
                </DialogContent>
            </DialogPortal>
        </Dialog>
    );
}
