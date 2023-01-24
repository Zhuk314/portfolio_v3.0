import React from "react";
import { Project } from "./Project";
import { progects } from "../utils/data";

export const Experience: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen m-auto space-y-8 text-center max-w-7xl">
      <h3 className="title">Experience</h3>

      <div className="flex flex-col justify-center">
        {progects.map((progect, count) => {
          return (
            <Project
              title={progect.title}
              image={progect.image}
              description={progect.description}
              codeUrl={progect.codeUrl}
              key={"project#" + count}
            />
          );
        })}
      </div>
    </div>
  );
};
