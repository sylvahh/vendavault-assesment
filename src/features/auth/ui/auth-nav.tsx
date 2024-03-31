import { Link } from 'react-router-dom';

const AuthNav = () => {
  const location = window.location.pathname;
  const signinLocations = ['/', '/sign-up'];
  const showSignIn = signinLocations.includes(location);

  return (
    <div className='flex flex-col items-center '>
      {showSignIn ? (
        <small className='  group'>
          Already have an account?
          <Link to={'/sign-in'} className=' text-primary hover:font-semibold'>
            {' '}
            Sign in
          </Link>
        </small>
      ) : (
        <small className='  group'>
          Don't have an account?
          <Link to={'/sign-up'} className=' text-primary hover:font-semibold'>
            {' '}
            Sign up
          </Link>
        </small>
      )}
    </div>
  );
};

export default AuthNav;
