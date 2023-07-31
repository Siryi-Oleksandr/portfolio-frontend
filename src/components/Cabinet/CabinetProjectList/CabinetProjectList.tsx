import React, { FC, useState } from 'react';
import CabinetProjectItem from './CabinetProjectItem/CabinetProjectItem';
import { List } from './CabinetProjectList.styled';
import projectsDb from 'bd/projects.json';
import { IProject } from 'types/projectTypes';
import Container from 'components/Container/Container';

const CabinetProjectList: FC = () => {
  const [projects] = useState<Array<IProject>>(projectsDb || []);

  return (
    <Container>
      <List>
        {projects.map(project => (
          <CabinetProjectItem key={project.id} project={project} />
        ))}
        <button key="addBtnId">add project</button>
      </List>
    </Container>
  );
};

export default CabinetProjectList;
