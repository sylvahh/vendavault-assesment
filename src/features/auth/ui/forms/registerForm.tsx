import Button from '@/components/buttons/button';
import { Input, Select } from '@/components/form-input';
import React from 'react';
import { registerFormFields } from '../../constants/data';
import { RegisterFormValues } from '../../auth.types';
import AuthNav from '../auth-nav';
import ThirdPartySignup from './third-party-signup/third-party-signup';
import SellerForm from './seller-form/seller-form';

const RegisterForm = () => {
  const [formValues, setFormValues] = React.useState<RegisterFormValues>({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    accountType: '',
    businessName: '',
  });
  const [error, setError] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);

  const isSeller = formValues.accountType.toLowerCase() === 'a seller';

  const handleForm = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setError('');
    setFormValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    setError('');
    setIsLoading(true);

    if (Object.values(formValues).some((field) => field === '')) {
      setError('All fields marked with * are required');
      setIsLoading(false);
    }
  };

  return (
    <div className='w-full  px-1 lg:px-10 mt-5 max-w-[1164px]'>
      <span className='text-red-500 text-sm font-semibold'>{error}</span>
      <form aria-label='signupForm' className=' flex flex-col  gap-5 '>
        {registerFormFields.map((field, idx) => {
          if (field.type === 'select') {
            return (
              <Select
                key={idx}
                {...field}
                placeholder={field.placeholder}
                label={field.label}
                containerStyle='input-container'
                onChange={handleForm}
                value={formValues[field.name as keyof typeof formValues]}
                invalid={error.length > 0}>
                {field.options?.map((option) => (
                  <option key={option} value={option} className='capitalize'>
                    {option}
                  </option>
                ))}
              </Select>
            );
          }

          return (
            <Input
              key={idx}
              {...field}
              containerStyle='input-container'
              value={formValues[field.name as keyof typeof formValues]}
              invalid={error.length > 0}
              disabled={isLoading}
              onChange={handleForm}
            />
          );
        })}

        {isSeller && <SellerForm formValues={formValues} handleForm={handleForm} error={error} isLoading={isLoading} />}

        <div className='flex flex-col items-center w-full lg:w-1/2 mt-10  mx-auto gap-3 bg-slate-0 py-5 col-span-2'>
          <Button
            onClick={handleSubmit}
            isLoading={isLoading}
            disabled={isLoading}
            className='bg-primary w-full py-4 text-white font-bold rounded-md hover:bg-primary-hover hover:lg:scale-105'>
            Register Now
          </Button>
          <div className='flex flex-col lg-flex-row gap-5 justify-between w-full py-5'>
            <Input
              type='checkBox'
              invalid={error.length > 0}
              disabled={isLoading}
              name='terms'
              label='I accept all terms & conditions'
              containerStyle='terms '
            />
            <AuthNav />
          </div>
        </div>
      </form>

      {!isSeller && <ThirdPartySignup />}
    </div>
  );
};
export default RegisterForm;
