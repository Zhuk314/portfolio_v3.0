import React from "react";
import { SocialIcon } from "react-social-icons";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className="flex flex-row justify-between">
      <div>
        <p className="text-white text-5xl">
          <a href="#">Ж</a>
        </p>
      </div>
      <div className="flex flex-row justify-evently">
        <p className="text-white text-2xl p-2 font-light">
          <a href="#">About</a>
        </p>
        <p className="text-white text-2xl p-2 font-light">
          <a href="#">Skills</a>
        </p>
        <p className="text-white text-2xl p-2 font-light">
          <a href="#">Experience</a>
        </p>
      </div>
      <div>
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
        <SocialIcon
          className="cursor-ponter"
          network="email"
          fgColor="white"
          bgColor="transparent"
        />
      </div>
    </div>
  );
};
