import React, { FC } from 'react';
import { IProjects } from 'types/projectTypes';
import {
  Item,
  Wrapper,
  ProjectLink,
  ProjectInfo,
  UserWrapper,
  ImageWrapper,
  UserName,
  LinkBtn,
  ArrowLink,
} from './SearchProjectsItem.styled';

interface Props {
  project: IProjects;
  state: object;
}

const SearchProjectsItem: FC<Props> = ({ project, state }) => {
  const subTitleCut = (subTitle: any) => {
    const cutString =
      subTitle.length > 20 ? subTitle.slice(0, 30) + '...' : subTitle;

    return cutString;
  };

  const technicalStackToString = (technicalStack: string[]) => {
    const limitedTechnics = technicalStack.slice(0, 3);
    let resultString = limitedTechnics.join(', ');

    if (limitedTechnics.length < technicalStack.length) {
      resultString += ', etc';
    }

    return resultString;
  };

  const cutSubTitle = subTitleCut(project.projectSubTitle);
  const stackString = technicalStackToString(project.technicalStack);

  return (
    <Item>
      <Wrapper>
        <ProjectLink to={`/projectDetails/${project._id}`} state={state}>
          {project.projectTitle}
        </ProjectLink>
        <ProjectInfo>{cutSubTitle}</ProjectInfo>
        <ProjectInfo>{stackString}.</ProjectInfo>
        <UserWrapper>
          <ImageWrapper>
            <img src={project.owner.miniAvatarURL} alt="user avatar" />
          </ImageWrapper>
          <UserName to={`/portfolio/${project.owner._id}`} state={state}>
            {project.owner.name} {project.owner.surname}
          </UserName>
        </UserWrapper>
      </Wrapper>
      <LinkBtn to={`/projectDetails/${project._id}`} state={state}>
        <ArrowLink />
      </LinkBtn>
    </Item>
  );
};

export default SearchProjectsItem;
