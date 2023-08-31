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
  ProjectDetails,
  RegisterPage,
  LoginPage,
  AddProject,
  ChangePassPage,
  RecoveryPassPage,
} from 'pages';
import GlobalStyles from 'GlobalStyle';
import { useAppDispatch } from 'redux/reduxHooks';
import { currentUser } from 'redux/auth/operations';
import { useAuth } from 'hooks/useAuth';
import { selectAuthIsLoading } from 'redux/auth/authSelectors';
import { Toaster } from 'react-hot-toast';
import SubscriptionPage from 'pages/SubscriptionPage/SubscriptionPage';

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
              <Route index element={<HomePage />} />
              <Route path="/search" element={<SearchPage />} />
              <Route path="/subscription" element={<SubscriptionPage />} />
              <Route
                path="/register"
                element={
                  <RestrictedRoute
                    redirectTo="/cabinet"
                    component={<RegisterPage />}
                  />
                }
              />
              <Route
                path="/login"
                element={
                  <RestrictedRoute
                    redirectTo="/cabinet"
                    component={<LoginPage />}
                  />
                }
              />
              <Route path="/portfolio/:userId" element={<PortfolioPage />} />
              <Route
                path="/projectDetails/:projectId"
                element={<ProjectDetails />}
              />
              <Route path="/recoveryPassword" element={<RecoveryPassPage />} />
              <Route
                path="/resetPassword/:resetToken"
                element={<ChangePassPage />}
              />
              <Route path="/" element={<PrivateRoute />}>
                <Route path="/cabinet" element={<CabinetPage />} />
                <Route path="/addProject" element={<AddProject />} />
              </Route>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </>
      )}
      <Toaster position="top-right" reverseOrder={false} />
    </Suspense>
  );
};

export default App;
