import { FunctionComponent, MouseEventHandler } from 'react';

interface ButtonProps {
  title: string;
  onClick: MouseEventHandler;
}

const Button: FunctionComponent<ButtonProps> = (props) => {
  return (
    <>
      <button
        type='button'
        onClick={props.onClick}
        className='group inline-flex text-white p-0.5 bg-orangeToYellow bg-opacity-100 transform font-medium rounded-lg text-sm justify-center mr-2 mb-2 active:bg-orange-700 active:bg-none active:border-orange-700 active:transition-none transition-all duration-500 delay-150'
      >
        <span className='px-5 py-2.5 transition-all ease-in duration-150 bg-white dark:bg-main-gray rounded-md group-hover:bg-opacity-0'>
          {props.title}
        </span>
      </button>
    </>
  );
};

export default Button;
