import { useAppSelector } from 'redux/reduxHooks';
import {
  selectFoundUsers,
  selectIsLoading,
  selectError,
  totalUsersCount,
  userById,
} from 'redux/searchUsers/searchUsersSelectors';

export const useSearch = () => {
  const user = useAppSelector(userById);
  const foundedUsers = useAppSelector(selectFoundUsers);
  const totalCount = useAppSelector(totalUsersCount);
  const isSearchLoading = useAppSelector(selectIsLoading);
  const isSearchError = useAppSelector(selectError);

  return {
    user,
    foundedUsers,
    totalCount,
    isSearchLoading,
    isSearchError,
  };
};
