import { useAppSelector } from 'redux/reduxHooks';
import {
  selectUser,
  selectIsLoggedIn,
  selectIsRefreshing,
} from 'redux/auth/authSelectors';

export const useAuth = () => {
  const isLoggedIn = useAppSelector(selectIsLoggedIn);
  const isRefreshing = useAppSelector(selectIsRefreshing);
  const user = useAppSelector(selectUser);

  return {
    isLoggedIn,
    isRefreshing,
    user,
  };
};
