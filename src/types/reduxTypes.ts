export interface UserInterface {
  _id: string;
  name: string;
  email: string;
}

export interface AuthStateInterface {
  user: UserInterface;
  accessToken: string | null;
  isLoggedIn: boolean;
  isRefreshing: boolean;
  isLoading: boolean;
  error: any;
}
