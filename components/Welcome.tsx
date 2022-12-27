import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import Image from "next/image";
import profilePic from "../public/hero.jpg";

export const Welcome: React.FC = () => {
  const [text, count] = useTypewriter({
    words: [
      "Welcome!!!",
      "How Are You Today?",
      "I am Yurii Zhuk",
      "Would You Like Some Coffee?",
    ],
    loop: true,
    delaySpeed: 2500,
  });
  return (
    <section className="h-screen flex flex-col item-center justify-center bg-backgroundPrimary">
      <Image
        className="relative rounded-full mx-auto object-cover"
        src="/hero.jpg"
        alt="profileImage"
        width={225}
        height={225}
      />
      <h1 className="relative mx-auto text-4xl md:text-6xl text-textPrimary text-center">
        <span>{text}</span>
        <Cursor />
      </h1>
    </section>
  );
};
