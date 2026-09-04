import type {Metadata} from "next";
import "./globals.css";
import "modern-normalize";
import "./globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const vercelLink = process.env.NEXT_PUBLIC_WEBSITE_VERCEL_URL ?? "https://08-zustand-eight-sage.vercel.app";

export const metadata: Metadata = {
    metadataBase: new URL(vercelLink),
    title: "Note HUB",
    description: "The NotesClient for your notes",
    openGraph: {
        type: "website",
        title: "Note HUB",
        description: "",
        url: "/",
        siteName: "NoteHub",
        images: [{
            url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
            width: "100%",
            height: "auto",
            alt: "NoteHub",
        }]
    },
    twitter: {
        card: "summary",
        title: "Note HUB",
        description: "",
        images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    }
};

export default function RootLayout({children, modal}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode }>) {
    return (
        <html lang="en">
        <body>
        <TanStackProvider>
            <Header/>
            <div className="flex flex-1 flex-col">{children}</div>
            {modal}
            <Footer/>
        </TanStackProvider>
        </body>
        </html>
    );
}
