import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IProjectState } from 'redux/reduxTypes';

import {
  getAllProjects,
  createProject,
  updateProject,
  getUserProjects,
  getProjectById,
  deleteProject,
} from './operations';

const initialState: IProjectState = {
  allProjects: [],
  userProjects: [],
  projectById: {},
  isLoading: false,
  isCreatingProject: false,
  error: null,
};

const handlePending = (state: IProjectState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: IProjectState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getAllProjects.pending, handlePending)
      .addCase(createProject.pending, state => {
        state.isLoading = true;
        state.isCreatingProject = true;
        state.error = null;
      })
      .addCase(updateProject.pending, handlePending)
      .addCase(deleteProject.pending, handlePending)
      .addCase(getProjectById.pending, handlePending)
      .addCase(getUserProjects.pending, handlePending)
      .addCase(getAllProjects.rejected, handleRejected)
      .addCase(createProject.rejected, handleRejected)
      .addCase(updateProject.rejected, handleRejected)
      .addCase(getUserProjects.rejected, handleRejected)
      .addCase(getProjectById.rejected, handleRejected)
      .addCase(deleteProject.rejected, handleRejected)
      .addCase(getAllProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.allProjects = action.payload;
      })
      .addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isCreatingProject = false;
        state.error = null;
        state.userProjects.push(action.payload);
      })
      .addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedProject = action.payload;
        const index = state.userProjects.findIndex(
          project => project._id === updatedProject._id
        );
        if (index !== -1) {
          state.userProjects[index] = updatedProject;
        }
      })
      .addCase(getUserProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.userProjects = action.payload;
      })
      .addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.projectById = action.payload;
      })
      .addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.userProjects.findIndex(
          project => project._id === action.payload
        );
        if (index !== -1) {
          state.userProjects.splice(index, 1);
        }
      });
  },
});

export default projectsSlice.reducer;
