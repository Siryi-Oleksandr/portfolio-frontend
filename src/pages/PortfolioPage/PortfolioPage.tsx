import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader, Portfolio } from 'components';
import { useAppDispatch } from 'redux/reduxHooks';
import { getUserById } from 'redux/searchUsers/operations';
import { getUserProjects } from 'redux/project/operations';
import { useProjects, useSearch, useViewportWidth } from 'hooks';

const PortfolioPage: FC = () => {
  const [isGuest, setIsGuest] = useState(false);
  let { userId = 'example' } = useParams();
  const { projects, isProjectLoading } = useProjects();
  const { user, isSearchLoading } = useSearch();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userId === 'example') {
      return setIsGuest(true);
    }
    setIsGuest(false);
    dispatch(getUserById(userId));
    dispatch(getUserProjects(userId));
  }, [dispatch, userId]);

  return (
    <>
      {(isSearchLoading || isProjectLoading) && <Loader />}
      {isGuest ? (
        <p>Заглушка</p>
      ) : (
        <Portfolio user={user ? user : {}} projects={projects} />
      )}
    </>
  );
};

export default PortfolioPage;
