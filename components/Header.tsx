import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const DURATION: number = 1;
const ANIMATION_DISTANCE: number = 100;

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div
      id="welcome"
      className="flex flex-col justify-center md:flex-row md:justify-between 
               bg-backgroundPrimary sticky top-0 max-w-7xl mx-auto"
    >
      <motion.div
        className="px-5"
        initial={{ x: -ANIMATION_DISTANCE, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: DURATION }}
      >
        <div className="hidden md:inline-flex text-white text-5xl">
          <a href="#">Ж</a>
        </div>
      </motion.div>

      <div className="flex flex-col justify-center md:flex-row md:justify-between md:w-80">
        <motion.p
          className="text-white flex justify-center text-2xl p-2 font-light"
          initial={{ y: -ANIMATION_DISTANCE, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: DURATION }}
        >
          <a href="#">About</a>
        </motion.p>
        <motion.p
          className="text-white flex justify-center text-2xl p-2 font-light"
          initial={{ y: -ANIMATION_DISTANCE, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: DURATION, delay: 0.2 }}
        >
          <a href="#">Skills</a>
        </motion.p>
        <motion.p
          className="text-white flex justify-center text-2xl p-2 font-light"
          initial={{ y: -ANIMATION_DISTANCE, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: DURATION, delay: 0.4 }}
        >
          <a href="#">Experience</a>
        </motion.p>
      </div>

      <motion.div
        className="flex justify-center"
        initial={{ x: ANIMATION_DISTANCE, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: DURATION }}
      >
        <SocialIcon
          url="https://www.linkedin.com/in/yurii-zhuk/"
          fgColor="white"
          bgColor="transparent"
        />
        <SocialIcon
          url="https://github.com/Zhuk314"
          fgColor="white"
          bgColor="transparent"
        />
        <div className="cursor-pointer text-white">
          <SocialIcon
            className="cursor-ponter"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
        </div>
      </motion.div>
    </div>
  );
};
