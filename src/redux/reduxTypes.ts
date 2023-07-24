export interface IUser {
  _id: string;
  name: string;
  email: string;
}

export interface IAuthState {
  user: IUser;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: any;
}

interface ResponseData {
  refreshToken: string;
  accessToken: string;
  user: {
    name: string;
    email: string;
  };
}
