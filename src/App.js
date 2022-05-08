import React from "react";
import "./App.css";
import Light from "./Light";
import Temperature from "./Temperature";
import Status from "./Status";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Temperature />
      <Light />
      <Status />
    </div>
  );
}

export default App;
