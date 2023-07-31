import { instance } from 'redux/auth/operations';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';
import { tostStyleError } from 'redux/auth/operations';

export const searchUsers = createAsyncThunk(
  'users/searchUsers',
  async ({ query, page }: { query: string; page: number }, thunkAPI) => {
    try {
      const response = await instance.get(
        `/?query=${query}&page=${page}&limit=2`
      );
      return response.data;
    } catch (error: any) {
      toast.error(`Sorry ${query} does not exist in the base!`, {
        style: tostStyleError,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
