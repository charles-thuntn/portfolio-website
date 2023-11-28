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

const portfolio = () => {
  return (
    <>
      <Head>
        <title>Thu Nguyen | Portfolio</title>
        <meta name="description" content="Thu Nguyen | Portfolio" />
      </Head>
      <AnimatedTransitionPage />
      <main className='flex w-full flex-col items-center justify-center dark:text-light'>
        <Layout className='pt-6'>
          <AnimatedText text="Passion Powers All !" className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
            <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
              <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
              <p className='font-medium'>
                {`I'm a Frontend Developer. With many years of studying and working in this field, I am confident that I can handle any assigned task. I have 3 years of experience in programming with strong knowledge of Web apps such as (ReactJS,  NextJS, UmiJS, .NET Core, and some projects using VueJS).`}
              </p>
              <p className='my-4 font-medium'>
                With knowledge of UI/UX design, I have the ability to develop responsive web applications for Mobile Devices, Tablets, and Desktops in a flexible way. Create the best user experience for users. I also spend time learning new technologies and best practices to become a better engineer.
              </p>
            </div>

            <div
              className='
                col-span-3 relative h-max 
                rounded-2xl border-2 border-solid border-dark dark:border-light 
                bg-light dark:bg-dark 
                p-8 
                xl:col-span-4
                md:order-1 md:col-span-8
              '
            >
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image
                src={profilePic}
                alt='ThuNguyen'
                className='w-full h-auto rounded-2xl'
                priority
                sizes="
                  (max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw
                "/>
            </div>

            <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={10} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>satisfied clients</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={20} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>projects completed</h2>
              </div>

              <div className='flex flex-col items-end justify-center xl:items-center'>
                <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                  <AnimatedNumber value={3} />+
                </span>
                <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base'>years of experience</h2>
              </div>
            </div>

          </div>
          <Skills />
          <Exprience />
          <Education />
        </Layout>
      </main>
    </>
  )
}

export default portfolio