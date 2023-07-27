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

export interface IUpdateUser {
  avatar: File | undefined;
  email: string;
  name: string;
  surname: string;
  profession: string;
  experience: string;
  phone: string;
  telegram: string;
  summary: string;
  technicalStack: string[];
  linkedinURL: string;
  gitHubURL: string;
}
