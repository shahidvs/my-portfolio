import React, { useRef } from 'react'
import { education } from '../Constants/datas'
import { motion } from 'framer-motion'

const Education = ({lightmode}) => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg:mb-35'>
        <section id="education">
        <motion.h2 whileInView={{opacity:1,x:0}} initial={{x:-100,opacity:0}} animate={{x:0,opacity:1}} transition={{duration:0.8, delay:0.5}} className={lightmode?'text-center my-20 text-white text-4xl':'text-center my-20 text-black text-4xl'}>Education & Certifications</motion.h2>
        </section>
        <div className='w-full  '>
            <div>
                <motion.div className={lightmode?"text-white":""} whileInView={{opacity:1,x:0}} initial={{opacity:0,x:-100}} transition={{duration:0.8}}>
                    {education?.map((item,i)=>(
                                <TimelineItem key={i} order={i % 2 == 0 ? "right" : "left"} number={i + 1} title={item.title} description={item.description} />
                            ))}
                </motion.div>
            </div>
        </div>
    </div>
  )
}


const TimelineItem = ({ order, number, title, description,lightmode }) => {
    const ref = useRef()
    const variants = {
        hidden: { opacity: 0, y: -100 },
        visible: {
            opacity: 1, y: 0,
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 30,
                staggerChildren: 0.3
            }
        }
    }

    return (
        <div ref={ref} variants={variants} initial="hidden" whileInView="visible" className={`mb-8 flex  justify-evenly items-center w-full `}>
            <div className="order-1 w-fit"></div>
            <div className={lightmode?"z-20 flex items-center order-1 bg-neutral-600 outline outline-[.1px] shadow-xl w-8 h-8 rounded-full":"z-20 flex items-center order-1 bg-neutral-300 outline outline-[.1px] shadow-xl w-8 h-8 rounded-full"}>
                <h3 className={lightmode?"mx-auto text-white font-semibold text-lg":"mx-auto text-black font-semibold text-lg"}>{number}</h3>
            </div>
            <div className={lightmode?"order-1 bg-neutral-900/30  outline outline-[.1px] outline-neutral-700 rounded-lg shadow-xl w-10/12 px-6 py-4":"order-1 bg-neutral-300  outline outline-[.1px] outline-neutral-700 rounded-lg shadow-xl w-10/12 px-6 py-4"}>
                <h3 className={lightmode?"mb-3 text-white font-bold  text-xl":"mb-3 text-black font-bold  text-xl"}>{title}</h3>
                <p className={lightmode?"text-sm text-white leading-snug tracking-wide  text-opacity-100":"text-sm text-black leading-snug tracking-wide  text-opacity-100"}>{description}</p>
            </div>
        </div>
    );
};
export default Education