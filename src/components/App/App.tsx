import React, { FC, Suspense, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useAppSelector } from 'redux/reduxHooks';
import {
  Layout,
  Loader,
  NotFoundPage,
  // PublicRoute,
  PrivateRoute,
  RestrictedRoute,
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
  AddProject,
} from 'pages';
import GlobalStyles from 'GlobalStyle';
import { useAppDispatch } from 'redux/reduxHooks';
import { currentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import { Toaster } from 'react-hot-toast';

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
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/" // TODO: will redirect to the portfolio/:userId
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/" // TODO: will redirect to the portfolio/:userId
                    component={<LoginPage />}
                  />
                }
              />

              <Route path="/portfolio/:userId" element={<PortfolioPage />} />
              <Route
                // path="/projectDetails/:projectId"
                path="/projectDetails"
                element={<ProjectDetails />}
              />
              <Route path="/contacts" element={<ContactsPage />} />
              {/* </Route> */}

              <Route path="/" element={<PrivateRoute />}>
                <Route path="/cabinet" element={<CabinetPage />} />
                <Route path="/addProject" element={<AddProject />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Suspense>
  );
};

export default App;
