import { FC, useState } from 'react';
import { selectUser } from 'redux/auth/authSelectors';
import { useAppSelector } from 'redux/reduxHooks';
// import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { IUser } from '../../types/userTypes';
import { IUpdateUser } from 'redux/reduxTypes';
import { UserFormModal } from './UserFormModal/UserFormModal';



const CabinetUserInfo: FC = () => {
    // const dispatch = useAppDispatch();
    const user: IUser = useAppSelector(selectUser);
    const [showModal, setShowModal] = useState(false);

const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleShowModal = () => {
    setShowModal(true);
  };

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
    return (
        <>
            <p>User info { initialValues.email}</p>
            <button onClick={handleShowModal}> edit info</button>
            {showModal && <UserFormModal onClose={handleCloseModal} />}
        </>
    );
};

export default CabinetUserInfo;