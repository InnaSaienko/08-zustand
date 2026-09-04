import css from "./Home.module.css"
import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "404 - Page Not Found",
    description: "Sorry, the page you are looking for does not exist in NoteHub.",
    openGraph: {
        type: "website",
        title: "404 - Page Not Found",
        description: "Sorry, the page you are looking for does not exist in NoteHub.",
        url: "/404",
        images: [
            {
                url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                width: 1200,
                height: 630,
                alt: "NoteHub - Page Not Found",
            }
        ]
    },
    twitter: {
        card: "summary",
        title: "404 - Page Not Found",
        description: "Sorry, the page you are looking for does not exist in NoteHub.",
        images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"]
    }
}

const NotFound = () => {
    return (
        <div className={css.container}>
            <h1 className={css.title}>404 - Page not found</h1>
            <p className={css.description}>Sorry, the page you are looking for does not exist.</p>
        </div>
    )
};


export default NotFound;