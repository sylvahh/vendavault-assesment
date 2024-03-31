import React from 'react';
import eye from './assets/eye.svg';
import eyeSlash from './assets/eye-slash.svg';

type InputNativeAttributes = React.ComponentPropsWithRef<'input'>;

type Ref = HTMLInputElement;

interface InputProps extends InputNativeAttributes {
  label?: string;
  disabled?: boolean;
  containerStyle?: string;
  hideIcon?: boolean;
  invalid?: boolean;
}

const Input = React.forwardRef<Ref, InputProps>((props: InputProps, ref) => {
  const { name, type, label, className, placeholder, disabled, containerStyle, hideIcon, invalid, checked, ...rest } =
    props;
  const [togglePassword, setTogglePassword] = React.useState(false);

  const showPassword = type === 'password' && !hideIcon && togglePassword;
  const unChecked = type === 'checkbox' && !checked;

  const { isInvalid } = React.useMemo(() => {
    let isInvalid = false;
    const userInput = rest.value?.toString();
    if (invalid && !userInput && rest.required) {
      isInvalid = true;
    }
    return { isInvalid };
  }, [invalid, rest.value, rest.required]);

  return (
    <div className={containerStyle}>
      {label && (
        <label htmlFor={name} className='capitalize '>
          {label} {rest.required && '*'}
        </label>
      )}
      <input
        ref={ref}
        className={`${isInvalid || unChecked ? 'invalid' : ''}  ${className}`}
        type={showPassword ? 'text' : type}
        id={name}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        {...rest}
      />
      {type === 'password' && !hideIcon ? (
        <button name='toggleBtn' onClick={() => setTogglePassword(!togglePassword)} className='icon'>
          <img src={togglePassword ? eyeSlash : eye} alt='eye icon' className='w-5' />
        </button>
      ) : null}
    </div>
  );
});

Input.defaultProps = {
  label: undefined,
  disabled: false,
  className: '',
  containerStyle: '',
  hideIcon: false,
  invalid: false,
};

export default Input;
