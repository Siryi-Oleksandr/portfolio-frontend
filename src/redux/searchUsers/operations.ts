import { instance } from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';


export const searchUsers = createAsyncThunk(
  'users/searchUsers',
  async ({ query, page }: { query: string; page: number }, thunkAPI) => {
    try {
      const response = await instance.get(
        `/?query=${query}&page=${page}&limit=2`
      );
      return response.data;
    } catch (error: any) {

      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getUserById = createAsyncThunk(
  'users/getUserById',
  async (id: string, thunkAPI) => {
    try {
      const response = await instance.get(`/${id}`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const getTotalUsers = createAsyncThunk(
  'users/getTotalUsers',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get(`/`);
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);