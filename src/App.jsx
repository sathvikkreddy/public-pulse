import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Appbar from "./components/Appbar";
import Dashboard from "./pages/Dashboard";
import Team from "./pages/Team";

function App() {
  return (
    <BrowserRouter>
      <Appbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
