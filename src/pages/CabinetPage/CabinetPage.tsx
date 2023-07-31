// import { UserForm } from 'components';
import React, { FC } from 'react';
import CabinetUserInfo from 'components/Cabinet/CabinetUserInfo/CabinetUserInfo';
import CabinetProjectList from 'components/Cabinet/CabinetProjectList/CabinetProjectList';

const CabinetPage: FC = () => {
  return (
    <>
      <CabinetUserInfo />
      <CabinetProjectList />
    </>
  );
};

export default CabinetPage;
