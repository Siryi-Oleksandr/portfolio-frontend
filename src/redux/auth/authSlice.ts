import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {
  registerUser,
  loginUser,
  logoutUser,
  currentUser,
  updateUser,
  deleteUserAccount,
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
  isLogedGoogle: false,
};

const handlePending = (state: IAuthState) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state: IAuthState, action: PayloadAction<any>) => {
  state.isLoading = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: 'auth/register',
  initialState,
  reducers: {
    updateAccessToken: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
    },
    updateLoginGoogle: state => {
      state.isLogedGoogle = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(loginUser.pending, handlePending)
      .addCase(logoutUser.pending, handlePending)
      .addCase(currentUser.pending, handlePending)
      .addCase(updateUser.pending, handlePending)
      .addCase(deleteUserAccount.pending, handlePending)
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.rejected, handleRejected)
      .addCase(updateUser.rejected, handleRejected)
      .addCase(currentUser.rejected, handleRejected)
      .addCase(deleteUserAccount.rejected, handleRejected)
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
        state.isLoading = false;
      })
      .addCase(updateUser.fulfilled, (state, { payload }) => {
        state.user = { ...state.user, ...payload };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUserAccount.fulfilled, state => {
        state.user = newUser;
        state.accessToken = '';
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.isLoading = false;
        state.error = null;
        state.isLogedGoogle = false;
      });
  },
});


export const { updateLoginGoogle, updateAccessToken } = authSlice.actions;

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['accessToken'],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);
