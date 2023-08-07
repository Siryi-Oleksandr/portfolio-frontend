import * as Yup from 'yup';

export const regExp =
  /^([A-z0-9_-]+\.)*[A-z0-9_-]+@[A-z0-9_-]+(\.[A-z0-9_-]+)*\.[A-z]{2,6}$/;

const phoneRegexp = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;

const telegramRegexp =
  /(https?:\/\/)?(www[.])?(telegram|t)\.me\/([a-zA-Z0-9_-]*)\/?$/;

const linkedinRegexp =
  /^(http(s)?:\/\/)?([\w]+\.)?linkedin\.com\/(pub|in|profile)\/([-a-zA-Z0-9]+)\/*/;

const githubRegexp = /^(?:https?:\/\/)?(?:www\.)?github\.com\/[a-zA-Z\d-]+$/i;

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

export const FormUserUpdateSchema = Yup.object().shape({
  name: Yup.string().min(2).max(35).required('Required'),
  email: Yup.string()
    .matches(regExp, 'Invalid email address')
    .required('Required'),
  surname: Yup.string().min(2).max(35),
  profession: Yup.string().min(2).max(35),
  phone: Yup.string().matches(phoneRegexp, 'Invalid phone'),
  telegram: Yup.string().matches(telegramRegexp, 'Invalid Telegram address'),
  linkedinURL: Yup.string().matches(linkedinRegexp, 'Invalid Linkedin address'),
  gitHubURL: Yup.string().matches(githubRegexp, 'Invalid GitHub address'),
  technicalStack: Yup.string().min(2).max(150),
  summary: Yup.string().min(2).max(500),
});

export const FormAddProjectUpdateSchema = Yup.object().shape({
  projectTitle: Yup.string().min(3).max(100).required(),
  technicalStack: Yup.string().min(3).max(100).required(),
  projectSubTitle: Yup.string(),
  projectLink: Yup.string().required(),
  codeLink: Yup.string().required(),
  aboutProject: Yup.string().min(3).max(1000).required(),
  summary: Yup.string().min(2).max(500),
});
