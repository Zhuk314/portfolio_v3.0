import React from "react";
import { Skill } from "./Skill";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col h-screen space-y-8 text-center">
      <h3 className="title">Skills</h3>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Skill name="defaultSkill" />
        <Skill name="defaultSkill" />
        <Skill name="defaultSkill" />
        <Skill name="defaultSkill" />
        <Skill name="defaultSkill" />
        <Skill name="defaultSkill" />
        <Skill name="defaultSkill" />
      </div>
    </div>
  );
};
