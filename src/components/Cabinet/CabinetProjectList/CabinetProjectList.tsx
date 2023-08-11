import React, { FC } from 'react';
import CabinetProjectItem from './CabinetProjectItem/CabinetProjectItem';
import {
  List,
  AddProjectBtnWrap,
  AddProjectBtn,
} from './CabinetProjectList.styled';
// import projectsDb from 'bd/projects.json';
import Container from 'components/Container/Container';
import { MdOutlineAddCircle } from 'react-icons/md';
import { IProject } from 'types/projectTypes';
import { IUser } from 'types/userTypes';

export interface MyIProject {
  id: string;
  title: string;
  description: string;
  linkToCode: string;
  linkToWebSite: string;
  technologies: Array<string>;
  posters: Array<Poster>;
}

type Props = {
  user: Partial<IUser>;
  projects: IProject[];
};

type Poster = {
  id: string;
  title: string;
  url: string;
};

const CabinetProjectList: FC<Props> = ({ user, projects }) => {
  return (
    <Container>
      <List>
        <AddProjectBtnWrap key="addBtnId">
          <AddProjectBtn to="/addProject">
            <MdOutlineAddCircle size="50px" />
            Add project
          </AddProjectBtn>
        </AddProjectBtnWrap>
        {projects.map(project => (
          <CabinetProjectItem key={project._id} project={project} />
        ))}
      </List>
    </Container>
  );
};

export default CabinetProjectList;
