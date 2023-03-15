import React from "react";
import { Content } from "./components/Content";
import { Sidebar } from "./components/Sidebar";
import "./styles/index.scss";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Content />
    </div>
  );
}

export default App;
