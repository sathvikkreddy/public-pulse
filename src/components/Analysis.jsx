import React from "react";
import Left from "./Left";
import Right from "./Right";

const Analysis = ({ data }) => {
  return (
    <div className="flex flex-grow justify-between bg-gray-800 py-4">
      <Left data={data} />
      <Right data={data} />
    </div>
  );
};

export default Analysis;
