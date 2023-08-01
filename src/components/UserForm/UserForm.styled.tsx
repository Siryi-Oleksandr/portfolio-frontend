import styled from '@emotion/styled';
import { Field, Form } from 'formik';
import { AiFillPlusCircle } from 'react-icons/ai';
import { theme } from 'theme';

export const StyledUserForm = styled(Form)`
  width: 500px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  @media screen and (max-width: 375px) {
    max-width: 300px;
  }
  @media screen and (min-width: 376px) and (max-width: 600px) {
    width: 360px;
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
  width: 480px;
  height: 48px;
  padding: 10px 5px;
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

export const Avatar = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  border: 2px solid #3e85f3;
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
  left: calc(50% + 45px);
  top: -80px;
  width: 28px;
  height: 28px;
  font-size: 12px;
  cursor: pointer;
  color: #3e85f3;
`;
