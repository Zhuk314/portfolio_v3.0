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
    <div className="flex flex-col justify-center mb-10 lg:flex-row" {...props}>
      <div className="flex flex-col p-2 text-center lg:w-6/12 lg:text-left">
        <h4 className="text-4xl font-semibold text-textPrimary">{title}</h4>
        <p className="paragraph ">{description}</p>
      </div>
      <div className="flex justify-center p-2 ml-5">
        <a className="cursor-pointer" href={codeUrl}>
          <Image
            className="w-full lg:w-[400px] xl:w-[500px]"
            src={image}
            alt={title + " project image"}
            width={700}
            height={300}
          />
        </a>
      </div>
    </div>
  );
};
