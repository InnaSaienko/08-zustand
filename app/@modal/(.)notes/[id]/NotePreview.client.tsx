"use client"

import css from "./NotePreview.module.css";
import {Note} from "@/types/note";
import Modal from "@/components/Modal/Modal";

type NotePreviewClientProps = Note

const NotePreviewClient = ({tag, title, content, createdAt, updatedAt}: NotePreviewClientProps) => {

    return (
        <Modal>
            <div className={css.modalContent}>
                <div className={css.header}>
                    <h2 className={css.title}>{title}</h2>
                    <span className={css.tag}>{tag}</span>
                </div>
                <div className={css.content}>{content}</div>
                <div className={css.meta}>
                    <span className={css.date}>Created: {new Date(createdAt).toLocaleString()}</span>
                    <span className={css.date}>Updated: {new Date(updatedAt).toLocaleString()}</span>
                </div>
            </div>
        </Modal>

    )
}

export default NotePreviewClient;