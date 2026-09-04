import { QueryClient, HydrationBoundary, dehydrate } from '@tanstack/react-query';
import { fetchNoteById } from '@/lib/api';
import NoteDetailsClient from './NoteDetails.client';
import type {Metadata} from "next";

interface NoteDetailsPageProps {
    params: Promise<{ id: string }>;
}

export async function generateMetadata({params}: NoteDetailsPageProps): Promise<Metadata> {
    const { id } = await params;
    const note = await fetchNoteById(id);
    
    const title = note.title;
    const description = note.content.substring(0, 160) + (note.content.length > 160 ? "..." : "");

    return {
        title,
        description,
        openGraph: {
            title,
            description,
            url: `/notes/${id}`,
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

export default async function NoteDetailsPage({ params }: NoteDetailsPageProps) {
    const { id } = await params;
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery({
        queryKey: ['note', id],
        queryFn: () => fetchNoteById(id),
    });

    return (
        <HydrationBoundary state={dehydrate(queryClient)}>
            <NoteDetailsClient />
        </HydrationBoundary>
    );
}