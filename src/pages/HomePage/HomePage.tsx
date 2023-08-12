import React, { FC, useEffect } from 'react';
import { Hero, About, ScrollToTop } from 'components';
import { useSearchParams } from 'react-router-dom';
import { updateAccessToken, updateLoginGoogle } from 'redux/auth/authSlice';
import { useAppDispatch } from 'redux/reduxHooks';

const HomePage: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const accessToken = searchParams.get('accessToken');
    const refreshToken = searchParams.get('refreshToken');

    if (accessToken) {
      dispatch(updateAccessToken(accessToken));
      dispatch(updateLoginGoogle());
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    }
  }, [dispatch, searchParams]);

  return (
    <>
      <Hero />
      <About />
      <ScrollToTop />
    </>
  );
};

export default HomePage;
