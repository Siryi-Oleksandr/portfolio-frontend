import React, { useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import { CloseBtn, ModalContainer, Overlay } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Modal = ({ children, onClose }) => {
  const handleKeyPress = useCallback(
    evt => {
      if (evt.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const handleOverlayClick = useCallback(
    evt => {
      if (evt.target === evt.currentTarget) {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return createPortal(
    <Overlay onClick={handleOverlayClick}>
      <ModalContainer>
        <CloseBtn onClick={onClose}>
          <AiOutlineClose size="24px" />
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
// export default Modal;
