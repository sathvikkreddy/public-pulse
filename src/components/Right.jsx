import React from "react";

const Right = ({ data }) => {
  return (
    <div className="w-6/12 flex flex-col text-gray-300">
      <div className="h-1/2 bg-gray-700 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 px-4 ">
        <div className="flex justify-center font-medium text-xl h-1/5 py-4">
          Top Positive Reviews
        </div>
        <div className="flex flex-col justify-around h-4/5">
          {data.topPositiveReviews.map((review) => {
            return (
              <div key={Math.random()} className="text-md">
                {review.length > 71 ? review.slice(0, 70) + "...." : review}
              </div>
            );
          })}
        </div>
      </div>
      <div className="h-1/2 bg-gray-700 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 px-4 ">
        <div className="flex justify-center font-medium text-xl h-1/5 py-4">
          Top Negative Reviews
        </div>
        <div className="flex flex-col justify-around h-4/5">
          {data.topNegativeReviews.map((review) => {
            return (
              <div key={Math.random()} className=" text-md">
                {review.length > 71 ? review.slice(0, 70) + "...." : review}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Right;
