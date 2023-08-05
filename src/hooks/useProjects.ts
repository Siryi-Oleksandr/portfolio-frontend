import { useAppSelector } from 'redux/reduxHooks';
import {
  selectAllProjects,
  selectUserProjects,
  selectProjectById,
  selectisLoading,
} from 'redux/project/projectSelectors';

export const useProjects = () => {
  const allPprojects = useAppSelector(selectAllProjects);
  const userProjects = useAppSelector(selectUserProjects);
  const projectById = useAppSelector(selectProjectById);
  const isProjectLoading = useAppSelector(selectisLoading);

  return {
    allPprojects,
    userProjects,
    projectById,
    isProjectLoading,
  };
};
