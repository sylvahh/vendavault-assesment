import { Input } from '@/components/form-input';
import { RegisterFormValues } from '@/features/auth/auth.types';
import React from 'react';

type SellerUploadProps = {
  formValues: RegisterFormValues;
  name: string;
  label: string;
};
const SellerUpload = ({ name, label, }: SellerUploadProps) => {

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      console.log(file);
    }
  };
  return (
    <div className=' w-full border border-gray-300 p-5'>
      <Input
        label={label}
        name={name}
        type='file'
        accept=''
        containerStyle='input-container'
        className=' border-none'
        onChange={handleForm}
        required
      />
    </div>
  );
};

export default SellerUpload;
