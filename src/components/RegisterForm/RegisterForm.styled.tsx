import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { theme } from 'theme';
import { Btn } from 'components/Buttons/MainBtn.styled';
import { Link } from 'react-router-dom';

export const StyledForm = styled(Form)`
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 90px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
  @media screen and (max-width: 375px) {
    max-width: 300px;
  }
  @media screen and (min-width: 376px) and (max-width: 600px) {
    width: 360px;
  }
  @media screen and (min-width: 601px) {
    width: 500px;
  }
`;

export const FormTitleContainer = styled.div`
  height: 100px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 64px;
  padding-left: 10px;
  padding-right: 10px;
  @media screen and (max-width: 375px) {
    max-width: 280px;
  }
  @media screen and (min-width: 376px) and (max-width: 600px) {
    width: 340px;
  }
  @media screen and (min-width: 601px) {
    width: 480px;
  }
`;

export const FormTitle = styled.h2`
  margin-bottom: 24px;
  font-family: ${theme.fonts.title};
  font-size: 48px;
  font-style: normal;
  color: ${theme.colors.primary_text_switch};
`;

export const FormDescription = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: ${theme.fontWeights.heading};
  font-family: ${theme.fonts.text};
  color: ${theme.colors.primary_text_switch};
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-bottom: 24px;
`;

export const StyledField = styled(Field)`
  width: 280px;
  height: 48px;
  padding: 2px 5px;
  border: 2px solid #ccc;
  background-color: ${theme.colors.textarea};
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.blackTitle};
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    border-color: ${theme.colors.accentColor};
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
  }
  &:focus ~ span {
    color: ${theme.colors.accentColor};
  }

  @media screen and (max-width: 375px) {
    max-width: 280px;
  }
  @media screen and (min-width: 376px) and (max-width: 600px) {
    width: 340px;
  }
  @media screen and (min-width: 601px) {
    width: 480px;
  }
`;

export const Label = styled.label`
  position: relative;
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
  transition: all 300ms ease-in-out;
`;

export const IconWrap = styled.div`
  position: absolute;
  top: 15px;
  left: 90%;
  font-size: 20px;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  top: -35px;
  left: 0;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.redColor};
  transition: all 300ms ease-in-out;
`;

export const SubmitBtn = styled(Btn)`
  width: 280px;
  height: 48px;
  margin-bottom: 24px;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  background-color: ${theme.colors.auth_button_background_switch};
  color: ${theme.colors.auth_button_color_switch};
  &:hover {
    transform: scale(1.02);
    background-color: ${theme.colors.accent_color_switch};
  }
  @media screen and (max-width: 375px) {
    max-width: 280px;
  }
  @media screen and (min-width: 376px) and (max-width: 600px) {
    width: 340px;
  }
  @media screen and (min-width: 601px) {
    width: 480px;
  }
`;
export const RedirectContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 7px;
`;
export const RedirectMeta = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.primary_text_switch};
`;

export const RedirectLink = styled(Link)`
  text-decoration: underline;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  font-family: ${theme.fonts.text};
  color: ${theme.colors.primary_text_switch};
  transition: all 200ms ease;
  &:hover {
    transform: scale(1.1);
    color: ${theme.colors.accentColor};
  }
`;

export const InfoWrapper = styled.div`
  position: absolute;
  top: -26px;
  right: 140px;
`;
