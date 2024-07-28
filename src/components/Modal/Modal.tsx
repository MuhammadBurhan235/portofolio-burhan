import { ReactNode, MouseEvent } from "react";
import style from "./Modal.module.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function Modal({ show, onClose, children }: ModalProps) {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={style.modalOverlay} onClick={handleOverlayClick}>
      <div className={style.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={style.modalClose} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
