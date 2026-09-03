import type {Metadata} from "next";
import "./globals.css";
import "modern-normalize";
import "./globals.css";
import React from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import TanStackProvider from "@/components/TanStackProvider/TanStackProvider";

export const metadata: Metadata = {
    title: "Note HUB",
    description: "The NotesClient for your notes",
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
