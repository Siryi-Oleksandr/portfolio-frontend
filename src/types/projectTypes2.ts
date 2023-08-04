export interface IProject2 {
  _id?: string;
  projectTitle: string;
  projectSubTitle?: string;
  projectLink?: string;
  codeLink: string;
  projectImages: { posterURL: string; posterID: string }[];
  aboutProject: string;
  technicalStack:string;
  owner: string;
}