import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import UserForm from 'components/UserForm/UserForm';
import Container from 'components/Container/Container';

type ModalUserFormPorps = {
  onClose: any;
};

export const UserFormModal: FC<ModalUserFormPorps> = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <Container>
        <UserForm onClose={onClose} />
      </Container>
    </Modal>
  );
};
