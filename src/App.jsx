import React from "react";
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
import { ScrollProvider } from "./context/ScrollContext";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ScrollProvider>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/project" element={<Projects />}>
              <Route path="sportApp" element={<SportApp />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ScrollProvider>
    </ThemeProvider>
  );
}

export default App;
