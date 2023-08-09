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

export interface IProjects {
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
    phone: string;
    telegram: string;
    linkedinURL: string;
    gitHubURL: string;
    profession: string;
    surname: string;
    miniAvatarURL: string;
  };
}
