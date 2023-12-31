import React, { FC, useState } from 'react';
import {
  Bar,
  IconsBlock,
  Img,
  ImgWrapper,
  Item,
  Overlay,
  Title,
} from './CabinetProjectItem.styled';
import HoverList from './HoverList/HoverList';
import { IProject } from 'types/projectTypes';
import 'framer.styles.css';
import projectImg from '../../../../img/project-img.jpg';

type Props = {
  project: IProject;
};

const CabinetProjectItem: FC<Props> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(true);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const { _id: projectId, projectTitle, aboutProject, projectImages } = project;
  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <Bar>
          <Title>{projectTitle}</Title>
          <IconsBlock />
        </Bar>
        <ImgWrapper>
          <Img
            src={projectImages[0] ? projectImages[0].posterURL : projectImg}
            alt={projectTitle}
          />
          <Overlay className="nested-component">
            <HoverList
              description={aboutProject}
              isHover={isHovered}
              projectId={projectId}
              title={projectTitle}
            />
          </Overlay>
        </ImgWrapper>
      </div>
    </Item>
  );
};

export default CabinetProjectItem;
