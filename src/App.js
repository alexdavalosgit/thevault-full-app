import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import LaunchApp from "./components/LaunchApp/LaunchApp";
import "./App.css";
import VaultCollection from "./components/VaultCollection/VaultCollection";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/vault-collection" element={<VaultCollection />}></Route>
        <Route path="/" element={<LaunchApp />}></Route>
      </Routes>
    </Router>
  );
}
export default App;
