import React from "react";
import { BadgeCheck } from "@styled-icons/boxicons-solid/BadgeCheck";

type SkillProps = {
  name: string;
  isLeft?: boolean;
};

export const Skill: React.FC<SkillProps> = ({ name, isLeft, ...props }) => {
  return (
    <div
      className="flex flex-row m-auto text-xl w-3/4 max-w-sm text-textPrimary bg-gradient-to-r 
      from-[#092143] to-[#FE4D5B] rounded-full p-2 overflow-hidden"
      {...props}
    >
      <div className="px-5">
        <BadgeCheck className="w-8 fill-[#30CC8E]" />
      </div>
      <span className="">{name}</span>
    </div>
  );
};
