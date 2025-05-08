import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Episodes from "./components/episodes";
import Player from "./components/player";
import '@fortawesome/fontawesome-free/css/all.min.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/episodes" element={<Episodes />} />
        <Route path="/player/:anime/:id" element={<Player />} />
      </Routes>
    </Router>
  );
}

export default App;
