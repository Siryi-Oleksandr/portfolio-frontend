import { FC, useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppSelector } from 'redux/reduxHooks';
// import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { IUser } from 'types/userTypes';
import { IUpdateUser } from 'redux/reduxTypes';
import { UserFormModal } from '../UserFormModal/UserFormModal';
import {
  UserInfoContainer,
  Avawrap,
  AvatarImg,
  EditBtn,
  TextName,
  LogoWrap,
  AboutWrap,
  AboutText,
  TextProfession,
  SubscriptionBtn,
  CenterContainer,
} from './UserInfo.styled';
import { IconContext } from 'react-icons';
import { FaEdit } from 'react-icons/fa';
import { SubscriptionModal } from '../SubscriptionModal/SubscriptionModal';
import Container from 'components/Container/Container';

const UserInfo: FC = () => {
  // const dispatch = useAppDispatch();
  const user: IUser = useAppSelector(selectUser);
  const [showModal, setShowModal] = useState(false);
  const [showSubscriptionModal, setShowSubscriptionModal] = useState(false);

  const handleCloseModal = () => {
    setShowModal(false);
    setShowSubscriptionModal(false);
    document.body.style.overflow = 'auto';
  };

  const handleShowModal = () => {
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };
  const handleShowSubscriptionModal = () => {
    setShowSubscriptionModal(true);
    document.body.style.overflow = 'hidden';
  };

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
    summary: user.summary || '',
    technicalStack: stringStack,
  };
  return (
    <IconContext.Provider value={{ className: 'slider-icons' }}>
      <UserInfoContainer>
        <Container>
          <CenterContainer>
            <LogoWrap>
              <SubscriptionBtn onClick={handleShowSubscriptionModal}>
                {user.subscription}
              </SubscriptionBtn>
              <Avawrap>
                <AvatarImg
                  src={initialValues?.avatarURL}
                  alt="avatar"
                  width="28"
                  height="28"
                />
              </Avawrap>
              <TextName>{initialValues.name}</TextName>
              <TextProfession>{initialValues.profession}</TextProfession>
              <EditBtn onClick={handleShowModal}>
                Edit
                <FaEdit size="32px" />
              </EditBtn>
            </LogoWrap>
            <AboutWrap>
              <AboutText>{initialValues.summary}</AboutText>
            </AboutWrap>

            {showModal && <UserFormModal onClose={handleCloseModal} />}

            {showSubscriptionModal && (
              <SubscriptionModal onClose={handleCloseModal} />
            )}
          </CenterContainer>
        </Container>
      </UserInfoContainer>
      {/* <p>User info { initialValues.email}</p>
            <button onClick={handleShowModal}> edit info</button>
            {showModal && <UserFormModal onClose={handleCloseModal} />} */}
    </IconContext.Provider>
  );
};

export default UserInfo;
