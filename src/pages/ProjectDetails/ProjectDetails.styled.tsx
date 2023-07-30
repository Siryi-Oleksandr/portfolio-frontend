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

export const LinksContainer = styled.div`
  display: flex;
`;

export const ProjectLink = styled(AwesomeButton)`
  color: teal;
  width: 140px;
  height: 40px;

  &:before {
    /* background: rgb(0, 121, 107); */
  }
`;

export const ProjectLinkIcon = styled(BiLinkExternal)`
  width: 25px;
  height: 25px;
`;

export const CodeLink = styled(AwesomeButton)`
  height: 40px;
  margin-left: auto;
`;

export const CodeLinkIcon = styled(AiFillGithub)`
  width: 22px;
  height: 22px;
  margin-right: 5px;
`;
// export const ProjectLink = styled.a`
//   width: 130px;
//   height: 40px;
//   color: #fff;
//   border-radius: 5px;
//   padding: 10px 25px;
//   font-family: ${theme.fonts.text};
//   font-weight: 400;
//   font-size: 15px;
//   text-align: center;
//   background: transparent;
//   cursor: pointer;
//   transition: all 250ms ease;
//   position: relative;
//   display: inline-block;
//   box-shadow: inset 2px 2px 2px 0px rgba(255, 255, 255, 0.5),
//     7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
//   outline: none;
//   border: none;
//   background: ${theme.colors.accentColor};
//   background: linear-gradient(0deg, #fe390c 0%, #fc3503 100%);
//   color: #fff;
//   overflow: hidden;
//   :before {
//     position: absolute;
//     content: '';
//     display: inline-block;
//     top: -180px;
//     left: 0;
//     width: 30px;
//     height: 100%;
//     background-color: #fff;
//     animation: btn 3s ease infinite;
//   }
//   :hover {
//     text-decoration: none;
//     color: #fff;
//     opacity: 0.7;
//   }
//   :active {
//     box-shadow: 4px 4px 6px 0 rgba(255, 255, 255, 0.3),
//       -4px -4px 6px 0 rgba(116, 125, 136, 0.2),
//       inset -4px -4px 6px 0 rgba(255, 255, 255, 0.2),
//       inset 4px 4px 6px 0 rgba(0, 0, 0, 0.2);
//   }

//   @keyframes btn {
//     0% {
//       -webkit-transform: scale(0) rotate(45deg);
//       opacity: 0;
//     }
//     80% {
//       -webkit-transform: scale(0) rotate(45deg);
//       opacity: 0.5;
//     }
//     81% {
//       -webkit-transform: scale(4) rotate(45deg);
//       opacity: 1;
//     }
//     100% {
//       -webkit-transform: scale(50) rotate(45deg);
//       opacity: 0;
//     }
//   }
// `;

// export const CodeLink = styled(ProjectLink)`
//   :before {
//     animation: btn2 3s ease-in-out infinite;
//   }

//   @keyframes btn2 {
//     0% {
//       -webkit-transform: scale(50) rotate(45deg);
//       opacity: 0;
//     }
//     20% {
//       -webkit-transform: scale(4) rotate(45deg);
//       opacity: 1;
//     }
//     21% {
//       -webkit-transform: scale(0) rotate(45deg);
//       opacity: 0.5;
//     }
//     100% {
//       -webkit-transform: scale(0) rotate(45deg);
//       opacity: 0;
//     }
//   }
// `;
