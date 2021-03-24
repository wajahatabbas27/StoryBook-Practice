import React from "react";
import './App.css';
import Hello from "./components/Hello";
import Navbar from "./components/Navbar";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <Hello />
      <Table />
      <Navbar />
    </div>
  );
}

export default App;
