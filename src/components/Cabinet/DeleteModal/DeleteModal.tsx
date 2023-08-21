import { Modal } from 'components/Modal/Modal';
import React, { FC } from 'react';
import {
  DeleteModalBtn,
  ButtonsWrap,
  DeleteText,
  BtnWrap,
} from './DeleteModal.styled';
import { deleteProject } from 'redux/project/operations';
import { deleteUserAccount } from 'redux/auth/operations';
import { useAppDispatch } from 'redux/reduxHooks';
import { useNavigate } from 'react-router-dom';

type DeleteModalPorps = {
  onClose: any;
  id: string;
  content: string;
  title: string;
  showModal: boolean;
};

export const DeleteModal: FC<DeleteModalPorps> = ({
  onClose,
  id,
  title,
  content,
  showModal,
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDelete = (id: string, title: string) => {
    if (content === 'project') {
      dispatch(deleteProject({ id, title }));
      onClose();
      return;
    }
    if (content === 'account') {
      dispatch(deleteUserAccount({ id, title }));
      onClose();
      navigate('/');

      return;
    }
  };

  return (
    <Modal onClose={onClose} showModal={showModal}>
      <ButtonsWrap>
        <DeleteText>
          Do you really want to delete {content}?!
          <br />
          {content === 'account' && (
            <span> Your projects will be deleted too!</span>
          )}
        </DeleteText>
        <BtnWrap>
          <DeleteModalBtn onClick={() => handleDelete(id, title)}>
            Yes
          </DeleteModalBtn>
          <DeleteModalBtn onClick={onClose}>No</DeleteModalBtn>
        </BtnWrap>
      </ButtonsWrap>
    </Modal>
  );
};
