import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import UserForm from 'components/UserForm/UserForm';

type ModalUserFormPorps = {
  onClose: any;
  showModal: boolean;
};

export const UserFormModal: FC<ModalUserFormPorps> = ({
  onClose,
  showModal,
}) => {
  return (
    <Modal onClose={onClose} showModal={showModal}>
      <div>
        <UserForm onClose={onClose} />
      </div>
    </Modal>
  );
};
