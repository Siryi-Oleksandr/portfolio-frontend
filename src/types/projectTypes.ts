export interface IProject {
  id: string;
  title: string;
  description: string;
  linkToCode: string;
  linkToWebSite: string;
  technologies: Array<string>;
  posters: Array<Poster>;
}

type Poster = {
  id: string;
  title: string;
  url: string;
};
