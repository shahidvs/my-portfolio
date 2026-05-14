import { motion } from 'framer-motion'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'

const Footer = ({lightmode}) => {
  return (
    <div className='border-b flex flex-col  justify-center items-center pb-4 border-neutral-800 my-5'>
        <div className={lightmode?'flex flex-row justify-center items-center my-3  text-white text-center text-xl gap-9 md:gap-4':'flex flex-row my-3  text-black text-center text-xl gap-9 md:gap-4'}>
            <motion.a whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} href="https://github.com/shahidvs" target="_blank" rel="noreferrer">
              <FaGithub className='text-4xl' />
            </motion.a>
            <motion.a whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.5}} href="https://www.linkedin.com/in/muhammed-shahid-982705295" target="_blank" rel="noreferrer">
              <FaLinkedin className='text-4xl' />
            </motion.a>
            <motion.a whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.8}} href="mailto:mrshahid234@gmail.com" target='_blank' rel="noreferrer">
              <IoMdMail className='text-4xl' />
            </motion.a>
          </div>
          <div className='text-center'>
          <p className={lightmode?'text-white text-xl mt-3':'text-black text-xl mt-3'}>© Muhammed Shahid 2026. <span>| All Rights Reserved. |</span> </p>
          </div>
    </div>
  )
}

export default Footer