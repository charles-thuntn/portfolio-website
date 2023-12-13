import React, { useState } from 'react';
import Link from 'next/link';
import Logo from './Logo';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import useThemeSwitcher from '@/common/hooks/useThemeSwitcher';
import { GithubIcon, LinkedInIcon, MoonIcon, PhoneIcon, SunIcon } from './Icons';
import { url_github, url_linkedIn } from '../utils/constants';

const CustomLink = ({ href, title, className = "" }) => {
  const router = useRouter();
  return (
    <Link href={href} className={`${className} relative group`}>
      {title}
      <span
        className={`
          h-[1px] inline-block w-0 bg-dark dark:bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </Link>
  )
}

const CustomMobileLink = ({ href, title, className = "", toggle }) => {
  const router = useRouter();
  const handleClick = () => {
    toggle();
    router.push(href)
  }

  return (
    <button href={href} className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>
      {title}
      <span
        className={`
          h-[1px] inline-block w-0 bg-light dark:bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300
          ${router.asPath === href ? "w-full" : 'w-0'}
        `}
      >
        &nbsp;
      </span>
    </button>
  )
}

const CustomSocial = ({ href, component, target, className = "" }) => {
  return (
    <motion.a
      href={href}
      target={target}
      className={`${className}`}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.7 }}
    >
      {component}
    </motion.a>
  )
}

const Header = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleClick = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8'>
      <button
        className='hidden lg:flex flex-col justify-center items-center'
        onClick={handleClick}
      >
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpenMenu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpenMenu ? 'opacity-0' : 'opacity-100'}`}></span>
        <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpenMenu ? "-rotate-45 -translate-y-1" : 'translate-y-0.5'}`}></span>
      </button>
      <div className='w-full flex justify-between items-center lg:hidden'>
        <nav>
          <CustomLink href="/" title="Home" className='mr-4' />
          <CustomLink href="/portfolio" title="Portfolio" className='mx-4' />
          {/* <CustomLink href="/projects" title="Projects" className='ml-4' /> */}
        </nav>
        <nav className='flex items-center justify-center flex-wrap'>
          <CustomSocial href={url_github} target={"_blank"} className='w-6 mx-3 bg-light dark:bg-dark rounded-full' component={<GithubIcon />} />
          <CustomSocial href={url_linkedIn} target={"_blank"} className='w-6 mx-3' component={<LinkedInIcon />} />
          {/* <CustomSocial href={`tel:${numberphone}`} target={"_blank"} className='mx-3 w-6 rounded  border-dark/90 dark:border-light bg-light dark:bg-dark text-dark dark:text-light border-2 flex justify-center items-center p-1' component={<PhoneIcon />} /> */}
          <button
            className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {
              mode === "dark" ?
                <SunIcon className={"fill-dark"} />
                : <MoonIcon className={"fill-dark"} />
            }
          </button>
        </nav>
      </div>

      {
        isOpenMenu
        && <motion.div
          className='min-w-[70vw] flex flex-col justify-between z-30 items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32'
          initial={{ scale: 0, opacity: 0, x: '-50%', y: '-50%' }}
          animate={{ scale: 1, opacity: 1 }}
        >
          <nav className='flex flex-col items-center justify-center'>
            <CustomMobileLink href="/" title="Home" className='' toggle={handleClick} />
            <CustomMobileLink href="/portfolio" title="Portfolio" className='' toggle={handleClick} />
          </nav>

          <nav className='flex items-center justify-center flex-wrap mt-2'>
            <CustomSocial href={url_github} target={"_blank"} className='w-6 mx-3 bg-light dark:bg-dark text-dark dark:text-light rounded-full sm:mx-1' component={<GithubIcon />} />
            <CustomSocial href={url_linkedIn} target={"_blank"} className='w-6 mx-3' component={<LinkedInIcon />} />
            {/* <CustomSocial href={`tel:${numberphone}`} target={"_blank"} className='mx-3 w-6 rounded  border-light dark:border-dark/90 bg-dark dark:bg-light text-light dark:text-dark border-2 flex justify-center items-center p-1' component={<PhoneIcon />} /> */}
            <button
              className={`ml-3 flex items-center justify-center rounded-full p-1 ${mode === "light" ? "bg-dark text-light" : "bg-light text-dark"}`}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {
                mode === "dark" ?
                  <SunIcon className={"fill-dark"} />
                  : <MoonIcon className={"fill-dark"} />
              }
            </button>
          </nav>
        </motion.div>
      }

      <div className='absolute left-[50%] top-2 translate-x-[-50%]'>
        <Logo />
      </div>
    </header>
  )
}

export default Header