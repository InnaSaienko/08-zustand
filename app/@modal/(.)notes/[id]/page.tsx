import { fetchNoteById } from '@/lib/api';
import NotePreviewClient from "@/app/@modal/(.)notes/[id]/NotePreview.client";

interface NoteModalPageProps {
    params: Promise<{ id: string }>;
}

const NotePreview = async ({ params }: NoteModalPageProps)=> {
    const { id } = await params;
    const note = await fetchNoteById(id);

    return (
        <NotePreviewClient {...note}/>
    );
}

export default NotePreview;