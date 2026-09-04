import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import "modern-normalize";
import { Roboto } from 'next/font/google';
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

const vercelLink = process.env.NEXT_PUBLIC_WEBSITE_VERCEL_URL ?? "https://08-zustand-eight-sage.vercel.app";

const roboto = Roboto({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-roboto',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL(vercelLink),
    title: "Note HUB",
    description: "The NotesClient for your notes",
    openGraph: {
        type: "website",
        title: "Note HUB",
        description: "A simple and efficient application for managing personal notes",
        url: "/",
        siteName: "NoteHub",
        images: [{
            url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
            width: 1200,
            height: 630,
            alt: "NoteHub - Personal Notes Management"
        }]
    },
    twitter: {
        card: "summary",
        title: "Note HUB",
        description: "A simple and efficient application for managing personal notes",
        images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"],
    }
};

export default function RootLayout({children, modal}: Readonly<{
    children: React.ReactNode;
    modal: React.ReactNode }>) {
    return (
        <html lang="en">
        <body className={`${roboto.variable} font-sans`}>
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
