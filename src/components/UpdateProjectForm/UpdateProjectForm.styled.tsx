import styled from '@emotion/styled';
import { theme } from 'theme';
import { Field, Form } from 'formik';
import { BiSolidImageAdd } from 'react-icons/bi';

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
  cursor: pointer;
  color: ${theme.colors.accentColor};
`;

export const ImagesWrap = styled.div`
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
