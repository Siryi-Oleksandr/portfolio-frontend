import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { registerUser } from 'redux/auth/operations';
import { useAppDispatch } from 'redux/reduxHooks';
import { FormRegisterSchema } from 'services';
import { RegisterValues } from 'types/authFormTypes';
import {
  StyledForm,
  StyledField,
  Label,
  StyledLabel,
  FormTitle,
  FormDescription,
  StyledErrorMessage,
  FormTitleContainer,
  InputsContainer,
  SubmitBtn,
  RedirectContainer,
  RedirectMeta,
  RedirectLink,
  IconWrap,
} from './RegisterForm.styled';
import { usePasswordToggle } from 'hooks/usePasswordToogle';

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();
  const [passwordType, togglePassword] = usePasswordToggle();

  const initialValues: RegisterValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleSubmit = (
    values: RegisterValues,
    actions: FormikHelpers<RegisterValues>
  ) => {
    actions.resetForm();
    dispatch(registerUser(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormRegisterSchema}
        onSubmit={handleSubmit}
      >
        <StyledForm>
          <FormTitleContainer>
            <FormTitle>Sign Up</FormTitle>
            <FormDescription>to create your own own portfolio!</FormDescription>
          </FormTitleContainer>
          <InputsContainer>
            <Label>
              <StyledField type="text" name="name" />
              <StyledLabel>Name</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="name" />
            </Label>

            <Label>
              <StyledField type="email" name="email" />
              <StyledLabel>Email</StyledLabel>
              <ErrorMessage name="email" component={StyledErrorMessage} />
            </Label>
            <Label>
              <StyledField type={passwordType} name="password" />
              <StyledLabel>Password</StyledLabel>
              <ErrorMessage name="password" component={StyledErrorMessage} />
              <IconWrap onClick={togglePassword}>
                {passwordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
            </Label>
          </InputsContainer>
          <SubmitBtn type="submit">Register</SubmitBtn>
          <RedirectContainer>
            <RedirectMeta>Already have an account?</RedirectMeta>
            <RedirectLink to={'/login'}>Log In</RedirectLink>
          </RedirectContainer>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;