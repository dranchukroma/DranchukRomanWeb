import React from "react";
import { useBackgroundColor } from "../../context/ColorContext";
import { BackgroundWrapper } from './AnimatedBackground.styled'

const AnimatedBackground = ({ children }) => {
  const color = useBackgroundColor();
  return <BackgroundWrapper color={color}>{children}</BackgroundWrapper>;
};

export default AnimatedBackground;