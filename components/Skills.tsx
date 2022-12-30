import React from "react";
import { Skill } from "./Skill";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col h-screen m-auto space-y-8 text-center max-w-7xl">
      <h3 className="title">Skills</h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Skill name="defaultSkill1" />
        <Skill name="defaultSkill2" />
        <Skill name="defaultSkill3" />
        <Skill name="defaultSkill4" />
        <Skill name="defaultSkill5" />
        <Skill name="defaultSkill6" />
        <Skill name="defaultSkill7" />
      </div>
    </div>
  );
};
