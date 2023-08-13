import styled from '@emotion/styled';
import { theme } from 'theme';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { BiLinkExternal } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';

export const ProjectSectionContainer = styled.section`
  width: 1000px;
  padding: 20px 15px;
  margin-left: auto;
  margin-right: auto;
  @media screen and (max-width: 375px) {
    max-width: 290px;
    padding: 20px 0px;
  }
  @media screen and (min-width: 376px) and (max-width: 600px) {
    width: 360px;
  }
  @media screen and (min-width: 601px) and (max-width: 800px) {
    width: 560px;
  }
  @media screen and (min-width: 801px) and (max-width: 1030px) {
    width: 750px;
  }
`;

export const ProjectTitle = styled.h2`
  color: ${theme.colors.project_page_primary_text_switch};
  font-family: ${theme.fonts.title};
  font-size: 2.7em;
  line-height: 1.47em;
`;

export const ProjectSubTitle = styled.h3`
  color: ${theme.colors.project_page_primary_text_switch};
  font-family: ${theme.fonts.text};
  font-size: 1.1em;
  line-height: 1.8em;
  margin-bottom: 10px;
`;

export const CopyLincAwesome = styled(AwesomeButton)`
  padding: 0px, 0px;
  font-size: 18px;
  width: 140px;
  height: 35px;
  --button-default-border-radius: 4px;
  --button-horizontal-padding: 16px;
  --button-raise-level: 4px;
  --button-hover-pressure: 1;
  --transform-speed: 0.15s;
  --button-secondary-color: ${theme.colors.awesome_background_switch};
  --button-secondary-color-dark: #b75b06;
  --button-secondary-color-light: ${theme.colors.awesome_text_switch};
  --button-secondary-color-hover: ${theme.colors.awesome_hover_switch};
  --button-secondary-color-active: ${theme.colors.awesome_hover_switch};
  --button-secondary-border: 2px solid #d77642;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

export const ProjectLink = styled(AwesomeButton)`
  width: 140px;
  height: 40px;
`;

export const ProjectLinkIcon = styled(BiLinkExternal)`
  width: 25px;
  height: 25px;
`;

export const CodeLink = styled(AwesomeButton)`
  height: 40px;
`;

export const CodeLinkIcon = styled(AiFillGithub)`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`;

export const ProjectAboutContainer = styled.div`
  margin-top: 30px;
`;

export const ProjectAboutTitle = styled.h4`
  color: ${theme.colors.project_page_primary_text_switch};
  font-family: ${theme.fonts.title};
  font-size: 1.8em;
  line-height: 1.35em;
  font-weight: 600;
`;

export const Line = styled.hr`
  height: 1px;
  width: 50%;
  border: 0.5 solid rgba(72, 72, 72, 1);
  margin-left: 0px;
`;

export const ProjectAbout = styled.p`
  color: ${theme.colors.project_page_primary_text_switch};
  font-family: ${theme.fonts.text};
  font-size: 1.1em;
  line-height: 1.8em;
`;

export const TechnicalStackAbout = styled.p`
  margin-top: 10px;
  color: ${theme.colors.project_page_primary_text_switch};
  font-family: ${theme.fonts.text};
  font-size: 1.1em;
  line-height: 1.8em;
`;

export const TechnicalList = styled.ul`
  list-style: circle;
  width: 200px;
  color: ${theme.colors.project_page_primary_text_switch};
  position: relative;
  left: 18px;
`;

export const TechnicalListItem = styled.li``;

export const TechnicalListItemText = styled.p`
  color: ${theme.colors.project_page_primary_text_switch};
  font-family: ${theme.fonts.text};
  font-size: 1.1em;
  line-height: 1.4em;
`;
