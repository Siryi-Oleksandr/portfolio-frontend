import { ReactJSXElement } from '@emotion/react/types/jsx-namespace';
import { useAuth } from 'hooks/useAuth';
import { FC } from 'react';
import { Navigate } from 'react-router-dom';

/**
 * - If the route is restricted and the user is logged in, render a <Navigate> to redirectTo
 * - Otherwise render the component
 */

type Props = {
  component: ReactJSXElement;
  redirectTo: string;
};

const RestrictedRoute: FC<Props> = ({
  component: Component,
  redirectTo = '/',
}) => {
  const { isLoggedIn } = useAuth();

  return isLoggedIn ? <Navigate to={redirectTo} /> : Component;
};

export default RestrictedRoute;
