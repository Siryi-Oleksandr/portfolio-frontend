// import { UserForm } from 'components';
import React, { FC } from 'react';
import { CabinetUserInfo, CabinetProjectList } from 'components';

const CabinetPage: FC = () => {
  return (
    <>
      <CabinetUserInfo />
      <CabinetProjectList />
    </>
  );
};

export default CabinetPage;
