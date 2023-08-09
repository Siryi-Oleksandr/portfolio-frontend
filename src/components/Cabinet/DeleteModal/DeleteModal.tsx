import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import {
  DeleteModalBtn,
  ButtonsWrap,
  DeleteText,
  BtnWrap,
} from './DeleteModal.styled';
import { deleteProject } from 'redux/project/operations';
import { useAppDispatch } from 'redux/reduxHooks';

type DeleteModalPorps = {
  onClose: any;
  id: string;
};

export const DeleteModal: FC<DeleteModalPorps> = ({ onClose, id }) => {
  const dispatch = useAppDispatch();
  const handleDelete = (id: string) => {
    dispatch(deleteProject(id));
    onClose();
  };

  return (
    <Modal onClose={onClose}>
      <ButtonsWrap>
        <DeleteText>Do you really want to delete project?</DeleteText>
        <BtnWrap>
          <DeleteModalBtn onClick={() => handleDelete(id)}>Yes</DeleteModalBtn>
          <DeleteModalBtn onClick={onClose}>No</DeleteModalBtn>
        </BtnWrap>
      </ButtonsWrap>
    </Modal>
  );
};
