import React from "react";
import { Routes, Route, Navigate, BrowserRouter } from 'react-router-dom';
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects"
import NotFound from "./views/NotFound"
import SportApp from "./views/Projects/SportApp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/project" element={<Projects />}>
          <Route path="sportApp" element={<SportApp />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
