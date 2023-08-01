import { ChangeEvent, FC } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import {
  StyledErrorMessage,
  SubmitBtn,
} from 'components/RegisterForm/RegisterForm.styled';
import {
  AddIcon,
  Avatar,
  InputsContainer,
  Label,
  StyledField,
  StyledLabel,
  StyledUserForm,
} from './UserForm.styled';
import { IUpdateUser } from 'redux/reduxTypes';
import { updateUser } from 'redux/auth/operations';
import { toast } from 'react-hot-toast';

type UserFormPorps = {
  onClose: any;
};

const UserForm: FC<UserFormPorps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const user: IUser = useAppSelector(selectUser);

  const initialValues: IUpdateUser = {
    avatarURL: user.avatarURL,
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
    console.log(values);
    actions.resetForm();
    dispatch(updateUser(values));
    onClose();
  };

  const handleAvatarUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files;
    if (!files || files.length === 0) {
      toast.error('Файл не выбран!');
      return;
    }

    const file = files[0];
    if (file.type !== 'image/png' && file.type !== 'image/jpeg') {
      toast.error(
        'Недопустимый формат файла! Пожалуйста, выберите изображение в формате PNG или JPEG!'
      );
      return;
    }

    if (file.size >= 2000000) {
      toast.error(
        'Выбранный файл слишком большой! Пожалуйста, выберите файл размером менее 2 МБ!'
      );
      return;
    }

    console.log(file);
    if (file) {
      // setFieldValue(URL.createObjectURL(file));
    }
  };

  return (
    <>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {props => (
          <StyledUserForm>
            <InputsContainer>
              <Avatar>
                <img src={initialValues.avatarURL} alt="Avatar" />
              </Avatar>
              <Label>
                <input
                  name="avatarURL"
                  type="file"
                  onChange={handleAvatarUpload}
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
                  style={{ height: ' 150px' }}
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
