import "./globals.css";

declare global {
    namespace JSX {
        interface IntrinsicElements {
            marquee: React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement>,
                HTMLElement
            >;
        }
    }
}

export const metadata = {
    title: "Heru Inspector",
    description: "",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className=" antialiased tracking-tighter">{children}</body>
        </html>
    );
}
