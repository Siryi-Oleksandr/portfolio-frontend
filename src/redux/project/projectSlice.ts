import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import  { getAllProjects,createProject,updateProject,getUserProjects,getProjectById,deleteProject } from './operations';

const initialState = {
  allProjects: [Object],
  userProjects: [Object],
  projectById: {},
  isLoading: false,
  error: null,
};

const projectsSlice = createSlice({
    name: 'projects',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder.addCase(getAllProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(createProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(updateProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(getUserProjects.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(deleteProject.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(getAllProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(createProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(updateProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(getUserProjects.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(getProjectById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(deleteProject.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }).addCase(getAllProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.allProjects = action.payload;
      }).addCase(createProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProjects.push(action.payload);
      }).addCase(updateProject.fulfilled, (state, action) => {
        state.isLoading = false;
        const updatedProject = action.payload;
        const index = state.userProjects.findIndex((project) => project.id === updatedProject.id);
        if (index !== -1) {
          state.userProjects[index] = updatedProject;
        }
      }).addCase(getUserProjects.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProjects = action.payload;
      }).addCase(getProjectById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      }).addCase(getProjectById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.projectById = action.payload;
      }).addCase(deleteProject.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userProjects = state.userProjects.filter((project) => project.id !== action.payload);
      });
    },
  });
