import React from 'react';
import AuthHeader from './auth-header';
import Footer from '@/components/footer/footer';

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <React.Fragment>
      <AuthHeader />
      <div className='mt-16 px-2 lg:px-20 mb-20 '>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default AuthContainer;
