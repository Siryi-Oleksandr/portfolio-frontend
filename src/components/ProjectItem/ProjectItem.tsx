import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Bar, IconsBlock, Img, ImgWrapper, Item, Overlay, Title } from "./ProjectItem.styled";
import TagList from "./TagList/TagList";
import { BtnMore } from "./TagItem/TagItem.styled";

type Props = {
  projectId: string;
};

const ProjectItem: FC<Props> = ({ projectId = "1" }) => {
  return (
    <Item>
      <Link to={`/projectDetails/${projectId}`}>
        <Bar>
          <Title>Project Title</Title>
          <IconsBlock />
        </Bar>
        <ImgWrapper>
          <Img
            src="https://caferati.me/images/portfolio/sky-go-desktop/list.webp"
            alt="Project Name"
          />
          <Overlay className="nested-component">
            <TagList />
            <BtnMore>more...</BtnMore>
          </Overlay>
        </ImgWrapper>
      </Link>
    </Item>
  );
};

export default ProjectItem;
