import React from "react";

const Team = () => {
  return (
    <div className="text-gray-300 bg-gray-800 flex flex-col flex-grow">
      <div className="flex justify-center text-4xl font-semibold p-4">Team</div>
      <div className="bg-gray-700 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 px-4 text-gray-300">
        <div className="flex justify-center font-medium text-xl h-1/5 py-4">
          Sathvik Reddy Kolla
        </div>
        <div className="text-lg h-4/5 p-2 pt-0 flex flex-col">
          <div>Roll No: 20R21A0586 </div>
          <div>Branch: CSE</div>
          <div>College: MLR Institute of Technology</div>
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 px-4 text-gray-300">
        <div className="flex justify-center font-medium text-xl h-1/5 py-4">
          Rohit Aryan Adike
        </div>
        <div className="text-lg h-4/5 p-2 pt-0 flex flex-col">
          <div>Roll No: 20R21A0561 </div>
          <div>Branch: CSE</div>
          <div>College: MLR Institute of Technology</div>
        </div>
      </div>
      <div className="bg-gray-700 flex flex-col justify-start border border-1 boder-gray-300 rounded-md m-2 px-4 text-gray-300">
        <div className="flex justify-center font-medium text-xl h-1/5 py-4">
          Prakash Reddy Kottam
        </div>
        <div className="text-lg h-4/5 p-2 pt-0 flex flex-col">
          <div>Roll No: 20R21A0587 </div>
          <div>Branch: CSE</div>
          <div>College: MLR Institute of Technology</div>
        </div>
      </div>
      <div className="flex justify-center font-medium text-sm py-4">
        <a
          href="https://github.com/sathvikkreddy/public-pulse"
          className="underline decoration-solid text-blue-600"
        >
          frontend - source code
        </a>
      </div>
    </div>
  );
};

export default Team;
