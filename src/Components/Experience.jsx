import React from 'react'
import { EXPERIENCES } from '../Constants/datas'
import { motion } from 'framer-motion'

const Experience = ({lightmode}) => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <section id="experience">
        <motion.h2 whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8, delay:0.5}} className={lightmode?'my-20 text-white text-4xl text-center':'my-20 text-black text-4xl text-center'}>Experience</motion.h2>
        </section>
        <div>
             {
                EXPERIENCES.map((item,i)=>(
                    <div key={i} className='mb-8 flex flex-wrap lg:justify-center'>
                        <motion.div whileInView={{opacity:1,y:0}} initial={{y:100,opacity:0}} animate={{y:0,opacity:1}} transition={{duration:0.8, delay:0.5}} className="w-full lg:w-1/4">
                        <p className={lightmode?'mb-2 text-sm text-neutral-400':'mb-2 text-sm text-neutral-800'}>{item.year}</p>
                        </motion.div>
                        <div className='w-full max-w-xl lg:w-3/4'>
                        <motion.h6 whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} className={lightmode?'mb-2 text-2xl text-white font-semibold':'mb-2 text-2xl text-black font-semibold'}>{item.role}{" "}
                        <span className={lightmode?'text-lg text-purple-100':'text-lg text-purple-900'}>{item.company}</span>
                        </motion.h6>
                        <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} className={lightmode?'text-neutral-300':'text-neutral-800'}>Type:{item.type}</motion.p>
                        <motion.p whileInView={{opacity:1,y:0}} initial={{opacity:1,y:100}} transition={{duration:1.2}} className={lightmode?'mb-4 text-neutral-400 whitespace-pre-line':'mb-4 text-neutral-900 whitespace-pre-line'}>{item.description}</motion.p>
                    
                        {item.technologies.map((item, i) =>(
                                <motion.span  initial={{y:100,opacity:-1}} animate={{y:0,opacity:1}} transition={{duration:0.8, delay:0.8}} key={i} className={lightmode?'mr-2 rounded bg-neutral-900 px-2 py-1 font-medium text-purple-500':'mr-2 rounded bg-neutral-200 px-2 py-1 font-medium text-purple-900'}>
                            {item}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                ))
             }
        </div>
    </div>
  )
}

export default Experience