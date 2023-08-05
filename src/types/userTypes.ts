export interface IUser {
  _id: string;
  name: string;
  surname?: string;
  email: string;
  profession?: string;
  experience?: number;
  phone?: string;
  telegram?: string;
  summary?: string;
  technicalStack?: string[];
  avatarURL?: string;
  linkedinURL?: string;
  gitHubURL?: string;
  miniAvatarURL?: string;
}
