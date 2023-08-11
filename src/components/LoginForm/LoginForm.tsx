import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
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
  IconWrap,
  RecoverWrapper,
} from 'components/RegisterForm/RegisterForm.styled';
import { usePasswordToggle } from 'hooks/usePasswordToogle';

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };
  const [passwordType, togglePassword] = usePasswordToggle();

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
            <FormDescription>to create your own portfolio!</FormDescription>
          </FormTitleContainer>
          <InputsContainer>
            <Label>
              <StyledField type="email" name="email" />
              <StyledLabel>Email</StyledLabel>
              <ErrorMessage name="email" component={StyledErrorMessage} />
            </Label>
            <Label>
              <StyledField type={passwordType} name="password" />
              <StyledLabel>Password</StyledLabel>
              <IconWrap onClick={togglePassword}>
                {passwordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="password" component={StyledErrorMessage} />
            </Label>
          </InputsContainer>
          <RecoverWrapper>
            <RedirectLink to={'/recoveryPassword'}>
              Forgot your password?
            </RedirectLink>
          </RecoverWrapper>
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
