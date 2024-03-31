import FacebookSignup from './facebook-signup';
import GoogleSignup from './google-signup';

const ThirdPartySignup = () => {
  return (
    <div className='flex flex-col items-center gap-5 border-t lg:w-1/2 mx-auto pt-5 lg:pt-10'>
      <h3 className='text-xl text-secondary'>Or connect with:</h3>
      <div className='lg:p-5 space-y-5 w-full '>
        <FacebookSignup />
        <GoogleSignup />
      </div>
    </div>
  );
};

export default ThirdPartySignup;
