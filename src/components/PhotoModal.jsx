import { useEffect, useRef } from "react";
import vanessa from "../assets/images/vanessa.jfif";

/**
 * Photo lightbox built on the native <dialog> element, which provides
 * Esc-to-close and focus trapping for free.
 */
const PhotoModal = ({ open, onClose }) => {
  const dialogRef = useRef(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  // A click whose target is the dialog itself is a click on the backdrop.
  const handleBackdropClick = (event) => {
    if (event.target === dialogRef.current) onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={handleBackdropClick}
      aria-label="Vanessa photo"
      className="max-w-none bg-transparent p-0 backdrop:bg-black/70"
    >
      <figure className="relative m-0">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute -right-3 -top-3 flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl leading-none text-gtext shadow-md hover:bg-ghover"
        >
          ×
        </button>
        <img
          src={vanessa}
          alt="Vanessa"
          className="max-h-[80vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
        />
      </figure>
    </dialog>
  );
};

export default PhotoModal;
