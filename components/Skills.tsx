import React from "react";
import { Skill } from "./Skill";
import { skills } from "../utils/data";
import { TilesGroup } from "./SkillsTiles/TilesGroup";

export const Skills: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen m-auto space-y-8 text-center max-w-7xl">
      <h3 className="title">Skills</h3>

      <TilesGroup />
      {
        //<div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        //  {skills.map((skill, count) => {
        //    return <Skill name={skill} key={"skill#" + count} />;
        //  })}
        //</div>
      }
    </div>
  );
};
