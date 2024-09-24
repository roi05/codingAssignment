import React, { forwardRef } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger'; // Customizable styles
  size?: 'small' | 'medium' | 'large'; // Customizable sizes
  isLoading?: boolean; // Show loading state
}

// Wrap the component with forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'medium',
      isLoading = false,
      children,
      className,
      ...rest
    },
    ref
  ) => {
    const baseStyles = 'rounded focus:outline-none focus:ring';
    const variantStyles = {
      primary: 'bg-white text-black',
      secondary: 'bg-my-green text-white',
      danger: 'bg-red-500 text-white',
    };
    const sizeStyles = {
      small: 'px-4 py-2 text-sm',
      medium: 'px-6 py-3',
      large: 'px-8 py-4 text-lg',
    };

    return (
      <button
        ref={ref} // Attach the ref here
        className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
        disabled={isLoading}
        {...rest}>
        {children}
      </button>
    );
  }
);

// Give a display name to the component for better debugging
Button.displayName = 'Button';

export default Button;
