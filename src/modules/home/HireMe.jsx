import React from 'react';
import Link from 'next/link';
import { CircleText2 } from '@/common/components/Icons';
import { email } from '@/common/utils/constants';

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
      <div className='w-48 h-auto flex items-center justify-center relative md:w-24'>
        <CircleText2 className={"fill-dark animate-spin-slow dark:fill-light"} />
        <Link
          href={`mailto:${email}`}
          className='
          flex items-center justify-center p-8
          absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
          bg-dark dark:bg-light text-light dark:text-dark text-center font-semibold
          shadow-md border border-solid border-dark dark:border-light
          w-24 h-24 rounded-full
          hover:bg-light hover:dark:bg-dark  hover:text-dark hover:dark:text-light
          md:w-10 md:h-10 md:text-[10px] md:p-7
          '
        >
          Contact Me
        </Link>
      </div>
    </div>
  )
}

export default HireMe