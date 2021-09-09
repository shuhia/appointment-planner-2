import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = ({ array = [] }) => {
  return (
    <>
      {array.map((element) => (
        <Tile element={element}></Tile>
      ))}
    </>
  );
};
