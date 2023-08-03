import React, { FC, useState } from 'react';
import CabinetProjectItem from './CabinetProjectItem/CabinetProjectItem';
import {
  List,
  AddProjectBtnWrap,
  AddProjectBtn,
} from './CabinetProjectList.styled';
import projectsDb from 'bd/projects.json';
import { IProject } from 'types/projectTypes';
import Container from 'components/Container/Container';
import { MdOutlineAddCircle } from 'react-icons/md';

const CabinetProjectList: FC = () => {
  const [projects] = useState<Array<IProject>>(projectsDb || []);

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
