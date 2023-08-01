import styled from '@emotion/styled';
import { theme } from 'theme';

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
  border: none;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: calc(50% - ${theme.gaps.medium / 2}px);
    height: 213px;
  }
  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    height: 335px;
  }
`;

export const AddProjectBtn = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: inherit;
  border: none;
  color: ${theme.colors.primary_text_switch};
  transition: ${theme.transition.hover};
  &:hover {
    color: ${theme.colors.accent_color_switch};
    transform: scale(1.2);
  }
`;
