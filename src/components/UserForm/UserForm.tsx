import { ChangeEvent, FC, useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { StyledErrorMessage } from 'components/RegisterForm/RegisterForm.styled';
import {
  AddIcon,
  Avatar,
  InputsContainer,
  Label,
  StyledField,
  StyledLabel,
  StyledUserForm,
  SubmitBtn,
} from './UserForm.styled';
import { IUpdateUser } from 'redux/reduxTypes';
import { updateUser } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';
import { FormUserUpdateSchema } from 'services/yupSchemas';

type UserFormPorps = {
  onClose: () => void;
};

const UserForm: FC<UserFormPorps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const user: IUser = useAppSelector(selectUser);
  const [userAvatar, setUserAvatar] = useState<any>(user.avatarURL);

  const initialValues: IUpdateUser = {
    avatarURL: user.avatarURL || '',
    name: user.name,
    surname: user.surname || '',
    email: user.email,
    profession: user.profession || '',
    experience: String(user.experience) || '',
    phone: user.phone || '',
    telegram: user.telegram || '',
    linkedinURL: user.linkedinURL || '',
    gitHubURL: user.gitHubURL || '',
    technicalStack: user.technicalStack || '',
    summary: user.summary || '',
  };

  const handleSubmit = (
    values: IUpdateUser,
    actions: FormikHelpers<IUpdateUser>
  ) => {
    actions.resetForm();
    dispatch(updateUser(values));
    onClose();
  };

  const handleAvatarUpload = (
    event: ChangeEvent<HTMLInputElement>,
    formikProps: any
  ) => {
    const files = event.currentTarget.files;
    if (!files || files.length === 0) {
      toast.error('File not selected!');
      return;
    }

    const file = files[0];
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      toast.error(`Invalid file format! Please choose a PNG or JPEG image!`);
      return;
    }

    if (file.size >= 1000000) {
      toast.error(
        `Selected file is too large! Please select a file under 1MB in size!`
      );
      return;
    }

    if (file) {
      setUserAvatar(URL.createObjectURL(file));
      formikProps.setFieldValue('avatar', file);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={FormUserUpdateSchema}
        onSubmit={handleSubmit}
      >
        {props => (
          <StyledUserForm>
            <InputsContainer>
              <Avatar>
                <img src={userAvatar} alt="Avatar" />
              </Avatar>
              <Label>
                <input
                  name="avatar"
                  type="file"
                  onChange={event => handleAvatarUpload(event, props)}
                  style={{ display: 'none' }}
                />
                <AddIcon />
              </Label>
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
                <ErrorMessage
                  component={StyledErrorMessage}
                  name="profession"
                />
              </Label>
              <Label>
                <StyledField
                  type="number"
                  min="0"
                  step="0.5"
                  name="experience"
                />
                <StyledLabel>Experience (years)</StyledLabel>
                <ErrorMessage
                  component={StyledErrorMessage}
                  name="experience"
                />
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
                <ErrorMessage
                  component={StyledErrorMessage}
                  name="linkedinURL"
                />
              </Label>
              <Label>
                <StyledField type="text" name="gitHubURL" />
                <StyledLabel>GitHub</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="gitHubURL" />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="technicalStack"
                  placeholder="HTML, CSS, JavaScript, React."
                />
                <StyledLabel>TechnicalStack</StyledLabel>
                <ErrorMessage
                  component={StyledErrorMessage}
                  name="technicalStack"
                />
              </Label>
              <Label>
                <StyledField
                  component="textarea"
                  type="text"
                  onChange={props.handleChange}
                  value={props.values.summary || ''}
                  name="summary"
                  style={{ height: '150px' }}
                />
                <StyledLabel>Summary</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="summary" />
              </Label>
            </InputsContainer>
            <SubmitBtn type="submit">Update info</SubmitBtn>
          </StyledUserForm>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
