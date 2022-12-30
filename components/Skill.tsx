import React from "react";

type SkillProps = {
  name: string;
  isLeft?: boolean;
};

export const Skill: React.FC<SkillProps> = ({ name, isLeft, ...props }) => {
  return (
    <div
      className="m-auto text-xl w-96 text-textPrimary bg-gradient-to-r 
      from-[#092143] to-[#FE4D5B] rounded-full p-2"
      {...props}
    >
      {name}
    </div>
  );
};
