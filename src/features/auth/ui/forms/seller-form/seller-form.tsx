import { Input } from '@/components/form-input';
import React from 'react';
import { RegisterFormValues } from '../../../auth.types';
import SellerUpload from './seller-upload';

type SellerFormProps = {
  formValues: RegisterFormValues;
  handleForm: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  isLoading: boolean;
};
const SellerForm = ({ formValues, error, isLoading, handleForm }: SellerFormProps) => {
  return (
    <div className='flex flex-col gap-5 mt-10 '>
      <div className='w-1/2 mx-auto mb-5'>
        <hr className=' border-gray-400' />
      </div>
      <div className='flex flex-col'>
        <Input
          label='Business Name'
          name='businessName'
          type='text'
          containerStyle='input-container'
          value={formValues.businessName}
          invalid={error.length > 0}
          disabled={isLoading}
          onChange={handleForm}
          required
        />
      </div>
      <div>
        <h1 className='rubik-medium text-lg text-secondary'>Means of Identification </h1>
        <span className='text-secondary'>Upload any one of these as a means of Identification.</span>
        <div className='flex gap-20 mt-5 w-full'>
          <SellerUpload name='nationalId' label='National ID card' formValues={formValues} />
          <div className=' border my-5 border-gray-400 border-opacity-70' />
          <SellerUpload name='votersCard' label='voters card' formValues={formValues} />
        </div>
      </div>
    </div>
  );
};

export default SellerForm;
