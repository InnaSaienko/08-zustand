import type {ReactNode, MouseEvent} from "react";
import {createPortal} from "react-dom";
import css from "./Modal.module.css";
import {useEffect} from "react";
import {useRouter} from "next/navigation";


interface ModalProps {
    children: ReactNode;
    onClose?: () => void;
}

const Modal = ({children, onClose}: ModalProps) => {
    const router = useRouter();

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                if (onClose) {
                    onClose();
                    return;
                }
                router.back();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        document.body.style.overflow = 'hidden';

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [onClose]);

    const handleClose = (event: MouseEvent<HTMLElement>) => {
        if (event.target === event.currentTarget) {
            if (onClose) {
                onClose();
                return;
            }
            router.back();
        }
    };
    return createPortal(
        <div className={css.backdrop} role="dialog" aria-modal="true" onClick={handleClose}>
            <div className={css.modal}>
                {children}
                <button className={css.closeButton} onClick={handleClose}>×</button>
            </div>
        </div>,
        document.body
    );
};

export default Modal;
