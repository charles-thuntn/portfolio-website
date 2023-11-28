import React, { useRef } from 'react'
import { useScroll, motion } from 'framer-motion';
import LiIcon from './LiIcon';

const Details = ({ type, time, place, infoList }) => {
  const ref = useRef(null);
  return (
    <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[65%] mx-auto flex flex-col items-start justify-between md:w-[80%]'>
      <LiIcon reference={ref} />
      <motion.div
        className='flex flex-col justify-between xs:ml-2'
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className='capitalize font-bold text-2xl my-1.5 sm:text-lg'>{type}</h3>
        <span className='capitalize font-medium text-dark/75 dark:text-light/75 my-1.5 xs:text-sm'>
          {time} | {place}
        </span>
        {
          infoList && infoList.map((item, index) => (
            <p className='font-base md:text-sm' key={index}>{item}</p>
          ))
        }

      </motion.div>
    </li>
  )
}

const Education = (props) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"]
  })

  return (
    <div className="my-48">
      <h2 className='font-bold text-8xl mb-24 w-full text-center md:text-6xl md:mb-16 xs:text-4xl'>Education</h2>
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
            type="Engineer's degree, Information Technology"
            time="September 2017 - April 2021"
            place="Ho Chi Minh City University of Industry and Trade (HUIT)"
            infoList={["Diploma:  Good | Grade: 3.20/4.00"]}
          />
          <Details
            type="Digitech Training Program "
            time="October 2020 - Janurary 2021"
            place="DigiTech Solutions CO., LTD"

            infoList={[
              "Ethic work & Working Culture",
              "Competency Develop by KASH model: Knowledge, Attitude, Skills, Habit",
              "Smart objective",
              "Softskills (Teamwork, Time Management, Task Management, Communication, Presentation, Problem Solving, …)",
              "Technical skills: Agile/Scrum process, Github process, Coding rule, Software Architecture, Weekly Techtalk,..`"
            ]}
          />
        </ul>
      </div>
    </div>
  )
}

export default Education