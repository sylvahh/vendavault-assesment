import Button from '@/components/buttons/button';
import { googleIcon } from '@/constants/assets';

const GoogleSignup = () => {
  return (
    <Button className=' flex items-center pl-5 lg:pl-10 gap-10 lg:gap-20 border border-[#FF3D3D] w-full py-3 hover:scale-105 rounded-lg'>
      <img src={googleIcon} alt='google icon' />
      <span className='rubik-medium text-xl  text-secondary'>Continue with Google </span>
    </Button>
  );
};

export default GoogleSignup;
