import { ReactNode, MouseEvent } from "react";
import style from "./Modal.module.css";

interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: ReactNode;
}

export function ModalTriDi({ show, onClose, children }: ModalProps) {
  if (!show) {
    return null;
  }

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onClose();
  };

  return (
    <div className={style.modalOverlay3d} onClick={handleOverlayClick}>
      <div
        className={style.modalContent3d}
        onClick={(e) => e.stopPropagation()}
      >
        <button className={style.modalClose3d} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
