import React, { useState } from "react";
import { Tile } from "./Tile";
import styled from "styled-components";

interface TilesGroupProps {
  skills?: string[];
}

export const TilesGroup: React.FC<TilesGroupProps> = ({
  skills = ["JS", "Java"],
}) => {
  const [letter, setLetter] = useState("a");

  const getGArea = (char: string) => {
    //todo: add turnback on v+ letter
    const nextLetter =
      char.substring(0, char.length - 1) +
      String.fromCharCode(char.charCodeAt(char.length - 1) + 1);
    //setLetter(nextLetter);
    console.log("currentChar " + char);
    console.log("nextLetter " + nextLetter);
    return char;
  };

  return (
    <MainContainer>
      {skills.map((skill, count) => {
        console.log("count " + count);
        return <Tile gArea={"a"} key={"skill_" + count} />;
      })}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: grid;
  grid-template-areas:
    "a b c d"
    "e e f d"
    "e e g h"
    "i j k k"
    "l m m n"
    "o m m p"
    "q r s t"
    "q u v v";
  gap: 10px;
  padding: 10px;
`;
