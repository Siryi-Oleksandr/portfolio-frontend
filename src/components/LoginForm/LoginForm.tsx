import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { loginUser } from 'redux/auth/operations';
import { Btn } from 'components/Buttons/MainBtn.styled';
import { useAppDispatch } from 'redux/reduxHooks';

const regExp =
  /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/;

const FormSchema = Yup.object().shape({
  name: Yup.string().min(2).max(35).required('Required'),
  email: Yup.string()
    .matches(regExp, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

interface LoginValues {
  email: string;
  password: string;
}

const LoginForm: FC = () => {
  const dispatch = useAppDispatch();

  const initialValues: LoginValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (
    values: LoginValues,
    actions: FormikHelpers<LoginValues>
  ) => {
    actions.resetForm();
    try {
      await dispatch(loginUser(values));
    } catch (error) {}
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
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
          <Btn type="submit">Register</Btn>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
