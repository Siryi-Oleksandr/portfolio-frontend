import { FC, useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { Formik, ErrorMessage, FormikHelpers } from 'formik';
import { AiFillDelete } from 'react-icons/ai';
import { StyledErrorMessage } from 'components/RegisterForm/RegisterForm.styled';
import { InfoPercentage } from 'components';
import {
  AddIcon,
  Avatar,
  DeleteButton,
  InputsContainer,
  Label,
  StyledField,
  StyledLabel,
  StyledUserForm,
  SubmitBtn,
} from './UserForm.styled';
import { IUpdateUser } from 'redux/reduxTypes';
import { updateUser } from 'redux/auth/operations';
import { FormUserUpdateSchema } from 'services/yupSchemas';
import { handleFormikImageUpload } from 'services';
import { useDeleteModal } from 'hooks/useDeleteModal';
import { DeleteModal } from 'components/Cabinet/DeleteModal/DeleteModal';

type UserFormPorps = {
  onClose: () => void;
};

const UserForm: FC<UserFormPorps> = ({ onClose }) => {
  const dispatch = useAppDispatch();
  const user: IUser = useAppSelector(selectUser);
  const [userAvatar, setUserAvatar] = useState<any>(user.avatarURL);
  const [isFormChanged, setIsFormChanged] = useState<boolean>(false);
  const { showDeleteModal, handleCloseDeleteModal, handleShowDeleteModal } =
    useDeleteModal();

  let stringStack = '';

  if (user.technicalStack !== undefined) {
    stringStack = user.technicalStack.join(', ');
  }

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
    technicalStack: stringStack || '',
    summary: user.summary || '',
  };

  const handleSubmit = (
    values: IUpdateUser,
    actions: FormikHelpers<IUpdateUser>
  ) => {
    actions.resetForm();
    dispatch(updateUser(values));
    setIsFormChanged(false);
    onClose();
  };

  const handleInputChange = (
    event: { target: { name: string; value: string } },
    props: { setFieldValue: (arg0: string, arg1: string) => void }
  ) => {
    const { name, value } = event.target;
    props.setFieldValue(name, value);
    setIsFormChanged(true);
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
              <InfoPercentage user={user} />
              <Avatar>
                <img src={userAvatar} alt="Avatar" />
              </Avatar>
              <Label>
                <input
                  name="avatar"
                  type="file"
                  onChange={event => {
                    handleFormikImageUpload(
                      event,
                      props,
                      'avatar',
                      setUserAvatar
                    );
                    setIsFormChanged(true);
                  }}
                  style={{ display: 'none' }}
                />
                <AddIcon />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="name"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>Name</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="name" />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="surname"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>Surname</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="surname" />
              </Label>
              <Label>
                <StyledField
                  type="email"
                  name="email"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>Email</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="email" />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="profession"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
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
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>Experience (years)</StyledLabel>
                <ErrorMessage
                  component={StyledErrorMessage}
                  name="experience"
                />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="phone"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>Phone</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="phone" />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="telegram"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>Telegram</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="telegram" />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="linkedinURL"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>LinkedIn</StyledLabel>
                <ErrorMessage
                  component={StyledErrorMessage}
                  name="linkedinURL"
                />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="gitHubURL"
                  onChange={(event: any) => handleInputChange(event, props)}
                />
                <StyledLabel>GitHub</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="gitHubURL" />
              </Label>
              <Label>
                <StyledField
                  type="text"
                  name="technicalStack"
                  placeholder="HTML, CSS, JavaScript, React"
                  onChange={(event: any) => handleInputChange(event, props)}
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
                  onChange={(event: any) => handleInputChange(event, props)}
                  value={props.values.summary || ''}
                  name="summary"
                  style={{ height: '150px' }}
                />
                <StyledLabel>Summary</StyledLabel>
                <ErrorMessage component={StyledErrorMessage} name="summary" />
              </Label>
            </InputsContainer>
            <SubmitBtn type="submit" disabled={!isFormChanged}>
              Update info
            </SubmitBtn>
            {showDeleteModal && (
              <DeleteModal
                onClose={handleCloseDeleteModal}
                id={user._id}
                title={user.name}
                content={'account'}
              />
            )}
            <DeleteButton onClick={handleShowDeleteModal} type="button">
              Delete Account
              <AiFillDelete className="bucket" />
            </DeleteButton>
          </StyledUserForm>
        )}
      </Formik>
    </>
  );
};

export default UserForm;
