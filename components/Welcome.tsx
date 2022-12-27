import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import Snowfall from "react-snowfall";

export const Welcome: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to my portfolio!",
      "How Are You Today?",
      "I am Yurii Zhuk.",
      "Would You Like Some Coffee?",
      "Eat, Sleep, Code, Repeat!",
    ],
    loop: true,
    delaySpeed: 3500,
    deleteSpeed: 35,
  });
  return (
    <section className="h-screen flex flex-col item-center justify-center bg-backgroundPrimary snap-center">
      {new Date("12-01") <= new Date() ? <Snowfall /> : null}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: -50 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <Image
          className="relative rounded-full mx-auto object-cover"
          src="/hero.jpg"
          alt="profileImage"
          width={225}
          height={225}
        />
      </motion.div>

      <motion.div
        className="relative mx-auto text-4xl md:text-6xl text-textPrimary text-center lg:tracking-wider"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, delay: 2 }}
      >
        <h1>
          <span>{text}</span>
          <Cursor />
        </h1>
      </motion.div>
    </section>
  );
};
