import { logoWithText, userProfile } from '@/constants/assets';
import { Link } from 'react-router-dom';

const AuthHeader = () => {
  return (
    <header className='flex justify-between items-center shadow px-1 lg:px-8 py-1'>
      <div className=''>
        <img src={logoWithText} alt=' logo' className='w-[75%]' />
      </div>
      <div>
        <Link to={'/sign-in'} className='flex flex-col justify-center  items-center hover:scale-105 group'>
          <img src={userProfile} alt='user icon' className='w-[75%]' />
          <span className='rubik-medium text-lg group-hover:text-primary'>Sign in</span>
        </Link>
      </div>
    </header>
  );
};

export default AuthHeader;
