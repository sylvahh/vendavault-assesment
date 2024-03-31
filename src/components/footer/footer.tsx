import { logoText } from '@/constants/assets';
import { companyLinks, socialLinks } from './links';
import { Link } from 'react-router-dom';
import Review from './review';

const Footer = () => {
  return (
    <footer className='p-5 lg:p-10 border-t'>
      <div className='flex justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0'>
        <div className='flex lg:flex-col gap-5 lg:gap-0'>
          <div className='flex flex-col gap-6'>
            <img src={logoText} alt='logo text' className='w-[75%]' />
            <span className='rubik-regular'>
              A platform that links buyers <br /> with sellers
            </span>
          </div>

          <div className='lg:mt-20 space-y-5 '>
            <h1 className='text-secondary rubik-medium lg:text-xl'>Social Handles:</h1>
            <div className='flex flex-col gap-1'>
              {socialLinks.map((link, idx) => {
                return (
                  <Link
                    key={idx}
                    to={link.path}
                    className='flex items-center gap-3 capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
                    <img src={link.icon} alt={link.name} className='w-5' /> {link.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        <div className=' space-y-5 '>
          <h1 className='text-secondary rubik-medium text-xl'>Company</h1>
          <div className='flex flex-col gap-1'>
            {companyLinks.map((link, idx) => {
              return (
                <Link
                  key={idx}
                  to={link.path}
                  className='capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
                  {link.name}{' '}
                </Link>
              );
            })}
          </div>
        </div>

        <div className=' space-y-5'>
          <h1 className='text-secondary rubik-medium text-xl'>Link</h1>
          <div className='flex flex-col gap-1'>
            <Link to={'/'} className='capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
              home
            </Link>
            <Link
              to={'/market-place'}
              className='capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
              Marketplace
            </Link>{' '}
            <Link to={'/token'} className='capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
              token
            </Link>
          </div>
        </div>

        <div className='flex justify-between lg:block space-y-5 w-full lg:w-auto'>
          <div>
            <h1 className='text-secondary rubik-medium text-xl'>Careers</h1>
            <div className='flex flex-col gap-1'>
              <Link to={'/'} className='capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
                join the team
              </Link>
              <Link to={'/'} className='capitalize text-secondary rubik-regular hover:scale-105 hover:text-primary'>
                work for vendors
              </Link>
            </div>
          </div>
          <div className='lg:block lg:pt-20'>
            <Review />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
