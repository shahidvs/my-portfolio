import React from "react";
import { HOME_SUMMARY } from "../Constants/datas";
import me from "../assets/me1.jpg";
import Typewriter from "typewriter-effect";
import resume from "../assets/Muhammed_Shahid.docx";
import { motion } from "framer-motion";

const Home = ({ lightmode }) => {
  const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, delay: delay },
    },
  });

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2 mb-4">
          <section id="home">
            <div className="flex flex-col  items-center lg:items-start">
              <motion.h5
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className={
                  lightmode ? "text-white text-3xl" : "text-black text-3xl"
                }
              >
                Hello I'm
              </motion.h5>
              <motion.h1
                variants={container(0)}
                initial="hidden"
                animate="visible"
                className={
                  lightmode
                    ? "pb-16 text-white text-6xl font-thin tracking-tight lg:mt-5  lg:text-8xl"
                    : "pb-16 text-black text-6xl font-thin tracking-tight lg:mt-5 lg:text-8xl"
                }
              >
                Muhammed Shahid
              </motion.h1>
              <motion.span
                variants={container(0.2)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-400 via-slate-300 to-purple-900 bg-clip-text tracking-tight text-4xl text-transparent"
              >
                <Typewriter
                  options={{
                    strings: [
                      "Frontend Developer",
                      "React & Next.js",
                      "TypeScript & UI Systems",
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </motion.span>
              <motion.p
                variants={container(0.3)}
                initial="hidden"
                animate="visible"
                className={
                  lightmode
                    ? "my-2 max-w-xl py-6 font-light tracking-tight text-white"
                    : "my-2 max-w-xl py-6 font-light tracking-tight text-black"
                }
              >
                {HOME_SUMMARY}
              </motion.p>
              <a href={resume} download>
                <motion.button
                  variants={container(0.4)}
                  initial="hidden"
                  animate="visible"
                  className="bg-purple-600 px-4 py-2 rounded text-white text-2xl"
                >
                  Resume
                </motion.button>
              </a>
            </div>
          </section>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="mt-9 rounded-tl-[40%] rounded-tr-[40%] rounded-bl-[80%] rounded-br-[30%] w-100 h-96 object-cover"
              src={me}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
