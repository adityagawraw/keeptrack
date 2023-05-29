import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { useAppSelector } from "./features/hooks";

import Home from "./pages/Home/Home";
import Section from "./pages/Section/Section";

function App() {
  const todoData = useAppSelector((state)=> state.todo); 
  localStorage.setItem("todoData", JSON.stringify(todoData));

  return (
    <div className="App">
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<Section />} />
      </Routes>
    </div>
  );
}

export default App;

