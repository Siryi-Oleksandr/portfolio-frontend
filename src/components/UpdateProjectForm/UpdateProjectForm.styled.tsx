import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { theme } from 'theme';
import { Field, Form } from 'formik';
import { BiSolidImageAdd } from 'react-icons/bi';
import { BiSolidImageAlt } from 'react-icons/bi';
import { BsCheck } from 'react-icons/bs';
import { RiImageEditFill } from 'react-icons/ri';
import { BiReset } from 'react-icons/bi';

export const StyledAddProjectForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 36px;
  margin-top: 25px;

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

export const ProjectLabel = styled.span`
  position: absolute;
  top: -40px;
  left: 0;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.primary_text_switch};
  transition: all 250ms ease-in-out;

  @media screen and (min-width: 375px) {
    top: -30px;
    right: 0;
  }
`;

export const Label = styled.label`
  position: relative;
`;

export const LabelTextArea = styled.label`
  position: relative;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    grid-column: 1 / 3;
    width: 100%;
  }
`;

export const FileLabel = styled.label<{
  editMode: boolean;
  projectImg: string;
  placeholder: string;
}>`
  position: relative;
  cursor: pointer;
  pointer-events: ${({ editMode, projectImg, placeholder }) =>
    !editMode ? 'none' : projectImg === placeholder ? 'auto' : 'none'};
`;

export const ResetBtn = styled.button<{ editMode: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: -53px;
  right: 0;
  border: 2px solid transparent;
  width: 105px;
  height: 45px;
  padding-right: 5px;
  border-radius: 4px;
  background-color: orange;
  cursor: pointer;

  font-family: ${theme.fonts.text};
  font-size: ${theme.fontSizes.m};

  transition: ${theme.transition.hover};

  :disabled {
    background-color: ${theme.colors.gray};
    pointer-events: none;
  }

  :hover,
  :focus {
    border-color: ${theme.colors.accentColor};
  }

  :hover svg,
  :focus svg {
    transform: ${({ editMode }) =>
      editMode ? 'rotate(-360deg)' : 'scale(1.2)'};
  }

  @media screen and (min-width: 375px) {
    width: 150px;
    height: 30px;
    top: -35px;
    right: 0;
    gap: 5px;
    padding: 0;
  }
`;

export const EditIcon = styled(RiImageEditFill)`
  width: 30px;
  height: 30px;

  transition: transform 250ms ease;

  @media screen and (min-width: 375px) {
    width: 23px;
    height: 23px;
  }
`;

export const ResetIcon = styled(BiReset)`
  width: 35px;
  height: 35px;

  transition: transform 250ms ease;

  @media screen and (min-width: 375px) {
    width: 23px;
    height: 23px;
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
    width: 193px;
    height: 130px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    width: 306px;
    height: 205px;
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
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  @media screen and (min-width: 375px) {
    margin-top: 20px;
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    flex-direction: row;
    width: 595px;
    margin-top: 25px;
  }

  @media screen and (min-width: ${theme.breakpoints.desktop}) {
    gap: 16px;
    width: 950px;
  }
`;

export const Wrapper = styled.div`
  grid-column: 1 / 3;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
