import { IUser } from 'types/userTypes';
import { IProject } from 'types/projectTypes';

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
  isLogedGoogle: boolean;
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
  technicalStack: string;
  linkedinURL: string;
  gitHubURL: string;
}

export interface ICreateUpdateProject {
  id?: string;
  projectTitle: string;
  projectSubTitle?: string;
  projectLink: string;
  codeLink: string;
  image1: File | undefined | string;
  image2: File | undefined | string;
  image3: File | undefined | string;
  aboutProject: string;
  technicalStack: string;
}

export interface IProjectState {
  allProjects: IProject[];
  userProjects: IProject[];
  projectById: Partial<IProject>;
  isLoading: boolean;
  error: any;
}

export interface IStateProject {
  projects: IProjectState;
}

export interface ISearchState {
  foundUsers: IUser[];
  userById: Partial<IUser>;
  totalCount: number;
  isLoadingMore: boolean;
  isLoading: boolean;
  error: any;
}

export interface IStateSearch {
  search: ISearchState;
}
