import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import UserForm from 'components/UserForm/UserForm';

type ModalUserFormPorps = {
  onClose: any;
};

export const UserFormModal: FC<ModalUserFormPorps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <div>
        <UserForm onClose={onClose} />
      </div>
    </Modal>
  );
};
