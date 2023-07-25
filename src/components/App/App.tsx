import React, { FC, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout, NotFoundPage } from 'components';
import {
  HomePage,
  PortfolioPage,
  CabinetPage,
  SearchPage,
  AboutPage,
  ContactsPage,
  ProjectDetails,
  RegisterPage,
  LoginPage,
} from 'pages';
import GlobalStyles from 'GlobalStyle';
import { useAppDispatch, useAppSelector } from 'redux/reduxHooks';
import { currentUser } from 'redux/auth/operations';
import { selectUser } from 'redux/auth/authSelectors';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const state = useAppSelector(selectUser);

  console.log(state);
  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cabinet" element={<CabinetPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route
            path="/projectDetails/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
