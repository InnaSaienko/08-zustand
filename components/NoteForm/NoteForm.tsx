'use client'

import css from "./NoteForm.module.css";
import {createNote} from "@/lib/api";
import {useMutation, useQueryClient} from "@tanstack/react-query";
import {useRouter} from "next/navigation";
import {NoteTags} from "@/types/note";
import type { NewNote, NoteTag } from "@/types/note";
import {useNoteStore} from "@/lib/store/noteStore";

const NoteForm = () => {
    const router = useRouter();
    const queryClient = useQueryClient();
    const {draft, setDraft, clearDraft} = useNoteStore();

    const mutation = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries({queryKey: ["notes"]});
            clearDraft();
            handleCancel();
        },
    });

    const handleSubmit = (formData: FormData) => {
        const values: NewNote = {
            title: formData.get("title") as string,
            content: formData.get("content") as string,
            tag: formData.get("tag") as NoteTag,
        };
        mutation.mutate(values);
    };

    const handleChange = () => {
    };

    const handleCancel = () => router.push("/notes/filter/all");

    return (
        <form className={css.form} action={handleSubmit}>
            <div className={css.formGroup}>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    className={css.input}
                    type="text"
                    name="title"
                    defaultValue={draft.title}
                    onChange={handleChange}
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="content">Content</label>
                <textarea
                    id="content"
                    className={css.textarea}
                    name="content"
                    rows={8}
                    defaultValue={draft.content}
                    onChange={handleChange}
                    maxLength={400}
                />
            </div>

            <div className={css.formGroup}>
                <label htmlFor="tag">Tag</label>
                <select
                    id="tag"
                    className={css.select}
                    name="tag"
                    defaultValue={draft.tag}
                    onChange={handleChange}
                >
                    {NoteTags.map(tag => (
                        <option value={tag} key={tag}>{tag}</option>
                    ))}
                </select>
            </div>

            <div className={css.actions}>
                <button type="button" className={css.cancelButton} onClick={handleCancel}>
                    Cancel
                </button>
                <button
                    type="submit"
                    className={css.submitButton}
                    disabled={mutation.isPending}
                >
                    Create note
                </button>
            </div>
        </form>
    )
};

export default NoteForm;
