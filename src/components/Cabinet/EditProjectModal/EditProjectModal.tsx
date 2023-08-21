import { Modal } from 'components/Modal/Modal';
import React, { FC, useEffect } from 'react';
import UpdateProjectForm from 'components/UpdateProjectForm/UpdateProjectForm';
import { useAppDispatch } from 'redux/reduxHooks';
import { getProjectById } from 'redux/project/operations';
import { useProjects } from 'hooks';

type ModalUserFormPorps = {
  onClose: () => void;
  projectId: string;
};

export const EditProjectModal: FC<ModalUserFormPorps> = ({
  onClose,
  projectId,
}) => {
  const dispatch = useAppDispatch();
  const { isProjectLoading } = useProjects();

  useEffect(() => {
    if (projectId === undefined) {
      return;
    }

    dispatch(getProjectById(projectId));
  }, [dispatch, projectId]);

  return (
    <>
      {!isProjectLoading && (
        <Modal onClose={onClose}>
          <div>
            <UpdateProjectForm onClose={onClose} />
          </div>
        </Modal>
      )}
    </>
  );
};
