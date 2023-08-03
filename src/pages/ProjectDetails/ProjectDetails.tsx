import React, { FC } from 'react';
import {
  ProjectSectionContainer,
  ProjectTitle,
  ProjectSubTitle,
  ProjectLink,
  LinksContainer,
  ProjectLinkIcon,
  CodeLink,
  CodeLinkIcon,
  ProjectAbout,
  ProjectAboutContainer,
  ProjectAboutTitle,
  Line,
  TechnicalStackAbout,
  TechnicalList,
  TechnicalListItem,
  TechnicalListItemText,
} from './ProjectDetails.styled';
import { ProjectSlider } from '../../components/ProjectSlider/ProjectSlider';

const ProjectDetails: FC = () => {
  const projectState = {
    _id: 'asdasdq12e3132e4sdfsdf34314',
    projectTitle: 'Sky go desktop',
    projectSubTitle:
      'Sky Go Desktop react javascript web application build on top of the Electron framework.',
    projectLink: 'https://caferati.me/portfolio/sky-go-desktop',
    codeLink: 'gitHub',
    projectImages: [
      'https://caferati.me/images/portfolio/sky-go-desktop/1.jpg',
      'https://caferati.me/images/portfolio/sky-go-desktop/2.jpg',
      'https://caferati.me/images/portfolio/sky-go-desktop/3.jpg',
    ],
    aboutProject:
      'Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.At this project I acted as the lead UI/UX developer specialist being the bridge between UI/UX Design, PO and the UI development team. The main challenge was to reorganize the UI structure from a react-virtualized grid into a pure CSS one. Which improved drastically the scalability and maintainability of the project.',
    technicalStack: ['Js', 'React', 'Redux', 'Webpack'],
  };

  const {
    projectTitle,
    projectSubTitle,
    projectLink,
    aboutProject,
    technicalStack,
    projectImages,
  } = projectState;

  return (
    <>
      <ProjectSectionContainer>
        <ProjectTitle>{projectTitle}</ProjectTitle>
        <ProjectSubTitle>{projectSubTitle}</ProjectSubTitle>
        <LinksContainer>
          <ProjectLink href={projectLink} type="primary">
            <ProjectLinkIcon />
            Website
          </ProjectLink>
          <CodeLink type="danger">
            <CodeLinkIcon />
            <span>Code</span>
          </CodeLink>
        </LinksContainer>
        <ProjectSlider images={projectImages} />
        <ProjectAboutContainer>
          <ProjectAboutTitle>About this project</ProjectAboutTitle>
          <Line />
          <ProjectAbout>{aboutProject}</ProjectAbout>
        </ProjectAboutContainer>
        <ProjectAboutContainer>
          <ProjectAboutTitle>Technical Sheet</ProjectAboutTitle>

          <TechnicalStackAbout>
            Code technologies I got involved with while working on this project.
          </TechnicalStackAbout>
          <Line />
          <TechnicalList>
            {technicalStack.map(tech => (
              <TechnicalListItem key={tech}>
                <TechnicalListItemText>{tech}</TechnicalListItemText>
              </TechnicalListItem>
            ))}
          </TechnicalList>
        </ProjectAboutContainer>
      </ProjectSectionContainer>
    </>
  );
};

export default ProjectDetails;
