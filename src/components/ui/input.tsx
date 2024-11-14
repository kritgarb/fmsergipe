import * as React from 'react';

import { cn } from '@/lib/utils';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, placeholder, className, type, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          id={id}
          type={type}
          className={cn(
            'block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-sm border-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-[#FF060B] focus:outline-none focus:ring-0 focus:border-[#FF060B] peer',
            className
          )}
          ref={ref}
          placeholder=" "
          {...props}
        />
        <label
          htmlFor={id}
          className="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-focus:text-[#FF060B] peer-focus:dark:text-[#FF060B]peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
        >
          {placeholder}
        </label>
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
