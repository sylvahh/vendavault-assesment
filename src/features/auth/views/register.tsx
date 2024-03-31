import AuthContainer from '../ui/containers/authContainer';
import RegisterForm from '../ui/forms/registerForm';

const Register = () => {
  return (
    <AuthContainer>
      <div className='flex flex-col items-center justify-center gap-5 '>
        <h1 className='text-secondary text-3xl lg:text-4xl rubik-medium'>Welcome to Vendavault</h1>
        <div className='px-10 py-5 shadow-lg w-full max-w-[1164px]'>
          <h1 className='text-secondary text-xl rubik-medium'>Create Account</h1>
        </div>
        <RegisterForm />
      </div>
    </AuthContainer>
  );
};

export default Register;
