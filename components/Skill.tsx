import React from "react";
import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck";

type SkillProps = {
  name: string;
  isLeft?: boolean;
};

export const Skill: React.FC<SkillProps> = ({ name, isLeft, ...props }) => {
  return (
    <div
      className=" relative m-auto text-xl max-w-96 text-textPrimary bg-gradient-to-r 
      from-[#092143] to-[#FE4D5B] rounded-full p-2"
      {...props}
    >
      <BadgeCheck className="w-8 fill-[#30CC8E]" />
      <span className="mx-20">{name}</span>
    </div>
  );
};
