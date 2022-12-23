import React from "react";
import { SocialIcon } from "react-social-icons";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-col justify-center md:flex-row md:justify-between">
      <div>
        <p className="hidden md:inline-flex text-white text-5xl">
          <a href="#">Ж</a>
        </p>
      </div>

      <div className="flex flex-col justify-center md:flex-row md:justify-between md:w-80">
        <p className="text-white flex justify-center text-2xl p-2 font-light">
          <a href="#">About</a>
        </p>
        <p className="text-white flex justify-center text-2xl p-2 font-light">
          <a href="#">Skills</a>
        </p>
        <p className="text-white flex justify-center text-2xl p-2 font-light">
          <a href="#">Experience</a>
        </p>
      </div>

      <div className="flex justify-center">
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
      </div>
    </div>
  );
};
