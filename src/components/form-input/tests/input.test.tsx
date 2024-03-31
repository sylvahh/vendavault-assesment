import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../input';

describe('Input', () => {
  it('should render input field with label', () => {
    render(<Input label='Username' name='username' />);
    const inputElement = screen.getByLabelText('Username');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement.tagName).toBe('INPUT');
  });

  it('should toggle password visibility when eye icon is clicked', () => {
    render(<Input label='Password' name='password' type='password' />);
    const inputElement = screen.getByLabelText('Password');
    const eyeIcon = screen.getByAltText('eye icon');

    // Initially, password should be hidden
    expect(inputElement).toHaveAttribute('type', 'password');

    // Click the eye icon to reveal password
    fireEvent.click(eyeIcon);
    expect(inputElement).toHaveAttribute('type', 'text');

    // Click the eye icon again to hide password
    fireEvent.click(eyeIcon);
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  it('should render input field as invalid when invalid prop is true', () => {
    render(<Input label='Email' name='email' invalid required />);
    const inputElement = screen.getByLabelText(/Email */);
    expect(inputElement).toHaveClass('invalid');
  });

  it('should render input field as disabled when disabled prop is true', () => {
    render(<Input label='Phone' name='phone' disabled />);
    const inputElement = screen.getByLabelText('Phone');
    expect(inputElement).toBeDisabled();
  });
});
