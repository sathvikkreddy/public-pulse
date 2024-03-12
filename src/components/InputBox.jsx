import React, { useState } from "react";

const InputBox = () => {
  const [input, setInput] = useState("");
  return (
    <div className="flex items-center justify-center py-4 bg-gray-800">
      <input
        type="text"
        className="w-9/12 text-gray-300 bg-gray-700 border border-gray-300 px-4 py-2 mr-2 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Paste url here..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="bg-gray-950 text-gray-300 px-4 py-2 rounded-md hover:bg-gray-600 focus:outline-none">
        Submit
      </button>
    </div>
  );
};

export default InputBox;
