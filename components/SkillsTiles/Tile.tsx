import React from "react";
import styled from "styled-components";

export const Tile: React.FC<{ gArea: string }> = ({ gArea }) => {
  //className="rounded-xl bg-white w-full h-full"
  return (
    <TileContainer gArea={gArea}>
      <div>Tile</div>
    </TileContainer>
  );
};

const TileContainer = styled.div<{ gArea: string }>`
  grid-area: ${({ gArea }) => gArea}; ;
`;
