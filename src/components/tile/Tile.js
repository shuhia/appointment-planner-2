import React from "react";

export const Tile = ({ element }) => {
  return (
    <div className="tile-container">
      {Object.entries(element).map((entry, index) => (
        <p key={index} className="tile">
          <span className="tile-title">{entry[0].toLowerCase()}</span>:
          {" " + entry[1]}
        </p>
      ))}
    </div>
  );
};
