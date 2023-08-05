import styled from '@emotion/styled';
import { theme } from 'theme';
import { BsSearch } from 'react-icons/bs';

interface isReadySearch {
  isReady: boolean;
}

export const Form = styled.form<isReadySearch>`
  height: 41px;
  transform: ${({ isReady }) =>
    isReady ? 'translateY(0)' : 'translateY(-200%)'};
  transition: transform 800ms ease;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1));
  background-color: #404040;
`;

export const InputContainer = styled.div`
  position: relative;
  margin: 0 auto;
  width: 100%;
  height: 41px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 425px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 525px;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 41px;
  padding-left: 45px;
  padding-right: 15px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  border-right: 2px solid #fff;
  border-bottom: 2px solid #fff;
  background-color: transparent;
  font-size: 14px;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.white};
  transition: border-color 0.3s ease-in-out;

  ::placeholder {
    font-size: 16px;
  }

  :focus {
    outline: none;
    border-color: ${theme.colors.accentColor};
  }
`;

export const SubmitBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0px;
  left: 5px;
  border: none;
  background-color: transparent;
  width: 40px;
  height: 40px;
  cursor: pointer;

  :hover svg,
  :focus svg {
    transform: rotate(0);
  }
`;

export const SearchIcon = styled(BsSearch)`
  width: 20px;
  height: 20px;

  transform: rotate(45deg);
  transition: ${theme.transition.hover};

  fill: #fff;
`;
