import React, { useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles/reset.css';
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import { GlobalStyle } from "./styles/GlobalStyles";
import Dashboard from "./views/Dashboard";
import Projects from "./views/Projects"
import NotFound from "./views/NotFound"
import SportApp from "./views/Projects/SportApp";
import Navigation from "./components/Navigation";

function App() {
  const sectionIds = ["Header", "About", "Projects", "Contact"];
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle theme={theme} />
      <BrowserRouter>
        <Navigation activeSection={activeSection} setActiveSection={setActiveSection} sectionIds={sectionIds} />
        <Routes>
          <Route path="/" element={<Dashboard activeSection={activeSection} setActiveSection={setActiveSection} sectionIds={sectionIds} />} />
          <Route path="/project" element={<Projects />}>
            <Route path="sportApp" element={<SportApp />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
