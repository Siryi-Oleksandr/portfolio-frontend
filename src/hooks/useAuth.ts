import { useAppSelector } from 'redux/reduxHooks';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
  selectAccessToken,
  selectAuthIsLoading,
  selectAuthError,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const user = useAppSelector(selectUser);
  const accessToken = useAppSelector(selectAccessToken);
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const isAuthLoading = useAppSelector(selectAuthIsLoading);
  const isAuthError = useAppSelector(selectAuthError);

  return {
    user,
    accessToken,
    isLoggedIn,
    isRefreshing,
    isAuthLoading,
    isAuthError,
  };
};
