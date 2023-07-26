import { FC } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { Formik, ErrorMessage } from 'formik';
import {
  InputsContainer,
  Label,
  StyledErrorMessage,
  StyledField,
  StyledLabel,
  SubmitBtn,
} from 'components/RegisterForm/RegisterForm.styled';
import { StyledUserForm } from './UserForm.styled';

const UserForm: FC = () => {
  const user: IUser = useAppSelector(selectUser);

  return (
    <>
      <Formik
        initialValues={{ name: user.name, email: user.email }}
        onSubmit={async values => {
          console.log(values);
          await new Promise(resolve => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
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
            <Label>
              <StyledField type="number" name="experience" />
              <StyledLabel>Experience</StyledLabel>
              <ErrorMessage component={StyledErrorMessage} name="experience" />
            </Label>
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
