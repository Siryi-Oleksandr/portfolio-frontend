import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { loginUser, logoutUser } from 'redux/auth/operations';
import { Btn } from 'components/Buttons/MainBtn.styled';
import { useAppDispatch } from 'redux/reduxHooks';
import { FormLoginSchema } from 'services/yupSchemas';
import { LoginValues } from 'types/authFormTypes';

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
    console.log('wtf?');
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormLoginSchema}
        onSubmit={handleLoginSubmit}
      >
        <Form>
          <div>
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
          </div>
          <div>
            <Btn type="submit">Login</Btn>
          </div>
        </Form>
      </Formik>
      <button type="button" onClick={handleLogout}>
        Logout
      </button>
    </>
  );
};

export default LoginForm;
