// import { UserForm } from 'components';
import React, { FC } from 'react';

import { CabinetUserInfo, CabinetProjectList, Loader } from 'components';

import { useProjects, useSearch } from 'hooks';

const CabinetPage: FC = () => {
  const { userProjects, isProjectLoading } = useProjects();
  const { user, isSearchLoading } = useSearch();

  return (
    <>
      {(isSearchLoading || isProjectLoading) && <Loader />}
      <CabinetUserInfo />
      <CabinetProjectList user={user ? user : {}} projects={userProjects} />
    </>
  );
};

export default CabinetPage;
