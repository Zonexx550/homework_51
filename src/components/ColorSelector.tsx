import React, { useState } from "react";

interface ColorSelectorProps {
  colors: string[];
}

const ColorSelector: React.FC<ColorSelectorProps> = ({ colors }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  return (
    <div>
      <select
        value={selectedColor}
        onChange={(e) => setSelectedColor(e.target.value)}
      >
        {colors.map((color) => (
          <option key={color} value={color}>
            {color}
          </option>
        ))}
      </select>
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundColor: selectedColor,
          margin: "15px auto",
        }}
      ></div>
    </div>
  );
};

export default ColorSelector;
