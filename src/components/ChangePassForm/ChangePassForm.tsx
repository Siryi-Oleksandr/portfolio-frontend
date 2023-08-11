import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
// import { useAppDispatch } from 'redux/reduxHooks';
// import { FormLoginSchema } from 'services';
import { ChangePassValues } from 'types/changePassTypes';
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
import { usePasswordToggle } from 'hooks/usePasswordToogle';

const ChangePassForm: FC = () => {
  //   const dispatch = useAppDispatch();

  const initialValues: ChangePassValues = {
    confirmpassword: '',
    password: '',
  };
  const [passwordType, togglePassword] = usePasswordToggle();

  const handleLoginSubmit = (
    values: ChangePassValues,
    actions: FormikHelpers<ChangePassValues>
  ) => {
    actions.resetForm();
    // dispatch(loginUser(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        // validationSchema={FormLoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <StyledForm>
          <FormTitleContainer>
            <FormTitle>Change Password</FormTitle>
            <FormDescription>enter your new password</FormDescription>
          </FormTitleContainer>
          <InputsContainer>
            <Label>
              <StyledField type={passwordType} name="password" />
              <StyledLabel>Password</StyledLabel>
              <IconWrap onClick={togglePassword}>
                {passwordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage name="password" component={StyledErrorMessage} />
            </Label>
            <Label>
              <StyledField type={passwordType} name="confirmpassword" />
              <StyledLabel>Confirm Password</StyledLabel>
              <IconWrap onClick={togglePassword}>
                {passwordType === 'text' ? <IoEyeOff /> : <IoEyeOutline />}
              </IconWrap>
              <ErrorMessage
                name="confirmpassword"
                component={StyledErrorMessage}
              />
            </Label>
          </InputsContainer>
          <SubmitBtn type="submit">Send</SubmitBtn>
          <RedirectContainer>
            <RedirectLink to={'/login'}>Log In</RedirectLink>
          </RedirectContainer>
        </StyledForm>
      </Formik>
    </>
  );
};

export default ChangePassForm;
