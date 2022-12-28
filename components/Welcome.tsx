import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import { motion } from "framer-motion";
import { Header } from "./Header";

export const Welcome: React.FC = () => {
  const [text] = useTypewriter({
    words: [
      "Hello and Welcome!",
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
    <div id="welcome" className="h-screen bg-backgroundPrimary">
      <Header />
      <div className="flex flex-col justify-center h-screen overflow-hidden item-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -50 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <Image
            className="relative object-cover mx-auto rounded-full"
            src="/hero.jpg"
            alt="Profile Image"
            width={225}
            height={225}
          />
        </motion.div>

        <motion.div className="relative mx-auto text-4xl text-center md:text-6xl text-textPrimary lg:tracking-wider">
          <h1>
            <span>{text}</span>
            <Cursor cursorBlinking={false} />
          </h1>
        </motion.div>
      </div>
    </div>
  );
};
