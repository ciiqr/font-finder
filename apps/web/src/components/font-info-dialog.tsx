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
    Cross2Icon,
    ExternalLinkIcon,
    InfoCircledIcon,
} from "@radix-ui/react-icons";
import { camelCase } from "moderndash";
import Link from "next/link";
import type { Font } from "~/fonts";

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
                            <DialogClose>
                                <Cross2Icon />
                            </DialogClose>
                        </div>
                        <div className="flex flex-grow flex-col justify-between">
                            {/* TODO: add other examples */}
                            {/* TODO: syntax highlighting, copy button */}
                            <pre className="rounded-sm bg-slate-100 text-xs">
                                {`import { ${font.name.replaceAll(
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
}
`}
                            </pre>
                            <div className="flex flex-row-reverse">
                                <Link
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
