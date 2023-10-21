import "./App.css";
import React from "react";

import ColorPicker from "./components/ColorPicker";

function App() {
  return (
    <>
      {/* REACT TASK-3 */}
      <div className="App">
        <ColorPicker
          colors={[
            "red",
            "green",
            "blue",
            "yellow",
            "orchid",
            "aqua",
            "orange",
            "purple",
            "pink",
            "darkgreen",
            "peru",
            "deepskyblue",
            "saddlebrown",
            "chocolate",
            "royalblue",
            "gold",
          ]}
        />
      </div>
    </>
  );
}

export default App;
