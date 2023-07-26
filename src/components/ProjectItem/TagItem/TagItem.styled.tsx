import styled from '@emotion/styled';
import { theme } from 'theme';

export const Item = styled.div`
  position: relative;
  display: inline-block;
  padding: 4px 8px;
  margin: 2px;
  background-color: ${theme.colors.tagBgColor};
  color: ${theme.colors.tagTextColor};
  border-width: 1px 1px 2px 1px;
  border-style: solid;
  /* border-color: #222; */
  border-color: ${theme.colors.black};
  border-radius: 3px;
  text-transform: uppercase;
  font-weight: ${theme.fontWeights.bold};
  font-size: ${theme.fontSizes.xs};
  box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);

  text-shadow: ${theme.shadows.textShadow};

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    font-size: ${theme.fontSizes.m};
    padding: 6px 12px;
  }
`;

// export const BtnMore = styled.p`
//   position: absolute;
// bottom: 20px;
// left: 50%;
// transform: translateX(-50%);

//   display: inline-block;
//   padding: 4px 8px;
//   margin: 2px;
//   background-color: #313131;
//   color: #999;
//   border-width: 1px 1px 2px 1px;
//   border-style: solid;
//   border-color: #222;
//   border-radius: 3px;
//   text-transform: lowercase;
//   font-weight: 700;
//   font-size: 0.75em;
//   box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.25);

//   text-shadow: ${theme.shadows.textShadow};
// `;
