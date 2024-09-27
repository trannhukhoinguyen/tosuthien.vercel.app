import React, { useEffect, useState } from "react";
import ModalContent from "@/helpers/ModalContent.tsx";

interface ModalProps {
  lang: string | undefined;
  content: string;
}
const Modal = ({ lang, content }: { lang: string | undefined, content: string | undefined }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle closing the modal by clicking outside
  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      closeModal();  // Close modal when clicking on the overlay
    }
  };

  return (
    <div>
      {/* Icon as a button */}
      <button
        onClick={openModal}
        style={{
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          fontSize: '12px',
        }}
        title={""}
      >
        📒
      </button>

      {/* Modal */}
      {isModalOpen && (
        <div style={modalStyles.overlay} onClick={handleOverlayClick}>
          <div style={modalStyles.modal}>
            <button onClick={closeModal} style={modalStyles.closeButton}>❌</button>
            <ModalContent lang={lang} content={content} />
          </div>
        </div>

      )}
    </div>
  );
};

// Modal styles
const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    backgroundColor: '#ffffff',
    padding: '12px',
    borderRadius: '8px',
    maxWidth: '800px',
    width: '100%',
    zIndex: '1001',
  },
  closeButton: {
    padding: 0,
    color: '#fff',
    float: 'right',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Modal;
