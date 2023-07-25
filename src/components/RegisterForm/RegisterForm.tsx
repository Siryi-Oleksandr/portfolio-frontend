import React, { FC } from 'react';
import { Formik, Form, Field, ErrorMessage, FormikHelpers } from 'formik';
import { registerUser } from 'redux/auth/operations';
import { Btn } from 'components/Buttons/MainBtn.styled';
import { useAppDispatch } from 'redux/reduxHooks';
import { FormRegisterSchema } from 'services/yupSchemas';
import { RegisterValues } from 'types/authFormTypes';

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
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="div" />
          </div>
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
    </>
  );
};

export default RegisterForm;
