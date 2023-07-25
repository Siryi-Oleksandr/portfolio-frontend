import * as Yup from 'yup';

export const regExp =
  /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/;

export const FormRegisterSchema = Yup.object().shape({
  name: Yup.string().min(2).max(35).required('Required'),
  email: Yup.string()
    .matches(regExp, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});

export const FormLoginSchema = Yup.object().shape({
  email: Yup.string()
    .matches(regExp, 'Invalid email address')
    .required('Required'),
  password: Yup.string()
    .min(6, 'Password must be 6 characters long')
    .required('Required'),
});
