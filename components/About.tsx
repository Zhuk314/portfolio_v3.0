import React from "react";
import Image from "next/image";

export const About: React.FC = ({}) => {
  return (
    <div className="h-screen space-y-8 ">
      <div className="flex justify-center">
        <h3 className="text-3xl tracking-[15px] uppercase md:text-4xl text-textPrimary">
          About
        </h3>
      </div>
      <div className="flex flex-col items-center w-11/12 m-auto md:space-x-5 xl:space-x-20 md:items-start md:flex-row max-w-7xl">
        <div className="md:w-1/2">
          <Image
            className="rounded-3xl w-[500px]"
            src={"/hero_about.jpg"}
            alt={"About Profile Image"}
            width={700}
            height={500}
          ></Image>
        </div>
        <div className="w-10/12 space-y-3 text-justify md:w-1/2">
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
