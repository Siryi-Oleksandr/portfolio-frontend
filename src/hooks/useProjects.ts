import { useAppSelector } from 'redux/reduxHooks';
import {
  selectAllProjects,
  selectUserProjects,
  selectProjectById,
  selectisLoading,
  selectIsCreatingProject,
} from 'redux/project/projectSelectors';

export const useProjects = () => {
  const allPprojects = useAppSelector(selectAllProjects);
  const userProjects = useAppSelector(selectUserProjects);
  const projectById = useAppSelector(selectProjectById);
  const isProjectLoading = useAppSelector(selectisLoading);
  const isProjectCreating = useAppSelector(selectIsCreatingProject)

  return {
    allPprojects,
    userProjects,
    projectById,
    isProjectLoading,
    isProjectCreating
  };
};
