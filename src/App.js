import React from "react";
import "./App.css";
import Light from "./Light";
import Temperature from "./Temperature";
import Status from "./Status";
import Header from "./Header";

function App(props) {
  return (
    <div className="App">
      {props.isLoading && <p>Loading...</p>}
      <Header />
      <Temperature />
      <Light />
      <Status />
    </div>
  );
}

export default App;
