import React, { FC, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Portfolio } from 'components';
import { useAppDispatch } from 'redux/reduxHooks';
import { getUserById } from 'redux/searchUsers/operations';
import { getUserProjects } from 'redux/project/operations';
import { useProjects, useSearch } from 'hooks';

const PortfolioPage: FC = () => {
  let { userId = '64d4797b379a5ea8b43b84d3' } = useParams();
  const { userProjects, isProjectLoading } = useProjects();
  const { user, isSearchLoading } = useSearch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUserById(userId));
    dispatch(getUserProjects(userId));
  }, [dispatch, userId]);

  return (
    <>
      {(isSearchLoading || isProjectLoading) && <Loader />}
      <Portfolio user={user ? user : {}} projects={userProjects} />
    </>
  );
};

export default PortfolioPage;
