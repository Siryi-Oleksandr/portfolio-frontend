import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Bar, IconsBlock, Img, ImgWrapper, Item, Overlay, Title } from "./ProjectItem.styled";
import TagList from "./TagList/TagList";
import { BtnMore } from "./TagItem/TagItem.styled";
import { IProject } from "types/projectTypes";

type Props = {
  project: IProject;
};

const ProjectItem: FC<Props> = ({project}) => {
  const { id: projectId, title, description, linkToCode, linkToWebSite, technologies, posters} = project;
  return (
    <Item>
      <Link to={`/projectDetails/${projectId}`}>
        <Bar>
          <Title>{title}</Title>
          <IconsBlock />
        </Bar>
        <ImgWrapper>
          <Img
            src={posters[0].url}
            alt={posters[0].title}
          />
          <Overlay className="nested-component">
            <TagList tags={technologies} />
            <BtnMore>more...</BtnMore>
          </Overlay>
        </ImgWrapper>
      </Link>
    </Item>
  );
};

export default ProjectItem;
