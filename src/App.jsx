import React, { useState } from 'react';
import Button from './components/Button.jsx';
import { FaBackspace } from "react-icons/fa";

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = (text) => {
    setInputValue(prevValue => prevValue + text);
  };

  const removeDigits = () => {
    setInputValue(prevValue => prevValue.slice(0, -1));
  };

  return (
    <div id="main">
      <input type="text" value={inputValue} readOnly />
      <div className="buttons">
        <Button text="1" onButtonClick={handleButtonClick} />
        <Button text="2" onButtonClick={handleButtonClick} />
        <Button text="3" onButtonClick={handleButtonClick} />
        <Button text="4" onButtonClick={handleButtonClick} />
        <Button text="5" onButtonClick={handleButtonClick} />
        <Button text="6" onButtonClick={handleButtonClick} />
        <Button text="7" onButtonClick={handleButtonClick} />
        <Button text="8" onButtonClick={handleButtonClick} />
        <Button text="9" onButtonClick={handleButtonClick} />
        <Button text="0" onButtonClick={handleButtonClick} />
        <Button text="/" onButtonClick={handleButtonClick} />
        <Button text="*" onButtonClick={handleButtonClick} />
        <Button text="+" onButtonClick={handleButtonClick} />
        <Button text="-" onButtonClick={handleButtonClick} />
        <Button text="=" onButtonClick={handleButtonClick} />
        <Button text={<FaBackspace />} onButtonClick={removeDigits} />
      </div>
    </div>
  );
};

export default App;