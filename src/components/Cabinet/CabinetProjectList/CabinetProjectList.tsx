import React, { FC, useState } from 'react';
import CabinetProjectItem from './CabinetProjectItem/CabinetProjectItem';
import {
  List,
  AddProjectBtnWrap,
  AddProjectBtn,
} from './CabinetProjectList.styled';
import projectsDb from 'bd/projects.json';
import Container from 'components/Container/Container';
import { MdOutlineAddCircle } from 'react-icons/md';

export interface MyIProject {
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

const CabinetProjectList: FC = () => {
  const [projects] = useState<Array<MyIProject>>(projectsDb || []);

  return (
    <Container>
      <List>
        {projects.map(project => (
          <CabinetProjectItem key={project.id} project={project} />
        ))}
        <AddProjectBtnWrap key="addBtnId">
          <AddProjectBtn to="/addProject">
            <MdOutlineAddCircle size="50px" />
            Add project
          </AddProjectBtn>
        </AddProjectBtnWrap>
      </List>
    </Container>
  );
};

export default CabinetProjectList;
