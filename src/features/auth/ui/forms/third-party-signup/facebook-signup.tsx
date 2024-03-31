import Button from '@/components/buttons/button';
import { facebookFill } from '@/constants/assets';

const FacebookSignup = () => {
  return (
    <Button className='flex items-center pl-5 lg:pl-10 gap-10 lg:gap-20 bg-[#357AFF] w-full py-3 hover:scale-105 rounded-lg'>
      <img src={facebookFill} alt='facebooke icon' />
      <span className='rubik-medium text-xl text-white'>Continue with Facebook </span>
    </Button>
  );
};

export default FacebookSignup;
