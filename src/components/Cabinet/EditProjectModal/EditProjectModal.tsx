import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import UpdateProjectForm from 'components/UpdateProjectForm/UpdateProjectForm';

type ModalUserFormPorps = {
  onClose: any;
};

export const EditProjectModal: FC<ModalUserFormPorps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div>
        <UpdateProjectForm onClose={onClose} />
      </div>
    </Modal>
  );
};
