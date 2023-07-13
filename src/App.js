import React, { Component, useState } from "react"

import Header from './components/Header.js'
import Keypad from './components/Keypad.js'
import moonIcon from './assets/moon.png'
import sunIcon from './assets/sun.png'

import './App.css';

function App() {

  const usedKeyCodes = [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 96, 97, 98, 99, 100, 101, 102, 103,
    104, 105, 8, 13, 190, 187, 189, 191, 56, 111, 106, 107, 109,
  ];
  const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const operators = ["-", "+", "*", "/"];


  const [isDarkMode, setIsDarkMode] = useState(false);
  const [expression, setExpression] = useState("");
  const handleKeyPress=(keyCode, key) => {
    if(!keyCode) return;
  };

  return (

    <div className="App" 
      tabIndex="0"
      onKeyDown={(event) => handleKeyPress(event.keyCode, event.value)}
      data-theme={isDarkMode ? "dark" : ""}>

     <div className="AppCalculator">
        <div className = "AppCalculatorNavbar"> 
          <div className="AppCalculatorNavbarToggle"
            onClick={() => setIsDarkMode(!isDarkMode)}>

            <div className={`AppCalculatorNavbarToggleCircle ${isDarkMode 
              ? "AppCalculatorNavbarToggleCircleActive" 
              : ""}`}>

            </div>

          </div>

            <img src={isDarkMode ? moonIcon : sunIcon} alt="mode" />
        </div>

        <Header />
        <Keypad handleKeyPress={handleKeyPress}/>
      </div>
    </div>
  );
}

export default App;
