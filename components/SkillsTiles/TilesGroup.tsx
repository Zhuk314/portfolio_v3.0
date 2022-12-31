import React from "react";
import { Tile } from "./Tile";

export const TilesGroup: React.FC = () => {
  return (
    <>
      <div className=" grid grid-cols-4 gap-2">
        <div className="col-span-1">
          <Tile />
        </div>
        <div>
          <Tile />
        </div>
        <div>
          <Tile />
        </div>
        <div className="row-span-2">
          <Tile />
        </div>

        <div className="col-span-2 row-span-2">
          <Tile />
        </div>
        <div>
          <Tile />
        </div>
        <div>
          <Tile />
        </div>
        <div>
          <Tile />
        </div>

        <div>
          <Tile />
        </div>
      </div>
    </>
  );
};
