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
} from './ProjectDetails.styled';

const ProjectDetails: FC = () => {
  const projectState = {
    _id: 'asdasdq12e3132e4sdfsdf34314',
    projectTitle: 'Sky go desktop',
    projectSubTitle:
      'Sky Go Desktop react javascript web application build on top of the Electron framework.',
    projectLink: 'https://caferati.me/portfolio/sky-go-desktop',
    projectImages: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0fV3pZJj_K4WvI3-1hTIQWpAXsgbLnl8mTdHu-yCrHgR5FSHmB34rvj0Ntq1xyAMFCk&usqp=CAU',
    ],
    aboutProject:
      'Project developed as a contractor with the SKY GO (UK) Desktop team. The Sky Go Desktop app is a React web application build on top of the Electron framework.',
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

        <img src={projectImages[0]} alt={projectTitle} />
        <p>{aboutProject}</p>
        <ul>
          {technicalStack.map(tech => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
      </ProjectSectionContainer>
    </>
  );
};

export default ProjectDetails;
