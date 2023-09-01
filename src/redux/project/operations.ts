import { instance } from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ICreateUpdateProject } from 'redux/reduxTypes';
import { toast } from 'react-hot-toast';
import { tostStyleError, tostStyleSuccess } from 'redux/auth/operations';
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
      image1,
      image2,
      image3,
      aboutProject,
      technicalStack,
    } = projectData;
    try {
      const formData = new FormData();
      if (image1 !== undefined) {
        formData.append('posters', image1);
      }
      if (image2 !== undefined) {
        formData.append('posters', image2);
      }
      if (image3 !== undefined) {
        formData.append('posters', image3);
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
      toast.success(
        `Your project ${response.data.projectTitle}has been successfully added!`,
        {
          style: tostStyleSuccess,
        }
      );

      return response.data;
    } catch (error: any) {
      toast.error(
        `Sorry we have some error ${error.message}. Please try again!`,
        {
          style: tostStyleError,
        }
      );
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
      image1,
      image2,
      image3,
      aboutProject,
      technicalStack,
    } = projectData;
    try {
      const formData = new FormData();
      if (image1 !== undefined) {
        formData.append('posters', image1);
      }
      if (image2 !== undefined) {
        formData.append('posters', image2);
      }
      if (image3 !== undefined) {
        formData.append('posters', image3);
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
      toast.success(
        `Your project ${response.data.projectTitle}has been successfully updated!`,
        {
          style: tostStyleSuccess,
        }
      );
      return response.data;
    } catch (error: any) {
      toast.error(
        `Sorry we have some error ${error.message}. Please try again!`,
        {
          style: tostStyleError,
        }
      );
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
  async ({ id, title }: { id: string; title: string }, thunkAPI) => {
    try {
      await instance.delete(`/projects/${id}`);
      toast.success(`Your project ${title} has been successfully deleted!`, {
        style: tostStyleSuccess,
      });
      return id;
    } catch (error: any) {
      toast.error(
        `Sorry we have some error ${error.message}. Please try again!`,
        {
          style: tostStyleError,
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
