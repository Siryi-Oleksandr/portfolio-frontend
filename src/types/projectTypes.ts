export interface IProject {
  _id: string;
  projectTitle: string;
  projectSubTitle?: string;
  projectLink?: string;
  codeLink: string;
  projectImages: { posterURL: string; posterID: string }[];
  aboutProject: string;
  technicalStack: string[];
  owner: {
    _id: string;
    avatarURL: string;
    email: string;
    

  };
}
