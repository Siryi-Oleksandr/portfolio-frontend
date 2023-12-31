import React, { FC } from 'react';
import ProjectItem from 'components/ProjectItem/ProjectItem';
import { List } from './ProjectList.styled';
import { IProject } from 'types/projectTypes';

type Props = {
  projects: IProject[];
};

const ProjectList: FC<Props> = ({ projects }) => {
  return (
    <List>
      {projects
        .map(project => <ProjectItem key={project._id} project={project} />)
        .reverse()}
    </List>
  );
};

export default ProjectList;
