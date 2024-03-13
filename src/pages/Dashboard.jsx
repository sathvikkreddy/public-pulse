import { useState } from "react";
import InputBox from "../components/InputBox";
import Analysis from "../components/Analysis";
import sampleData from "../assets/sample-response-data";
import Progressbar from "../components/Progressbar";

const Dashboard = () => {
  const [data, setData] = useState(sampleData);
  const [progress, setProgress] = useState(0);

  return (
    <div className="flex flex-col h-screen">
      <InputBox setData={setData} setProgress={setProgress} />
      <Progressbar progress={progress} />
      <Analysis data={data} />
    </div>
  );
};

export default Dashboard;
