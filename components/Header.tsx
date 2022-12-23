import React from "react";
import { SocialIcon } from "react-social-icons";
type HeaderProps = {};

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div>
      <SocialIcon url="https://linkedin.com/in/jaketrent" />
      Header
    </div>
  );
};
