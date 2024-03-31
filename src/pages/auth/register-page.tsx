import { Register } from '@/features/auth';
import useSeo from '@/hooks/use-seo';
const RegisterPage = () => {
  useSeo({ pageTitle: 'Register' });
  return <Register />;
};

export default RegisterPage;
