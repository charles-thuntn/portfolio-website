import React from 'react'
import { motion } from 'framer-motion'

const Skill = ({ name, x, y }) => {
  return (
    <motion.div
      className='
        flex items-center justify-center 
        rounded-full font-semibold 
        bg-dark dark:bg-light 
        text-light dark:text-dark 
        p-8 
        shadow-dark dark:shadow-light 
        cursor-pointer 
        absolute 
        py-3 px-6
        lg:py-2 lg:px-4 
        md:text-xs md:py-1.5 md:px-3
        xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold xs:text-[10px]
      '
      whileHover={{ scale: 1.05 }}
      initial={{ x: 0, y: 0 }}
      whileInView={{ x: x, y: y, transition: {duration: 1.5}}}
      viewport={{once: true}}
    >
      {name}
    </motion.div>
  )
}

const Skills = () => {
  return (
    <>
      <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
      <div
        className='
          w-full h-screen
          relative
          flex items-center justify-center
          bg-circularLight dark:bg-circularDark
          lg:h-[60vh] lg:bg-circularLightLg lg:dark:bg-circularDarkLg
          md:bg-circularLightMd md:dark:dark:bg-circularDarkMd
          sm:h-[50vh] sm:bg-circularLightSm sm:dark:bg-circularDarkSm
          xs:h-[40vh] xs:bg-circularLightSm xs:dark:bg-circularDarkSm
        '
      >
        <motion.div
          className='
            flex items-center justify-center 
            rounded-full font-semibold 
            bg-dark dark:bg-light  
            text-light dark:text-dark 
            p-8 
            shadow-dark dark:shadow-light 
            cursor-pointer
            lg:p-6
            md:p-4 md:text-xs
            xs:text-[10px] xs:p-2
          '
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-10vw" y="-2vw" />
        <Skill name="CSS" x="3vw" y="-9vw" />
        <Skill name="Javascript" x="17vw" y="-6vw" />
        <Skill name="Typescript" x="11vw" y="-14vw" />
        <Skill name="ReactJS" x="-10vw" y="-12vw" />
        <Skill name="NextJS" x="-20vw" y="6vw" />
        <Skill name="UmiJS" x="0vw" y="12vw" />
        <Skill name="Boostrap" x="-20vw" y="-15vw" />
        <Skill name="TailwindCSS" x="29vw" y="1vw" />
        <Skill name="Redux" x="0vw" y="-20vw" />
        <Skill name=".Net Core" x="-31vw" y="-10vw" />
        <Skill name="ASP.Net" x="-35vw" y="2vw" />
        <Skill name="Razor" x="-25vw" y="-4vw" />
        <Skill name="Blazor" x="-22vw" y="16vw" />
        <Skill name="Less" x="10vw" y="4vw" />
        <Skill name="Docker" x="22vw" y="-18vw" />
        <Skill name="Git" x="20vw" y="9vw" />
        <Skill name="Responsive Web Design" x="16vw" y="16vw" />
        <Skill name="Firebase" x="28vw" y="-10vw" />
      </div>
    </>
  )
}

export default Skills