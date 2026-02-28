import React from 'react';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const Button = React.forwardRef(
    ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
        return (
            <button
                ref={ref}
                className={twMerge(
                    clsx(
                        'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 disabled:pointer-events-none disabled:opacity-50',
                        {
                            'bg-primary-500 text-white hover:bg-primary-600 shadow-sm': variant === 'primary',
                            'bg-secondary-500 text-white hover:bg-secondary-600 shadow-sm': variant === 'secondary',
                            'border border-gray-300 bg-transparent hover:bg-gray-50 text-gray-700': variant === 'outline',
                            'bg-gray-100 text-gray-900 hover:bg-gray-200': variant === 'ghost',
                            'h-9 px-4 py-2': size === 'md',
                            'h-8 rounded-md px-3 text-xs': size === 'sm',
                            'h-10 rounded-md px-8': size === 'lg',
                        },
                        className
                    )
                )}
                {...props}
            >
                {children}
            </button>
        );
    }
);

Button.displayName = 'Button';
