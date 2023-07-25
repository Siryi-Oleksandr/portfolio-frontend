import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { loginUser } from 'redux/auth/operations';

import { useAppDispatch } from 'redux/reduxHooks';
import { FormLoginSchema } from 'services';
import { LoginValues } from 'types/authFormTypes';
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
} from 'components/RegisterForm/RegisterForm.styled';

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const handleLoginSubmit = (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    actions.resetForm();
    dispatch(loginUser(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormLoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <StyledForm>
          <FormTitleContainer>
            <FormTitle>Log In</FormTitle>
            <FormDescription>to create your own own portfolio!</FormDescription>
          </FormTitleContainer>
          <InputsContainer>
            <Label>
              <StyledField type="email" name="email" />
              <StyledLabel>Email</StyledLabel>
              <ErrorMessage name="email" component={StyledErrorMessage} />
            </Label>
            <Label>
              <StyledField type="password" name="password" />
              <StyledLabel>Password</StyledLabel>
              <ErrorMessage name="password" component={StyledErrorMessage} />
            </Label>
          </InputsContainer>
          <SubmitBtn type="submit">Login</SubmitBtn>
          <RedirectContainer>
            <RedirectMeta>Don't have an account?</RedirectMeta>
            <RedirectLink to={'/register'}>Sign Up</RedirectLink>
          </RedirectContainer>
        </StyledForm>
      </Formik>
    </>
  );
};

export default LoginForm;
