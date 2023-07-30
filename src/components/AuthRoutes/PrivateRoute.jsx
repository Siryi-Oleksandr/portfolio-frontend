import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { selectAccessToken } from 'redux/auth/authSelectors';
import { Section } from './PrivateRoute.styled';

const PrivateRoute = () => {
  // Це для перемикання між приватним та публічним
  // const userAccessToken = true;
  const userAccessToken = useSelector(selectAccessToken);

  return userAccessToken ? (
    <Section>
      <Outlet />
    </Section>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateRoute;
