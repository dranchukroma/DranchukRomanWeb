import React, { useState, useEffect } from "react";


export default function HoverFollowCircle() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <HoverArea
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      onMouseMove={handleMouseMove}
    >
      Наведи мишку на цей елемент
      <Circle
        visible={visible}
        style={{ top: position.y, left: position.x }}
      />
    </HoverArea>
  );
}
