import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {fetchNotes} from "@/lib/api";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import notFound from "@/app/not-found";
import {NoteTag} from "@/types/note";
import type { Metadata } from "next"


interface NotePageParams {
    params: Promise<{ slug: string[] }>
}

const PER_PAGE = 12;

export const dynamic = 'force-dynamic';

export async function generateMetadata({params}: NotePageParams): Promise<Metadata> {
    const {slug} = await params;
    const tag = slug?.[0] === "all" ? null : (slug?.[0] as NoteTag);
    
    const tagLabel = tag || "all";
    const title = tag ? `Notes - ${tag}` : "All Notes";
    const description = `Browse ${tag ? tag : "all"} notes in NoteHub`;

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `/notes/filter/${tagLabel}`,
            images: [
                {
                    url: "https://ac.goit.global/fullstack/react/notehub-og-meta.jpg",
                    width: 1200,
                    height: 630,
                    alt: `NoteHub - ${title}`,
                }
            ]
        },
        twitter: {
            card: "summary",
            title,
            description,
            images: ["https://ac.goit.global/fullstack/react/notehub-og-meta.jpg"]
        }
    }
}

export default async function NotesPage({params}: NotePageParams) {
    const {slug} = await params;
    const queryClient = new QueryClient();

    if (!slug || slug.length !== 1) {
        notFound();
    }

    const tag = slug[0] === "all" ? null : (slug[0] as NoteTag);

    await queryClient.prefetchQuery({
        queryKey: ["notes", 1, "", tag],
        queryFn: () => fetchNotes({page: 1, perPage: PER_PAGE, search: "", tag}),
    })

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NotesClient tag={tag}/>
        </HydrationBoundary>
    )
}