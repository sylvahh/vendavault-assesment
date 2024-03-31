import React from 'react';

type SelectNativeAttributes = React.ComponentPropsWithRef<'select'>;

type Ref = HTMLSelectElement;

interface SelectProps extends SelectNativeAttributes {
  label?: string;
  disabled?: boolean;
  containerStyle?: string;
  invalid?: boolean;
  children: React.ReactNode;
  placeholder?: string;
}

const Select = React.forwardRef<Ref, SelectProps>((props: SelectProps, ref) => {
  const { name, label, className, placeholder, children, containerStyle, invalid, ...rest } = props;

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
      <select ref={ref} name={name} id={name} className={`${isInvalid ? 'invalid' : ''}  ${className}`} {...rest}>
        <option value=''>{placeholder}</option>

        {children}
      </select>
    </div>
  );
});

Select.defaultProps = {
  label: undefined,
  disabled: false,
  className: '',
  containerStyle: '',
  invalid: false,
  children: [],
};

export default Select;
