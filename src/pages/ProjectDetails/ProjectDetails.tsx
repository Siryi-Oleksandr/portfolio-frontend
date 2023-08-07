import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components';
import { useAppDispatch } from 'redux/reduxHooks';
import { getProjectById } from 'redux/project/operations';
import { getUserById } from 'redux/searchUsers/operations';
import { useProjects } from 'hooks';
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
  const { projectId } = useParams();
  const { projectById, isProjectLoading } = useProjects();
  const dispatch = useAppDispatch();

  const userId = projectById.owner?._id;

  useEffect(() => {
    dispatch(getProjectById(projectId as string));
    if (userId) {
      dispatch(getUserById(userId));
    }
  }, [dispatch, projectId, userId]);

  const images = projectById?.projectImages;
  const sliderData = images?.map(item => item.posterURL);

  const {
    projectTitle,
    projectSubTitle,
    projectLink,
    aboutProject,
    codeLink,
    technicalStack,
  } = projectById;

  return (
    <>
      <ProjectSectionContainer>
        {isProjectLoading ? (
          <div style={{ width: '100px', height: '100px', margin: 'auto' }}>
            <Loader />
          </div>
        ) : (
          <>
            <ProjectTitle>{projectTitle}</ProjectTitle>
            {projectSubTitle && (
              <ProjectSubTitle>{projectSubTitle}</ProjectSubTitle>
            )}
            <LinksContainer>
              {projectLink && (
                <ProjectLink
                  onPress={(e: React.MouseEvent) => {
                    e.preventDefault();
                    window.open(projectLink, '_blank');
                  }}
                  type="primary"
                >
                  <ProjectLinkIcon />
                  Website
                </ProjectLink>
              )}
              <CodeLink
                type="danger"
                onPress={(e: React.MouseEvent) => {
                  e.preventDefault();
                  window.open(codeLink, '_blank');
                }}
              >
                <CodeLinkIcon />
                <span>Code</span>
              </CodeLink>
            </LinksContainer>
            {images && <ProjectSlider images={sliderData as string[]} />}

            <ProjectAboutContainer>
              <ProjectAboutTitle>About this project</ProjectAboutTitle>
              <Line />
              <ProjectAbout>{aboutProject}</ProjectAbout>
            </ProjectAboutContainer>
            <ProjectAboutContainer>
              <ProjectAboutTitle>Technical Sheet</ProjectAboutTitle>

              <TechnicalStackAbout>
                Code technologies I got involved with while working on this
                project.
              </TechnicalStackAbout>
              <Line />
              {technicalStack && (
                <TechnicalList>
                  {technicalStack?.map(tech => (
                    <TechnicalListItem key={tech}>
                      <TechnicalListItemText>{tech}</TechnicalListItemText>
                    </TechnicalListItem>
                  ))}
                </TechnicalList>
              )}
            </ProjectAboutContainer>
          </>
        )}
      </ProjectSectionContainer>
    </>
  );
};

export default ProjectDetails;
