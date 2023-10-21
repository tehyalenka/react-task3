// REACT TASK-3

import React, { useState } from "react";

const ColorPicker = ({ colors }) => {
  const [showColors, setShowColors] = useState(false);
  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    setSelectedColor(color);
    setShowColors(false);
  };

  return (
    <div
      style={{
        backgroundColor: "#f5e6f8",
        padding: "20px",
        width: "1050px",
        height: "600px",
        margin: "50px auto",
      }}
    >
      <h2 style={{ textAlign: "center", color: "black", margin: "50px auto" }}>
        Color Picker
      </h2>
      <div
        style={{
          backgroundColor: "pink",
          width: "100%",
          height: "250px",
          boxShadow: "0px 0px 15px rgba(3, 46, 87, 0.5)",
          padding: "10px",
          borderRadius: "10px",
          marginTop: "20px",
        }}
      >
        {!showColors && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "20px",
            }}
          >
            <div
              style={{
                backgroundColor: "green",
                padding: "10px",
                borderRadius: "5px",
              }}
              onClick={() => setShowColors(true)}
            >
              <p style={{ color: "black", margin: 0 }}>Pick a color</p>
            </div>
          </div>
        )}
        {showColors && (
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              padding: "50px 0",
            }}
          >
            {colors.map((color, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: color,
                  width: "50px",
                  height: "50px",
                  margin: "5px",
                  cursor: "pointer",
                  boxShadow: "0 4px 5px rgba(3, 46, 87, 0.3)",
                }}
                onClick={() => handleColorClick(color)}
              ></div>
            ))}
          </div>
        )}
      </div>
      {selectedColor && (
        <p style={{ marginTop: "20px", color: "black" }}>
          Selected color: {selectedColor}
        </p>
      )}
    </div>
  );
};

export default ColorPicker;
