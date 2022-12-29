import React from "react";
import Image from "next/image";

export const About: React.FC = ({}) => {
  return (
    <div className="flex flex-col h-screen mx-auto space-y-8 text-center">
      <h3 className="title">About</h3>

      <div className="flex flex-col items-center m-auto space-y-5 lg:w-11/12 lg:space-y-0 lg:space-x-5 xl:space-x-20 lg:items-start lg:flex-row max-w-7xl">
        <div className="flex justify-center lg:w-1/2">
          <Image
            className="w-80 rounded-full md:rounded-3xl lg:w-[400px] xl:w-[500px] xl:rounded-xl"
            src={"/hero_about.jpg"}
            alt={"About Profile Image"}
            width={700}
            height={500}
          ></Image>
        </div>
        <div className="w-10/12 space-y-3 text-justify lg:w-1/2">
          <p className="paragraph">
            My name is Yurii Zhuk and I am software developer graduated from
            Green River College.
          </p>
          <p className="paragraph">
            Does it sounds simple and common? Right? Believe me or not, but it
            took me 7 long years in college to have the right to write such a
            short and simple sentence.
          </p>
          <p className="paragraph">
            In this section, I have to write about how much I am a person driven
            by passion, about my creativity and thirst for knowledge. But are
            you willing to waste your precious time reading boring text googled
            on the internet and used in each portfolio? Better lets move to
            Skills.
          </p>
        </div>
      </div>
    </div>
  );
};
