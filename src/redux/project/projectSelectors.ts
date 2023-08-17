import { IStateProject } from 'redux/reduxTypes';

export const selectAllProjects = (state: IStateProject) =>
  state.projects.allProjects;
export const selectUserProjects = (state: IStateProject) =>
  state.projects.userProjects;
export const selectProjectById = (state: IStateProject) =>
  state.projects.projectById;
export const selectisLoading = (state: IStateProject) =>
  state.projects.isLoading;
export const selectIsCreatingProject = (state: IStateProject) =>
  state.projects.isCreatingProject;
