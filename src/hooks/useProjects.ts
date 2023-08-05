import { useAppSelector } from 'redux/reduxHooks';
import {
  selectAllProjects,
  selectUserProjects,
  selectProjectById,
  selectisLoading,
} from 'redux/project/projectSelectors';

export const useProjects = () => {
  const projects = useAppSelector(selectAllProjects);
  const userProjects = useAppSelector(selectUserProjects);
  const projectById = useAppSelector(selectProjectById);
  const isProjectLoading = useAppSelector(selectisLoading);

  return {
    projects,
    userProjects,
    projectById,
    isProjectLoading,
  };
};
