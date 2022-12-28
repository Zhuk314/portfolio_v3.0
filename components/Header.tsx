import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";

const DURATION: number = 1;
const ANIMATION_DISTANCE: number = 100;

type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="z-10 flex flex-col justify-center mx-auto md:flex-row md:justify-between bg-backgroundPrimary max-w-7xl">
      <motion.div
        className="hidden px-10 text-5xl text-white md:inline-flex"
        initial={{ x: -ANIMATION_DISTANCE, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: DURATION }}
      >
        <a href="#">Ж</a>
      </motion.div>

      <div className="flex flex-col justify-center md:flex-row md:justify-between md:w-80">
        <motion.p
          className="flex justify-center p-2 text-2xl font-light text-white"
          initial={{ y: -ANIMATION_DISTANCE, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: DURATION }}
        >
          <a href="#">About</a>
        </motion.p>
        <motion.p
          className="flex justify-center p-2 text-2xl font-light text-white"
          initial={{ y: -ANIMATION_DISTANCE, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: DURATION, delay: 0.2 }}
        >
          <a href="#">Skills</a>
        </motion.p>
        <motion.p
          className="flex justify-center p-2 text-2xl font-light text-white"
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
        <div className="text-white cursor-pointer">
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
