import React, { useState } from "react";
import logo from "../assets/logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";

const Navbar = ({ lightmode, setLightmode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="mb-20 flex items-center justify-between  px-5">
      <div className="flex flex-shrink-0  items-center">
        <img className="w-24" src={logo} alt="logo" />
      </div>
      <div className="flex flex-shrink-0  items-center">
        {lightmode ? (
          <CiLight
            onClick={() => setLightmode(!lightmode)}
            className="text-3xl text-white"
          />
        ) : (
          <MdDarkMode
            onClick={() => setLightmode(!lightmode)}
            className="text-3xl"
          />
        )}
      </div>
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="relative"
      >
        <div
          className={
            lightmode
              ? "text-white flex justify-between items-center p-4"
              : "text-black flex justify-between items-center p-4"
          }
        >
          <div className="text-3xl"></div>
          <div className="hidden md:flex text-xl gap-5">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#skills">Skills</a>
            <a href="#experience">Experience</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
            <a
              href="https://github.com/shahidvs"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammed-shahid-962705295"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="mailto:mrshahid234@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <IoMdMail className="text-3xl" />
            </a>
          </div>
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              />
            </svg>
          </button>
        </div>
        {isOpen && (
          <div
            className={
              lightmode
                ? "text-white md:hidden flex flex-col items-center"
                : "text-black md:hidden flex flex-col items-center"
            }
          >
            <a href="#home" className="p-2" onClick={toggleMenu}>
              Home
            </a>
            <a href="#about" className="p-2" onClick={toggleMenu}>
              About
            </a>
            <a href="#education" className="p-2" onClick={toggleMenu}>
              Education
            </a>
            <a href="#skills" className="p-2" onClick={toggleMenu}>
              Skills
            </a>
            <a href="#experience" className="p-2" onClick={toggleMenu}>
              Experience
            </a>
            <a href="#projects" className="p-2" onClick={toggleMenu}>
              Projects
            </a>
            <a href="#contact" className="p-2" onClick={toggleMenu}>
              Contact
            </a>
            <div className="flex gap-4 mt-4">
              <a
                href="https://github.com/shahidvs"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/muhammed-shahid-982705295"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl" />
              </a>
              <a
                href="mailto:mrshahid234@gmail.com"
                target="_blank"
                rel="noreferrer"
              >
                <IoMdMail className="text-3xl" />
              </a>
            </div>
          </div>
        )}
      </motion.div>
    </nav>
  );
};

export default Navbar;
