import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

const colorCodes = [
  "#a3f5c9",
  "#1e4e93",
  "#ff004c",
  "#44b2ff",
  "#0e8a45",
  "#d9a619",
  "#9f6eac",
  "#c71f33",
  "#4578d2",
  "#ffb345",
];

function getRandomItem(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function App() {
  const [colorCode, setColorCode] = useState("#004aad");

  useEffect(() => {
    if (colorCode === "#c71f33") {
      console.log("This function was called");
    }
  }, [colorCode]);

  function changeColorRandomly() {
    const randomColorCode = getRandomItem(colorCodes);
    setColorCode(randomColorCode);
  }

  console.log("colorCode = ", colorCode);
  return (
    <div className="App">
      <Header colorCode={colorCode} />
      <div className="main-container">
        <Sidebar onColorChangeClick={changeColorRandomly} />
        <Main />
      </div>
      {colorCode !== "#c71f33" ? <Footer /> : null}
    </div>
  );
}

export default App;
