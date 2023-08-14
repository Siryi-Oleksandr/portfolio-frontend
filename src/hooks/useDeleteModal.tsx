import { useState } from 'react';

export const useDeleteModal = () => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleCloseDeleteModal = () => {
    setShowDeleteModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleShowDeleteModal = () => {
    setShowDeleteModal(true);
    document.body.style.overflow = 'hidden';
  };

  return {
    showDeleteModal,
    handleCloseDeleteModal,
    handleShowDeleteModal,
  };
};

 