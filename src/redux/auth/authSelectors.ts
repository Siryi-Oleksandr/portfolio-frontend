import { IState } from 'redux/reduxTypes';

export const selectUser = (state: IState) => state.auth.user;
export const selectAccessToken = (state: IState) => state.auth.accessToken;
export const selectIsLoggedIn = (state: IState) => state.auth.isLoggedIn;
export const selectIsRefreshing = (state: IState) => state.auth.isRefreshing;
export const selectAuthIsLoading = (state: IState) => state.auth.isLoading;
export const selectAuthError = (state: IState) => state.auth.error;
