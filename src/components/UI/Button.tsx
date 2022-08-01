import React from 'react';
import { FunctionComponent } from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon?: string | React.ReactSVGElement;
}

const Button: FunctionComponent<ButtonProps> = ({ title, icon, ...props }) => {
  return (
    <>
      <button
        {...props}
        type='button'
        className={`group inline-flex text-white p-0.5 bg-orangeToYellow bg-opacity-100 transform font-medium rounded-lg text-sm justify-center mr-2 mb-2 active:bg-orange-700 active:bg-none active:border-orange-700 active:transition-none transition-all duration-500 delay-150 ${props.className}`}
      >
        <span className='flex flex-row px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-main-gray rounded-md group-hover:bg-opacity-0'>
          {icon ? icon : null}
          <p className='h-fit my-auto mx-1'>{title}</p>
        </span>
      </button>
    </>
  );
};

export default Button;
