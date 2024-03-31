import { RegisterPage } from '@/pages/auth';
import { RouteProps } from 'react-router-dom';

type CustomRouteProps = RouteProps & {
  exact?: boolean;
};
const AuthRoutes: CustomRouteProps[] = [
  { path: '/', Component: RegisterPage, exact: true },
];

export default AuthRoutes;
