import styled from '@emotion/styled';
import { Btn } from 'components/Buttons/MainBtn.styled';
import { Field, Form } from 'formik';
import { AiFillPlusCircle } from 'react-icons/ai';
import { theme } from 'theme';

export const StyledUserForm = styled(Form)`
  width: 310px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 500px;
  }

  @media screen and (max-width: ${theme.breakpoints.mobileStart}) {
    width: 250px;
  }
`;

export const InputsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-bottom: 24px;
`;

export const Label = styled.label`
  position: relative;
`;

export const StyledField = styled(Field)`
  min-width: 100%;
  height: 36px;
  padding: 6px 3px;
  border: 2px solid #ccc;
  background-color: ${theme.colors.textarea};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  font-family: ${theme.fonts.heading};
  color: ${theme.colors.blackTitle};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 250ms ease-in-out;

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    height: 48px;
    padding: 10px 5px;
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

export const Avatar = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  left: 50%;
  top: 35px;
  transform: translateX(-50%);
  background-color: white;
  border: 2px solid ${theme.colors.accentColor};
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export const AddIcon = styled(AiFillPlusCircle)`
  position: absolute;
  left: calc(50% + 55px);
  top: -50px;
  width: 28px;
  height: 28px;
  font-size: 12px;
  cursor: pointer;
  color: ${theme.colors.accentColor};
`;

export const SubmitBtn = styled(Btn)`
  width: 150px;
  height: 36px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  background-color: ${theme.colors.auth_button_background_switch};
  color: ${theme.colors.auth_button_color_switch};

  &:hover {
    transform: scale(1.02);
    background-color: ${theme.colors.accent_color_switch};
  }

  @media screen and (min-width: ${theme.breakpoints.tablet}) {
    width: 100%;
    height: 48px;
    font-size: 16px;
  }
`;
