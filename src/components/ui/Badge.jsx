import React from 'react';
import { twMerge } from 'tailwind-merge';

export const Badge = React.forwardRef(({ className, variant = 'default', ...props }, ref) => {
    return (
        <div
            ref={ref}
            className={twMerge(
                'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500',
                variant === 'default' &&
                'border-transparent bg-primary-500 text-white shadow hover:bg-primary-600',
                variant === 'secondary' &&
                'border-transparent bg-secondary-100 text-secondary-700 hover:bg-secondary-200',
                variant === 'outline' && 'text-gray-900 border-gray-300',
                className
            )}
            {...props}
        />
    );
});
Badge.displayName = 'Badge';
