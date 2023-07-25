import React, { FC, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'redux/reduxHooks';
import {
  Layout,
  Loader,
  NotFoundPage,
  PublicRoute,
  PrivateRoute,
} from 'components';
import {
  HomePage,
  PortfolioPage,
  CabinetPage,
  SearchPage,
  ContactsPage,
  ProjectDetails,
  RegisterPage,
  LoginPage,
} from 'pages';
import GlobalStyles from 'GlobalStyle';
import { useAppDispatch } from 'redux/reduxHooks';
import { currentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const isAuthLoading = useAppSelector(selectAuthIsLoading);
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(currentUser());
  }, [dispatch]);

  return (
    <Suspense fallback={<Loader />}>
      {isAuthLoading && <Loader />}
      {/* {projectsIsLoading && <Loader />} */}
      {isRefreshing ? (
        <Loader />
      ) : (
        <>
          <GlobalStyles />
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* <Route path="/" element={<PublicRoute />}> */}
              <Route index element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/portfolio/:userId" element={<PortfolioPage />} />
              <Route
                path="/projectDetails/:projectId"
                element={<ProjectDetails />}
              />
              <Route path="/contacts" element={<ContactsPage />} />
              {/* </Route> */}

              <Route path="/" element={<PrivateRoute />}>
                <Route path="/cabinet" element={<CabinetPage />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
    </Suspense>
  );
};

export default App;
