import { RegisterFormFields } from '../auth.types';

export const registerFormFields: RegisterFormFields[] = [
  {
    name: 'name',
    type: 'text',
    label: 'name',
    placeholder: 'Enter Name',
    required: true,
  },
  {
    name: 'username',
    type: 'text',
    label: 'username',
    placeholder: 'Enter username',
    required: true,
  },
  {
    name: 'email',
    type: 'email',
    label: 'email',
    placeholder: 'Enter Email',
    required: true,
  },
  {
    name: 'password',
    type: 'password',
    label: 'password',
    placeholder: 'Enter Password',
    required: true,
  },
  {
    name: 'confirmPassword',
    type: 'password',
    label: 'Confirm Password',
    placeholder: 'Confirm Password',
    required: true,
  },
  {
    name: 'accountType',
    type: 'select',
    label: 'Account Type',
    placeholder: 'Select Account Type',
    options: ['A Buyer', 'A Seller'],
    required: true,
  },
];
