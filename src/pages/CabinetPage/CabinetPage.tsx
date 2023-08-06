// import { UserForm } from 'components';
import React, { FC, useEffect } from 'react';

import { CabinetUserInfo, CabinetProjectList, Loader } from 'components';
import { useAppDispatch } from 'redux/reduxHooks';
import { getUserProjects } from 'redux/project/operations';

import { useAuth, useProjects } from 'hooks';
// import { useParams } from 'react-router-dom';

const CabinetPage: FC = () => {
  const { userProjects, isProjectLoading } = useProjects();
  let { user, isAuthLoading } = useAuth();
  // const { user, isSearchLoading } = useSearch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    // dispatch(getUserById(userId));
    dispatch(getUserProjects(user._id));
  }, [dispatch, user]);

  return (
    <>
      {(isAuthLoading || isProjectLoading) && <Loader />}
      <CabinetUserInfo />
      <CabinetProjectList user={user ? user : {}} projects={userProjects} />
    </>
  );
};

export default CabinetPage;
