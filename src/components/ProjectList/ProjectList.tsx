import React, { FC } from 'react';
import ProjectItem from 'components/ProjectItem/ProjectItem';
import { List } from './ProjectList.styled';
import { IProject2 } from 'types/projectTypes2';

type Props = {
  projects: IProject2[];
};

const ProjectList: FC<Props> = ({ projects }) => {
  // const [projects] = useState<Array<IProject>>(projectsDb || []);

  return (
    <List>
      {projects.map(project => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </List>
  );
};

export default ProjectList;
