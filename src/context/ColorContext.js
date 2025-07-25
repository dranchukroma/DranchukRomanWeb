import React, { createContext, useEffect, useState, useContext } from "react";
import { theme } from "../styles/theme";

const ColorContext = createContext();

const colors = [
  theme.colors.bg1,
  theme.colors.bg2,
  theme.colors.bg3,
  theme.colors.bg4,
  theme.colors.bg5,
  theme.colors.bg6
];

export const ColorProvider = ({ children }) => {
  const [index, setIndex] = useState(0);
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % colors.length);
    }, 3000); // змінюється кожні 3 секунди
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setColor(colors[index]);
  }, [index]);

  return (
    <ColorContext.Provider value={color}>
      {children}
    </ColorContext.Provider>
  );
};

export const useBackgroundColor = () => useContext(ColorContext);
