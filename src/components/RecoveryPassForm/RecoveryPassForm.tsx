import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
// import { useAppDispatch } from 'redux/reduxHooks';
// import { FormLoginSchema } from 'services';
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

const RecoveryPassForm: FC = () => {
  //   const dispatch = useAppDispatch();

  const initialValues: RestorePassValues = {
    email: '',
  };

  const handleLoginSubmit = (
    values: RestorePassValues,
    actions: FormikHelpers<RestorePassValues>
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
