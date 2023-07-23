import React, { FC, useState } from 'react';
import ProjectItem from 'components/ProjectItem/ProjectItem';
import { List } from './ProjectList.styled';
import projectsDb from 'bd/projects.json';
import { IProject } from 'types/projectTypes';

const ProjectList: FC = () => {
  const [projects] = useState<Array<IProject>>(projectsDb || []);

  return (
    <List>
      {projects.map(project => (
        <ProjectItem project={project} />
      ))}
    </List>
  );
};

export default ProjectList;
