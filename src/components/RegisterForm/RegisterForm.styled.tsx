import styled from '@emotion/styled';
import { Form, Field } from 'formik';
import { theme } from 'theme';

export const StyledForm = styled(Form)`
  width: 480px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 60px;
  padding-bottom: 90px;
  padding-left: 10px;
  padding-right: 10px;
  text-align: center;
`;

export const FormTitle = styled.h2`
  margin-bottom: 24px;
  font-family: ${theme.fonts.title};
  font-size: 48px;
  font-style: normal;
  color: ${theme.colors.primary_text_switch};
`;

export const FormDescription = styled.p`
  margin-bottom: 64px;
  font-size: 18px;
  font-style: normal;
  font-weight: ${theme.fontWeights.heading};
  font-family: ${theme.fonts.text};
  color: ${theme.colors.primary_text_switch};
`;

export const StyledField = styled(Field)`
  width: 480px;
  height: 48px;
  padding: 2px 5px;
  border: 2px solid #ccc;
  background-color: ${theme.colors.textarea};
  font-size: 16px;
  font-weight: 400;
  color: ${theme.colors.primary_text_switch};
  transition: border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease-in-out;
  &:not(:last-child) {
    margin-bottom: 56px;
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

export const Label = styled.label`
  position: relative;
  margin-bottom: 56px;
  :last-of-type {
    margin-bottom: 24px;
  }
`;

export const StyledLabel = styled.span`
  position: absolute;
  top: 0;
  left: 0;
`;

export const StyledErrorMessage = styled.p`
  position: absolute;
  top: 0;
  left: 0;
`;
