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

type Props = {
  project: IProject;
};

const CabinetProjectItem: FC<Props> = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const {
    id: projectId,
    title,
    description,
    // linkToCode,
    // linkToWebSite,
    // technologies,
    posters,
  } = project;
  return (
    <Item onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <Bar>
          <Title>{title}</Title>
          <IconsBlock />
        </Bar>
        <ImgWrapper>
          <Img src={posters[0].url} alt={posters[0].title} />
          <Overlay className="nested-component">
            <HoverList
              description={description}
              isHover={isHovered}
              projectId={projectId}
            />
          </Overlay>
        </ImgWrapper>
      </div>
    </Item>
  );
};

export default CabinetProjectItem;
