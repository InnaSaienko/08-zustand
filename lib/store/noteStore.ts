import { create } from 'zustand';
import type { NoteFormData } from '@/types/note';

interface NoteStore {
    draft: NoteFormData;
    setDraft: (draft: NoteFormData) => void;
    clearDraft: () => void;
    updateDraft: (partialDraft: Partial<NoteFormData>) => void;
}

const initialDraft: NoteFormData = {
    title: '',
    content: '',
    tag: 'Todo',
};

export const useNoteStore = create<NoteStore>((set) => ({
    draft: initialDraft,
    
    setDraft: (draft: NoteFormData) => {
        set({ draft });
    },
    
    clearDraft: () => {
        set({ draft: initialDraft });
    },
    
    updateDraft: (partialDraft: Partial<NoteFormData>) => {
        set((state) => ({
            draft: { ...state.draft, ...partialDraft }
        }));
    }
}));