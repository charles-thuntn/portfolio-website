import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import profilePic from '../../public/images/profile/developer-pic-2.jpg'
import Layout from '@/common/components/Layout'
import AnimatedText from '@/common/components/AnimatedText'
import AnimatedNumber from '@/common/components/AnimatedNumber'
import AnimatedTransitionPage from '@/common/components/AnimatedTransitionPage'
import Skills from '@/modules/portfolio/Skills'
import Exprience from '@/modules/portfolio/Exprience'
import Education from '@/modules/portfolio/Education'
import { number_project, url_github, url_portfolio, years_experience } from '@/common/utils/constants'
import projectImg from '../../public/images/projects/porfolio.png'

const ProjectItem = ({ imageWebsite, typeWebsite, nameWebsite, description, linkWebsite, linkGithub }) => {
  return (
    <div className="col-span-12">
      <article
        className='
          relative flex items-center justify-between 
          w-full rounded-3xl rounded-br-2xl border border-solid border-dark dark:border-light  
          bg-light dark:bg-dark 
          p-12 shadow-2xl 
          lg:flex-col lg:p-8 
          xs:rounded-2xl xs:rounded-br-3xl xs:p-4
        '
      >
        <div
          className='
            absolute  top-0 -right-3 -z-10 
            h-[103%] w-[101%] 
            rounded-[2.5rem] rounded-br-3xl 
            bg-dark dark:bg-light xs:-right-2 xs:h-[102%] xs:w-[100%] xs:rounded-[1.5rem]
          '
        >
        </div>
        <a
          target="_blank"
          class="w-[70%] cursor-pointer overflow-hidden rounded-lg lg:w-full"
          href={linkWebsite}
        >
          <Image
            src={imageWebsite}
            alt='porfolio-project'
            className='w-full h-auto rounded-2xl'
            priority
            sizes="
              (max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw
            "
          />
        </a>
        <div className="flex w-[30%] flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
          <span className="font-medium text-primary dark:text-primaryDark xs:text-base">{typeWebsite}</span>
          <a
            target="_blank"
            classNameName="underline-offset-2 hover:underline"
            href={linkWebsite}>
            <h2 className="my-2 w-full text-left text-2xl font-bold lg:text-3xl xs:text-2xl">{nameWebsite}</h2>
          </a>
          <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
            {description}
          </p>
          <div className="mt-2 flex items-center">
            <a
              target="_blank"
              className="w-10"
              aria-label="Crypto Screener Application github link"
              href={linkGithub}>
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" class="w-full h-auto undefined">
                <path fill="none" d="M0 0h512v512H0z"></path>
                <path fill="currentColor" d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z"></path>
              </svg>
            </a>
            <a
              target="_blank"
              className="ml-4 rounded-lg bg-dark p-2 px-6 font-semibold text-light dark:bg-light dark:text-dark  sm:px-4 sm:text-base "
              aria-label={nameWebsite}
              href={linkWebsite}>
              Visit Website
            </a>
          </div>
        </div>
      </article>
    </div>
  )
}


const projects = () => {
  return (
    <>
      <Head>
        <title>Thu Nguyen | Portfolio</title>
        <meta name="description" content="Thu Nguyen | Portfolio" />
      </Head>
      <AnimatedTransitionPage />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-6'>
          <AnimatedText text="Working as a FE Dev ^^" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
            <ProjectItem
              imageWebsite={projectImg}
              typeWebsite="Portfolio Website"
              nameWebsite="NextJS Portfolio Website"
              description="A professional portfolio website using Next JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
              linkWebsite="/"
              linkGithub="https://github.com/charles-thuntn/portfolio-website"
            />

          </div>

        </Layout>
      </main>
    </>
  )
}

export default projects