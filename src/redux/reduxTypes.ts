export interface IPostUser {
  _id: string;
  name: string;
  email: string;
}

export interface IAuthState {
  user: IPostUser;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: any;
}

export interface IState {
  auth: IAuthState;
}
