import React from 'react';
import './buttons.css';

type ButtonNativeAttributes = React.ComponentPropsWithoutRef<'button'>;

// define the ref type
type Ref = HTMLButtonElement;

type LoaderType = 'spinner' | 'bars' | 'dots' | 'bars-dots';

interface ButtonProps extends ButtonNativeAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  className?: string;
  loaderType?: LoaderType;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
}
const Button = React.forwardRef<Ref, ButtonProps>((props: ButtonProps, ref) => {
  const { type, rightIcon, loaderType, leftIcon, isLoading, disabled, className, children, ...rest } = props;
  const { newIcon: icon, iconPlacement } = React.useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = <div data-testid={loaderType} className={loaderType} />;
    }
    return {
      newIcon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    };
  }, [isLoading, rightIcon, leftIcon, loaderType]);

  return (
    <button
      type={type ? 'submit' : 'button'}
      ref={ref}
      className={className}
      disabled={isLoading || disabled}
      {...rest}>
      {/** render icon before */}
      {icon && iconPlacement === 'left' ? (
        <span className={`inline-flex shrink-0 self-center ${children && !isLoading && 'mr-2'}`}>{icon}</span>
      ) : null}

      {/** hide button text during loading state */}
      {!isLoading && children}

      {/** render icon after */}
      {icon && iconPlacement === 'right' ? (
        <span className={`inline-flex shrink-0 self-center  ${children && !isLoading && 'ml-2'}`}>{icon}</span>
      ) : null}
    </button>
  );
});

Button.defaultProps = {
  isLoading: false,
  disabled: false,
  loaderType: 'spinner',
  leftIcon: undefined,
  rightIcon: undefined,
};
export default Button;
