import React, { useState } from "react";
// import getReviews from "../backend-functions/getReviews";
// import getGeminiResponse from "../backend-functions/getGeminiResponse";
import axios from "axios";

const InputBox = ({ setData, setProgress }) => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    try {
      setLoading(true);
      setProgress(1);
      console.log("scrapping ...");
      const reviewResponse = await axios.get(
        `https://review-analyzer-gemini.vercel.app/reviews?url=${input}`
      );
      const reviewResponseData = reviewResponse.data;
      console.log("generating ...");
      setProgress(2);
      const generateResponse = await axios.post(
        `https://review-analyzer-gemini.vercel.app/generate`,
        reviewResponseData
      );
      const generateResponseData = generateResponse.data;
      setData(generateResponseData);
      console.log(generateResponseData);
      setLoading(false);
      setProgress(3);
      setInput("");
    } catch (error) {
      console.error("Error:", error);
      setLoading(false);
      setProgress(0);
    }
  };

  return (
    <div className="flex items-center justify-center py-4 bg-gray-800">
      <input
        type="text"
        className="w-9/12 text-gray-300 bg-gray-700 border border-gray-300 px-4 py-2 mr-2 rounded-md focus:outline-none focus:border-blue-500"
        placeholder="Paste url here..."
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
          setProgress(0);
        }}
      />
      <button
        className={`${
          loading ? "bg-gray-500" : "bg-gray-950"
        } text-gray-300 px-4 py-2 rounded-md hover:${
          loading ? "" : "bg-gray-600"
        } focus:outline-none`}
        disabled={loading}
        onClick={() => handleClick(input)}
      >
        {loading ? "Analyzing" : "Submit"}
      </button>
    </div>
  );
};

export default InputBox;
