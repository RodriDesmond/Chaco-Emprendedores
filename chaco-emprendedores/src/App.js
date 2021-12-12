import React from "react";
import Emprendimientos from "./components/Emprendimientos";
import Emprendimiento from "./components/Emprendimiento";
import Events from "./components/Events";
import Ranking from "./components/Ranking";
import Users from "./components/Users";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";

import "./App.css";
import { Login } from "./login";

function App() {
  return (
    <div className="container p-1">
      <Router history={<history />}>
        <Navegacion />
        <Routes>
          <Route path="/events/:id" element={<Ranking />} />
        </Routes>
        <Routes>
          <Route path="/emprendimientos/:id" element={<Emprendimiento />} />
        </Routes>
        <Routes>
          <Route path="/emprendimientos" element={<Emprendimientos />} />
        </Routes>
        <Routes>
          <Route path="/events" element={<Events />} />
        </Routes>
        <Routes>
          <Route path="/users" element={<Users />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
