import { IStateSearch } from 'redux/reduxTypes';
export const selectFoundUsers = (state: IStateSearch) =>
  state.search.foundUsers;
export const selectIsLoading = (state: IStateSearch) => state.search.isLoading;
export const selectError = (state: IStateSearch) => state.search.error;
