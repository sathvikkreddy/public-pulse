import { useState } from "react";
import Appbar from "./components/Appbar";
import InputBox from "./components/InputBox";
import Analysis from "./components/Analysis";
import sampleData from "./assets/sample-response-data";

function App() {
  const handleClick = () => {};
  const [data, setData] = useState(sampleData);
  return (
    <div className="flex flex-col h-screen">
      <Appbar />
      <InputBox onclick={handleClick} />
      <Analysis />
    </div>
  );
}

export default App;
