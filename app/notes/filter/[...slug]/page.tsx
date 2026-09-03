import {dehydrate, HydrationBoundary, QueryClient} from "@tanstack/react-query";
import {fetchNotes} from "@/lib/api";
import NotesClient from "@/app/notes/filter/[...slug]/Notes.client";
import notFound from "@/app/not-found";
import {NoteTag} from "@/types/note";


interface NotePageParams {
    params: Promise<{ slug: string[] }>
}

const PER_PAGE = 12;

export const dynamic = 'force-dynamic';

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