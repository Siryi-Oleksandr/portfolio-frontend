import React, { FC } from 'react';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { registerUser } from 'redux/auth/operations';
import { Btn } from 'components/Buttons/MainBtn.styled';
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
} from './RegisterForm.styled';
import { Link } from 'react-router-dom';

const RegisterForm: FC = () => {
  const dispatch = useAppDispatch();

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
          <FormTitle>Sign Up</FormTitle>
          <FormDescription>
            Lorem ipsum dolor sit amet adipiscing elit.
          </FormDescription>
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
            <StyledField type="password" name="password" />
            <StyledLabel>Password</StyledLabel>
            <ErrorMessage name="password" component={StyledErrorMessage} />
          </Label>
          <Btn type="submit">Register</Btn>
          <div>
            <p>Already have an account?</p>
            <Link to={'/login'}>Log In</Link>
          </div>
        </StyledForm>
      </Formik>
    </>
  );
};

export default RegisterForm;
