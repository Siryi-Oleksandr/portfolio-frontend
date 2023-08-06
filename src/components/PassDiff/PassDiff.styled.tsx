import styled from '@emotion/styled';
import { theme } from 'theme';

const green = 'green';
const red = 'red';
const orange = 'orange';

export const List = styled.ul`
  display: flex;
  gap: 7px;
  position: absolute;
  top: -13px;
  right: 0;
`;

export const Item = styled.li<{ state: string }>`
  position: relative;
  width: 40px;
  height: 7px;

  font-size: 12px;
  text-align: center;

  background-color: ${({ state }) =>
    state === 'red'
      ? red
      : state === 'strong'
      ? green
      : `${theme.colors.textarea}`};

  &:first-child {
    color: ${red};
    background-color: ${({ state }) => state === 'weak' && red};
  }

  &:nth-child(1) {
    background-color: ${({ state }) => state === 'medium' && orange};
  }
  &:nth-child(2) {
    color: ${orange};
    background-color: ${({ state }) => state === 'medium' && orange};
  }

  &:nth-child(3) {
    color: ${green};
  }
`;

export const Span = styled.span`
  position: absolute;
  bottom: 9px;
  left: 50%;
  transform: translateX(-50%);
`;
