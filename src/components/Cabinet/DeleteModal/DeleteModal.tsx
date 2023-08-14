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
};

export const DeleteModal: FC<DeleteModalPorps> = ({ onClose, id, content }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleDelete = (id: string) => {
    if(content === 'project'){
      dispatch(deleteProject(id));
      onClose();
      return
    }
    if(content === 'account'){
      dispatch(deleteUserAccount(id));
      onClose();
      navigate('/');
      
      return
    }
    
    
  };

  return (
    <Modal onClose={onClose}>
      <ButtonsWrap>
        <DeleteText>Do you really want to delete {content}?</DeleteText>
        <BtnWrap>
          <DeleteModalBtn onClick={() => handleDelete(id)}>Yes</DeleteModalBtn>
          <DeleteModalBtn onClick={onClose}>No</DeleteModalBtn>
        </BtnWrap>
      </ButtonsWrap>
    </Modal>
  );
};
