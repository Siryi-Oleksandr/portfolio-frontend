import { Interface } from 'readline';
import { IUser } from 'types/userTypes';

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

export interface IStateAuth {
  auth: IAuthState;
}

export interface IUpdateUser {
  avatarURL?: string;
  avatar?: File | undefined;
  email: string;
  name: string;
  surname: string;
  profession: string;
  experience?: string;
  phone: string;
  telegram: string;
  summary: string;
  technicalStack?: string;
  linkedinURL: string;
  gitHubURL: string;
}

export interface ISearchState {
  foundUsers: IUser[];
  totalCount: number;
  isLoading: boolean;
  error: any;
}

export interface IStateSearch {
  search: ISearchState;
}
