import { IStateAuth } from 'redux/reduxTypes';

export const selectUser = (state: IStateAuth) => state.auth.user;
export const selectAccessToken = (state: IStateAuth) => state.auth.accessToken;
export const selectIsLoggedIn = (state: IStateAuth) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: IStateAuth) =>
  state.auth.isRefreshing;
export const selectAuthIsLoading = (state: IStateAuth) => state.auth.isLoading;
export const selectAuthError = (state: IStateAuth) => state.auth.error;
