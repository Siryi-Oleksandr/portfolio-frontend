import { instance } from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateUpdateProject } from 'redux/reduxTypes';

export const getAllProjects = createAsyncThunk(
  'projects/getAllProjects',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/projects');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const createProject = createAsyncThunk(
  'projects/createProject',
  async (projectData: ICreateUpdateProject, thunkAPI) => {
    const {
      projectTitle,
      projectSubTitle,
      projectLink,
      codeLink,
      projectImages,
      aboutProject,
      technicalStack,
    } = projectData;
    try {
      const formData = new FormData();
      if (projectImages !== undefined) {
        formData.append('projectImages', projectImages);
      }
      formData.append('projectTitle', projectTitle);
      formData.append('projectSubTitle', projectSubTitle || '');
      formData.append('projectLink', projectLink);
      formData.append('codeLink', codeLink);
      formData.append('aboutProject', aboutProject);
      formData.append('technicalStack', technicalStack);
      const response = await instance.post('/projects', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateProject = createAsyncThunk(
  'projects/updateProject',
  async (projectData: ICreateUpdateProject, thunkAPI) => {
    const {
      id,
      projectTitle,
      projectSubTitle,
      projectLink,
      codeLink,
      projectImages,
      aboutProject,
      technicalStack,
    } = projectData;
    try {
      const formData = new FormData();
      if (projectImages !== undefined) {
        formData.append('projectImages', projectImages);
      }
      formData.append('projectTitle', projectTitle);
      formData.append('projectSubTitle', projectSubTitle || '');
      formData.append('projectLink', projectLink);
      formData.append('codeLink', codeLink);
      formData.append('aboutProject', aboutProject);
      formData.append('technicalStack', technicalStack);
      const response = await instance.patch(`/projects/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserProjects = createAsyncThunk(
  'projects/getUsersProjects',
  async (userId: string, thunkAPI) => {
    try {
      const response = await instance.get(`/projects/own/${userId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getProjectById = createAsyncThunk(
  'projects/getProjectById',
  async (projectId: string, thunkAPI) => {
    try {
      const response = await instance.get(`/projects/${projectId}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteProject = createAsyncThunk(
  'projects/deleteProject',
  async (id, thunkAPI) => {
    try {
      await instance.delete(`/projects/${id}`);
      return id;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
