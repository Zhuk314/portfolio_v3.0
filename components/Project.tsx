import React from "react";
import Image from "next/image";

interface ProjectProps {
  title: string;
  image: string;
  description: string;
  codeUrl?: string;
}

export const Project: React.FC<ProjectProps> = ({
  title,
  image,
  description,
  codeUrl = "#",
  ...props
}) => {
  return (
    <div className="flex flex-col w-full lg:flex-row " {...props}>
      <div className="flex flex-col p-2">
        <h4 className="flex flex-start">{title}</h4>
        <p className="flex flex-start">{description}</p>
      </div>
      <div className="flex justify-center p-2">
        <a className="cursor-pointer" href={codeUrl}>
          <Image
            className="w-full lg:w-[400px] xl:w-[500px]"
            src={"/hero_about.jpg"}
            alt={"About Profile Image"}
            width={700}
            height={500}
          />
        </a>
      </div>
    </div>
  );
};
