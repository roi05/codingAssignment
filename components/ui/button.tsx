import React, { forwardRef } from 'react';
import { cva, VariantProps } from 'class-variance-authority';
import clsx from 'clsx';

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean; // Show loading state
}

const buttonVariants = cva(
  'rounded focus:outline-none focus:ring', // Base styles
  {
    variants: {
      variant: {
        primary: 'bg-white text-black',
        secondary: 'bg-my-green text-white',
        danger: 'bg-red-500 text-white',
      },
      size: {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3',
        large: 'px-8 py-4 text-lg',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'medium',
    },
  }
);

// Wrap the component with forwardRef
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant, size, isLoading = false, children, className, ...rest }, ref) => {
    return (
      <button
        ref={ref} // Attach the ref here
        className={clsx(buttonVariants({ variant, size }), className)}
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
