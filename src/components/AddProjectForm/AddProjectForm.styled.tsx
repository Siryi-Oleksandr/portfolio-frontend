import styled from '@emotion/styled';
import { theme } from 'theme';
import { Field, Form } from 'formik';
import { BiSolidImageAdd } from 'react-icons/bi';
import { BiSolidImageAlt } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';

export const StyledAddProjectForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 50px;
  margin-bottom: 50px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const StyledProdjecField = styled(Field)`
  display: block;
  width: 260px;
  min-width: 100%;
  height: 36px;
  padding: 8px 5px;
  border: 2px solid #ccc;
  background-color: ${theme.colors.textarea};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.blackTitle};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-in-out;

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    width: 300px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    height: 48px;
    padding: 14px 5px;
    font-size: 16px;
    font-weight: 600;
  }

  &:focus {
    outline: none;
    border-color: ${theme.colors.accentColor};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  &:focus ~ span {
    color: ${theme.colors.accentColor};
  }
`;

export const StyledLabel = styled.span`
  position: absolute;
  top: -20px;
  left: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.primary_text_switch};
  transition: all 250ms ease-in-out;
`;

export const Label = styled.label`
  position: relative;
`;

export const ResetBtn = styled.button`
  position: absolute;
  top: -25px;
  right: 0;
  border: 2px solid transparent;
  padding: 3px 6px;
  border-radius: 4px;
  background-color: orange;
  cursor: pointer;

  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.s};

  transition: ${theme.transition.hover};

  :disabled {
    background-color: ${theme.colors.gray};
  }

  :hover,
  :focus {
    border-color: ${theme.colors.accentColor};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    font-size: ${theme.fontSizes.m};
  }
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  top: -18px;
  right: 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.redColor};
  transition: all 300ms ease-in-out;
`;

export const StyledErrorImageMessage = styled.p`
  position: absolute;
  top: 5px;
  left: 35px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.redColor};
  transition: all 300ms ease-in-out;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    top: 5px;
    right: 0;
  }
`;

export const FileLabel = styled.label<{
  projectImg: string;
  placeholder: string;
}>`
  position: relative;
  cursor: pointer;
  pointer-events: ${({ projectImg, placeholder }) =>
    projectImg === placeholder ? 'auto' : 'none'};
`;

export const LabelTextArea = styled.label`
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / 3;
    width: 100%;
  }
`;

export const ImageWrap = styled.div`
  width: 260px;
  height: 200px;
  background-color: white;
  border: 1px solid #999;
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);

  @media screen and (min-width: ${theme.breakpoints.mobile}) {
    width: 300px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 237px;
    height: 170px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 376px;
    height: 245px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const AddImgIcon = styled(BiSolidImageAdd)`
  width: 35px;
  height: 35px;
  font-size: 12px;
  color: ${theme.colors.accentColor};
`;

export const IconWrapper = styled.div`
  position: relative;
  width: 35px;
  height: 35px;
  margin-bottom: 1px;
`;

export const AddedImgIcon = styled(BiSolidImageAlt)`
  width: 35px;
  height: 35px;
  /* font-size: 12px; */
  color: ${theme.colors.greenValid};
`;

export const CheckMark = styled(BsCheck)`
  width: 18px;
  height: 18px;
  position: absolute;
  top: 2px;
  right: 2px;
  color: #fff;
`;

export const ImagesWrap = styled.div`
  position: relative;
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 16px;
  }
`;
