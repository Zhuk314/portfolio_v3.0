import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export const Welcome: React.FC = () => {
  const [text, count] = useTypewriter({
    words: ["Welcome!!!", "How Are You Today?", "Would You Like Some Coffee?"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <section className="bg-backgroundPrimary">
      <h1 className="text-4xl md:text-8xl text-textPrimary">{text}</h1>
    </section>
  );
};
