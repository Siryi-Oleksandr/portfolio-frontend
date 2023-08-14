import { IStateSearch } from 'redux/reduxTypes';
export const selectFoundUsers = (state: IStateSearch) =>
  state.search.foundUsers;
export const selectIsLoading = (state: IStateSearch) => state.search.isLoading;
export const selectIsLoadingMore = (state: IStateSearch) =>
  state.search.isLoadingMore;
export const selectError = (state: IStateSearch) => state.search.error;
export const totalUsersCount = (state: IStateSearch) => state.search.totalCount;
export const userById = (state: IStateSearch) => state.search.userById;
export const selectTotalUsers = (state: IStateSearch) => state.search.totalUsers
