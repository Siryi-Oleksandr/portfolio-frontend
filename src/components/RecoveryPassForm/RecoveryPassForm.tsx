import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { useAppDispatch } from 'redux/reduxHooks';
import { RestorePassValues } from 'types/changePassTypes';
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
} from 'components/RegisterForm/RegisterForm.styled';
import { forgotPassword } from 'redux/auth/operations';
import { FormResetSchema } from 'services';

const RecoveryPassForm: FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: RestorePassValues = {
    email: '',
  };

  const handleSendEmail = (
    values: RestorePassValues,
    actions: FormikHelpers<RestorePassValues>
  ) => {
    actions.resetForm();
    dispatch(forgotPassword(values));
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormResetSchema}
        onSubmit={handleSendEmail}
      >
        <StyledForm>
          <FormTitleContainer>
            <FormTitle>Recovery Password</FormTitle>
            <FormDescription>enter your email</FormDescription>
          </FormTitleContainer>
          <InputsContainer>
            <Label>
              <StyledField type="email" name="email" />
              <StyledLabel>Email</StyledLabel>
              <ErrorMessage name="email" component={StyledErrorMessage} />
            </Label>
          </InputsContainer>
          <SubmitBtn type="submit">Send</SubmitBtn>
          <RedirectContainer>
            <RedirectLink to={'/'}>Go Home</RedirectLink>
          </RedirectContainer>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RecoveryPassForm;
