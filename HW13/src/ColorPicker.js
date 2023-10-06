import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

    const handleIncrement = (color) => {
    switch (color) {
      case 'red':
        setRed(Math.min(red + 1, 255));
        break;
      case 'green':
        setGreen(Math.min(green + 1, 255));
        break;
      case 'blue':
        setBlue(Math.min(blue + 1, 255));
        break;
      default:
        break;
    }
  };

  const handleDecrement = (color) => {
    switch (color) {
      case 'red':
        setRed(Math.max(red - 1, 0));
        break;
      case 'green':
        setGreen(Math.max(green - 1, 0));
        break;
      case 'blue':
            setBlue(Math.max(blue - 1, 0));
        break;
      default:
        break;
    }
  };

  return (
    <div>
          <h1>Настройка цвета</h1>
          <div className="color-box" style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}>
                            <p>Текущий цвет: rgb({red}, {green}, {blue})</p>
      </div>
      <div className="buttons">
        <div>
          <button onClick={() => handleIncrement('red')}>+1 Red</button>
          <button onClick={() => handleDecrement('red')}>-1 Red</button>
          <p>Red: {red}</p>
        </div>
        <div>
          <button onClick={() => handleIncrement('green')}>+1 Green</button>
          <button onClick={() => handleDecrement('green')}>-1 Green</button>
          <p>Green: {green}</p>
        </div>
        <div>
          <button onClick={() => handleIncrement('blue')}>+1 Blue</button>
          <button onClick={() => handleDecrement('blue')}>-1 Blue</button>
          <p>Blue: {blue}</p>
        </div>
      </div>
    </div>
  );
}

export default ColorPicker;