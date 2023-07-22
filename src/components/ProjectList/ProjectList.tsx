import React, { FC } from "react";
import ProjectItem from "components/ProjectItem/ProjectItem";
import { List } from "./ProjectList.styled";

const ProjectList: FC = () => {
  return (
    <List>
      <ProjectItem projectId="1" />
      <ProjectItem projectId="2" />
      <ProjectItem projectId="3" />
      <ProjectItem projectId="4" />
    </List>
  );
};

export default ProjectList;
