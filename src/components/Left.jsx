import React from "react";

const Left = ({ data }) => {
  return (
    <div className="flex flex-col justify-between w-6/12">
      <div className="h-2/5 flex flex-row justify-between ">
        {/* rating */}
        <div className="bg-gray-700 w-4/12 flex flex-col border border-1 boder-gray-300 rounded-md m-2 text-gray-300">
          <div className="flex justify-center font-medium text-xl h-1/5 py-4">
            Rating
          </div>
          <div className="flex justify-center font-medium text-8xl h-4/5 py-4">
            {data.rating}
          </div>
        </div>
        {/* keywords */}
        <div className="bg-gray-700 w-8/12 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 text-gray-300 ">
          <div className="flex justify-center font-medium text-xl h-1/5 py-4">
            Keywords
          </div>
          <div className="grid grid-cols-3 gap-4 h-1/5 p-4">
            {/* <div className="flex justify-center text-lg">ewdwjhgfyg</div>
            <div className="flex justify-center text-lg">weuyg</div>
            <div className="flex justify-center text-lg">vedwsf</div>
            <div className="flex justify-center text-lg">0fwedvs4</div>
            <div className="flex justify-center text-lg">0dsf5</div> */}
            {data.keywords.map((keyword) => {
              return (
                <div key={keyword} className="flex justify-center text-lg">
                  {keyword}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* verdict */}
      <div className="h-3/5 bg-gray-700 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 px-4 text-gray-300">
        <div className="flex justify-center font-medium text-xl h-1/5 py-4">
          Verdict
        </div>
        <div className="text-lg h-4/5 py-4 ">{data.verdict}</div>
      </div>
    </div>
  );
};

export default Left;
