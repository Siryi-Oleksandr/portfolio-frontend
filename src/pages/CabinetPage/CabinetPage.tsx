// import { UserForm } from 'components';
import React, { FC, useEffect } from 'react';

import { CabinetUserInfo, CabinetProjectList, Loader } from 'components';
import { useAppDispatch } from 'redux/reduxHooks';
import { getUserProjects } from 'redux/project/operations';

import { useAuth, useProjects } from 'hooks';
// import { useParams } from 'react-router-dom';

const CabinetPage: FC = () => {
  const { userProjects, isProjectLoading ,isProjectCreating} = useProjects();
  let { user, isAuthLoading } = useAuth();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (user?._id) {
      dispatch(getUserProjects(user._id));
    }
  }, [dispatch, user]);

  return (
    <>
      {(isAuthLoading || isProjectLoading || isProjectCreating) && <Loader />}
      <CabinetUserInfo />
      <CabinetProjectList user={user ? user : {}} projects={userProjects} />
    </>
  );
};

export default CabinetPage;
