import React, { FC, useState } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import { useAppDispatch } from 'redux/reduxHooks';
import { FormResetSchema } from 'services';
import { IChangePassValues } from 'types/changePassTypes';
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
  RedirectLink,
  IconWrap,
} from 'components/RegisterForm/RegisterForm.styled';
import { resetPassword } from 'redux/auth/operations';
import { useNavigate } from 'react-router-dom';

type Props = {
  token: string;
};

const ChangePassForm: FC<Props> = ({ token }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const initialValues: IChangePassValues = {
    password: '',
    confirmPassword: '',
  };
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const handleTogglePassword = (field: string) => {
    if (field === 'password') {
      setPasswordVisible(!passwordVisible);
    } else if (field === 'confirmPassword') {
      setConfirmPasswordVisible(!confirmPasswordVisible);
    }
  };

  const handleResetPassword = async (
    values: IChangePassValues,
    actions: FormikHelpers<IChangePassValues>
  ) => {
    const res = await dispatch(
      resetPassword({ resetToken: token, newPassword: values.password })
    );

    if (res.type === 'auth/resetPassword/fulfilled') {
      navigate('/login', { replace: true });
      actions.resetForm();
    }
    actions.setSubmitting(false);
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormResetSchema}
        onSubmit={handleResetPassword}
      >
        <StyledForm>
          <FormTitleContainer>
            <FormTitle>Change Password</FormTitle>
            <FormDescription>Enter your new password</FormDescription>
          </FormTitleContainer>
          <InputsContainer>
            <Label>
              <StyledField
                type={passwordVisible ? 'text' : 'password'}
                name="password"
              />
              <StyledLabel>Password</StyledLabel>
              <IconWrap onClick={() => handleTogglePassword('password')}>
                {passwordVisible ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="password" component={StyledErrorMessage} />
            </Label>
            <Label>
              <StyledField
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
              />
              <StyledLabel>Confirm Password</StyledLabel>
              <IconWrap onClick={() => handleTogglePassword('confirmPassword')}>
                {confirmPasswordVisible ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage
                name="confirmPassword"
                component={StyledErrorMessage}
              />
            </Label>
          </InputsContainer>
          <SubmitBtn type="submit">Change</SubmitBtn>
          <RedirectContainer>
            <RedirectLink to={'/login'}>Log In</RedirectLink>
          </RedirectContainer>
        </StyledForm>
      </Formik>
    </>
  );
};

export default ChangePassForm;
