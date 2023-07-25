import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-hot-toast';

export const instance = axios.create({
  baseURL: 'https://ts-projects-api.onrender.com',
});

const setToken = (accessToken: string | null) => {
  if (accessToken) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${accessToken}`);
  }
  return (instance.defaults.headers.common.Authorization = '');
};

instance.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === '/logout') return Promise.reject(error);
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await instance.post('/refresh', { refreshToken });
        setToken(response.data.accessToken);
        localStorage.setItem('refreshToken', response.data.refreshToken);

        originalRequest.headers[
          'Authorization'
        ] = `Bearer ${response.data.accessToken}`;
        return instance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

const tostStyleError = {
  borderRadius: '8px',
  border: '1px solid red',
  background: '#13151A',
  color: '#3E85F3',
};

export const tostStyleSuccess = {
  borderRadius: '8px',
  background: '#3E85F3',
  color: '#ffffff',
};

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (
    userData: { name: string; email: string; password: string },
    thunkAPI
  ) => {
    const { name, email, password } = userData;
    try {
      const response = await instance.post('/register', {
        name,
        email,
        password,
      });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setToken(response.data.accessToken);
      toast.success(`Welcome, ${response.data.user.name}!`, {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error: any) {
      toast.error(
        `Registration failed!😕 Please check your information and try again!`,
        {
          style: tostStyleError,
        }
      );
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser ',
  async (userData: { email: string; password: string }, thunkAPI) => {
    const { email, password } = userData;
    try {
      const response = await instance.post('/login', { email, password });
      localStorage.setItem('refreshToken', response.data.refreshToken);
      setToken(response.data.accessToken);
      toast.success(`Welcome back, ${response.data.user.name}!`, {
        style: tostStyleSuccess,
      });
      return response.data;
    } catch (error: any) {
      toast.error(`Invalid email or password!😕 Try again!`, {
        style: tostStyleError,
      });
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, thunkAPI) => {
    try {
      await instance.post('/logout');
      setToken('');
    } catch (error: any) {
      if (error.response.status === 401) {
        setToken(null);
      }
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const currentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state: any = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setToken(persistedToken);

    try {
      const response = await instance.get('/current');
      return response.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
