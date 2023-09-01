import React, { useEffect, useCallback, useState } from 'react';
import { createPortal } from 'react-dom';
import { useProjects } from 'hooks';
import { CloseBtn, ModalContainer, Overlay } from './Modal.styled';
import { AiOutlineClose } from 'react-icons/ai';

export const Modal = ({ children, onClose }) => {
  const { isProjectLoading } = useProjects();
  const [showModal, setShowModal] = useState(false);

  const handleKeyPress = useCallback(
    evt => {
      if (evt.key === 'Escape') {
        setShowModal(false);
        onClose();
      }
    },
    [onClose]
  );

  // const handleOverlayClick = useCallback(
  //   evt => {
  //     if (evt.target === evt.currentTarget) {
  //       setShowModal(false)
  //       onClose();
  //     }
  //   },
  //   [onClose]
  // );

  useEffect(() => {
    setShowModal(true);

    return () => setShowModal(false);
  }, [showModal]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  return createPortal(
    <Overlay showModal={showModal} isLoading={isProjectLoading}>
      <ModalContainer showModal={showModal} isLoading={isProjectLoading}>
        <CloseBtn onClick={onClose}>
          <AiOutlineClose size="24px" />
        </CloseBtn>
        {children}
      </ModalContainer>
    </Overlay>,
    document.getElementById('modal-root')
  );
};
