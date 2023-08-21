import { Modal } from 'components/Modal/Modal';
import React, { FC, useEffect } from 'react';
import UpdateProjectForm from 'components/UpdateProjectForm/UpdateProjectForm';
import { useAppDispatch } from 'redux/reduxHooks';
import { getProjectById } from 'redux/project/operations';
import { useProjects } from 'hooks';

type ModalUserFormPorps = {
  onClose: () => void;
  projectId: string;
  showModal: boolean;
};

export const EditProjectModal: FC<ModalUserFormPorps> = ({
  onClose,
  projectId,
  showModal,
}) => {
  const dispatch = useAppDispatch();
  const { isProjectLoading } = useProjects();

  useEffect(() => {
    if (projectId === undefined) {
      return;
    }

    if (showModal) {
      dispatch(getProjectById(projectId));
    }
  }, [dispatch, projectId, showModal]);

  return (
    <Modal onClose={onClose} showModal={showModal}>
      {!isProjectLoading && (
        <div>
          <UpdateProjectForm onClose={onClose} />
        </div>
      )}
    </Modal>
  );
};
