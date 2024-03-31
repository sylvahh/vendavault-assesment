import { INPUT_TYPES } from '@/global.types';

export type RegisterFormFields = {
  name: string;
    type: INPUT_TYPES;
  label:string
    placeholder: string;
  options? : string[]
  required: boolean;
};

export type RegisterFormValues = {
  name: string;
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  accountType: string;
  businessName: string;
 
};
