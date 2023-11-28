import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ projectName, position, company, companyLink, time, workList }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-center justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        className='flex flex-col justify-between xs:ml-2'
        initial={{ y: 50 }}
        whileInView={{ y: 0, transition: { duration: 0.5, type: 'spring' } }}
      >
        <h3 className='capitalize font-bold text-2xl my-1.5 sm:text-lg'>{projectName}</h3>
        <span className='capitalize font-medium text-dark dark:text-light my-1.5 xs:text-sm'>
          {position} | <a href={companyLink} target='_blank' className='text-primary dark:text-primaryDark capitalize'>@{company}</a>
        </span>
        <span className='capitalize text-sm text-dark/75 dark:text-light/75 my-1.5'>{time}</span>
        {
          workList && workList.map((item, index) => (
            <span key={index} className='flex items-start'>
              <span className='font-medium text-primary dark:text-primaryDark md:text-sm'>&#9758;</span> &nbsp;
              <p className='font-base md:text-sm'>{item}</p>
            </span>
          ))
        }
      </motion.div>
    </li>
  )
}

const Exprience = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="my-48">
      <h2 className='font-bold text-8xl mb-24 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>Experience</h2>
      <div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className='
            absolute left-9 top-1
            w-[4px] h-full
            bg-dark dark:bg-light
            origin-top
            md:w-[2px] md:left-[30px]
            xs:left-[20px]

          '
        />
        <ul className=' w-full flex flex-col items-start justify-between ml-4 xs:ml-2'>
          <Details
            projectName='Education Managment Project'
            position="Front-end Developer"
            company="DigiTech Solutions CO., LTD"
            companyLink="https://vndigitech.com"
            time="06/2022 - present"
            workList={[
              "Maintenance of the older features.",
              "Optimize the performance of the website.",
              "Development of new features of Frontend and CMS: Permission management,  Course, class, teacher, lesson management, ... ",
              "Planning, breaking down features into smaller parts, and estimating completion time based on requirements.",
              "Refactoring source code: format, building common method and some vital modules,...",
              "Review source code submitted by other members of team before merging into main branch.",
              "Deployment for the production stage with Docker.",
            ]}
          />
          <Details
            projectName='Omnichannel Project'
            position="Front-end Developer"
            company="DigiTech Solutions CO., LTD"
            companyLink="https://vndigitech.com"
            time="7/2023 - Present"
            workList={[
              "Integrate with fanpage Facebook, Zalo to get and send messages of customers, send zalo ZNS.",
              "Integrate with ChatGPT, ChatGPT training with specific scenarios according to business requirements.",
              "Setup Docker for the development environment, setup Dockerfile for staging, production building.  ",
              "Planning, breaking down features and estimating for each task.",
            ]}
          />
          <Details
            projectName='DMS Project'
            position="Front-end Developer"
            company="DigiTech Solutions CO., LTD"
            companyLink="https://vndigitech.com"
            time="9/2021 - 5/2023"
            workList={[
              "Development for many modules of large projects, microservices, business logic, and component UI for front-end applications.",
              "Communication with PO, BA to make clear and make Q/A about requirements.",
              "Planning, breaking down features and estimating for each task.",
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Exprience