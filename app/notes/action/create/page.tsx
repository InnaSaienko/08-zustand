import css from "./CreateNote.module.css"
import NoteForm from "@/components/NoteForm/NoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Create New Note",
    description: "Create a new note in NoteHub to organize your thoughts and ideas",
    openGraph: {
        title: "Create New Note",
        description: "Create a new note in NoteHub to organize your thoughts and ideas",
        url: "/notes/action/create",
        images: [
            {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                width: 1200,
                height: 630,
                alt: "NoteHub - Create New Note",
            }
        ]
    },
    twitter: {
        card: "summary",
        title: "Create New Note",
        description: "Create a new note in NoteHub to organize your thoughts and ideas",
        images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"]
    }
};

export default function CreateNote() {
    return (
        <main className={css.main}>
            <div className={css.container}>
                <h1 className={css.title}>Create note</h1>
                <NoteForm />
            </div>
        </main>

    );
}