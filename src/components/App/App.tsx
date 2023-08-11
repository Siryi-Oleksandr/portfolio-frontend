import React, { FC, Suspense, useEffect } from 'react';
import { Route, Routes, useSearchParams } from 'react-router-dom';
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
import { updateAccessToken, updateLoginGoogle } from 'redux/auth/authSlice';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const [searchParams] = useSearchParams();
  const isAuthLoading = useAppSelector(selectAuthIsLoading);
  const { isRefreshing } = useAuth();

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

    dispatch(currentUser());
  }, [dispatch, searchParams]);

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
