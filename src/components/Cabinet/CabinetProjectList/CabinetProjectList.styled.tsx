import styled from '@emotion/styled';
import { theme } from 'theme';
import { NavLink } from 'react-router-dom';

export const List = styled.ul`
  margin-top: 20px;
  padding: 20px 20px;

  display: flex;
  flex-wrap: wrap;
  gap: ${theme.gaps.medium}px;
  justify-content: space-between;
  width: 100%;
`;
export const AddProjectBtnWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 195px;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)
  );
  box-shadow: 0 0 4px 4px rgba(254, 57, 12, 0.25);
  border-radius: 4px 4px 0 0;
  border: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(50% - ${theme.gaps.medium / 2}px);
    height: 213px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 335px;
  }
`;

export const AddProjectBtn = styled(NavLink)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  border: none;
  color: ${theme.colors.primary_text_switch};
  font-size: ${theme.fontSizes.l};
  font-weight: ${theme.fontWeights.bold};
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.accent_color_switch};
    transform: scale(1.2);
  }
`;
export const AddText = styled.p`
  text-align: center;
  font-family: ${theme.fonts.text};
`;
export const OpenSubscriptionBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px 20px;
  border: none;
  background-color: inherit;
  color: ${theme.colors.primary_text_switch};
  cursor: pointer;
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.accent_color_switch};
    transform: scale(1.1);
  }
`;
