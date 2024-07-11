import React, { useState } from "react";
import "./App.css";
import { off_img, on_img } from "./asset/assetfunc";

function App() {
  const [isOn, setIsOn] = useState(false);

  const toggleLight = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="App">
      <div className="question">
        <h1>2. State Management:</h1>
        <p>
          Task: Create a component that manages its state, such as a counter or
          a toggle button. Requirements: Update the component's state based on
          user interactions, like button clicks or input changes. Show
          proficiency in using useState hook or setState method to manage
          component state.
        </p>
      </div>
      <div className="content">
        <button onClick={toggleLight}>
          {isOn ? "Turn Off the light" : "Turn On the light"}
        </button>
        <img src={isOn ? on_img : off_img} alt="light" className="lightImage" />
      </div>
    </div>
  );
}

export default App;
