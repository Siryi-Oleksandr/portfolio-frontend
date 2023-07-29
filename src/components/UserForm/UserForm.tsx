import { FC } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import {
  InputsContainer,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledLabel,
  SubmitBtn,
} from 'components/RegisterForm/RegisterForm.styled';
import { StyledUserForm } from './UserForm.styled';
import { IUpdateUser } from 'redux/reduxTypes';
import { updateUser } from 'redux/auth/operations';

type UserFormPorps = {
    onClose: any;
} 

const UserForm: FC<UserFormPorps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const user: IUser = useAppSelector(selectUser);

  const initialValues: IUpdateUser = {
    name: user.name,
    surname: user.surname || '',
    email: user.email,
    profession: user.profession || '',
    experience: String(user.experience) || '',
    phone: user.phone || '',
    telegram: user.telegram || '',
    linkedinURL: user.linkedinURL || '',
    gitHubURL: user.gitHubURL || '',
    summary: user.summary || '',
  };

  const handleSubmit = (
    values: IUpdateUser,
    actions: FormikHelpers<IUpdateUser>
  ) => {
    console.log(values);
    actions.resetForm();
    dispatch(updateUser(values));
    onClose();
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <StyledUserForm>
          <InputsContainer>
            <Label>
              <StyledField type="text" name="name" />
              <StyledLabel>Name</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="name" />
            </Label>
            <Label>
              <StyledField type="text" name="surname" />
              <StyledLabel>Surname</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="surname" />
            </Label>
            <Label>
              <StyledField type="email" name="email" />
              <StyledLabel>Email</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="email" />
            </Label>
            <Label>
              <StyledField type="text" name="profession" />
              <StyledLabel>Profession</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="profession" />
            </Label>
            {/* <Label>
              <StyledField type="number" min="0" step="0.5" name="experience" />
              <StyledLabel>Experience</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="experience" />
            </Label> */}
            <Label>
              <StyledField type="text" name="phone" />
              <StyledLabel>Phone</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="phone" />
            </Label>
            <Label>
              <StyledField type="text" name="telegram" />
              <StyledLabel>Telegram</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="telegram" />
            </Label>
            <Label>
              <StyledField type="text" name="linkedinURL" />
              <StyledLabel>LinkedIn</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="linkedinURL" />
            </Label>
            <Label>
              <StyledField type="text" name="gitHubURL" />
              <StyledLabel>GitHub</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="gitHubURL" />
            </Label>
            <Label>
              <StyledField type="text" name="summary" />
              <StyledLabel>Summary</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="summary" />
            </Label>
          </InputsContainer>
          <SubmitBtn type="submit">Update info</SubmitBtn>
        </StyledUserForm>
      </Formik>
    </>
  );
};

export default UserForm;
