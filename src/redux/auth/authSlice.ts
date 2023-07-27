import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateUser,
} from './operations';

import { IPostUser, IAuthState } from 'redux/reduxTypes';

const newUser: IPostUser = {
  _id: '',
  name: '',
  email: '',
};

const initialState: IAuthState = {
  user: newUser,
  accessToken: null,
  isLoggedIn: false,
  isRefreshing: false,
  isLoading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth/register',
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(logoutUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(currentUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(updateUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(currentUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = { ...state.user, ...action.payload.user };
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, state => {
        state.user = newUser;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutUser.rejected, state => {
        state.user = newUser;
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(currentUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload.user };
        state.accessToken = payload.accessToken;
        state.isLoggedIn = true;
        state.isRefreshing = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
        state.error = null;
      });
  },
});

export const { updateAccessToken } = authSlice.actions;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
