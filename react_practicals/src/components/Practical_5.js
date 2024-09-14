import React, { useState } from 'react';
function Calculator() {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input));
      } catch (e) {
        setResult('Error');
      }
    } else if (value === 'DEL') {
      setInput(input.slice(0, -1));
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="calculator">
      <div className="display">
        <div className="result">{result}</div>
        <div className="input">{input}</div>
      </div>
      <div className="buttons">
        {['/', '*', '+', '-', 'DEL', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.', '=', 'C'].map((button) => (
          <button key={button} onClick={() => handleButtonClick(button)}>
            {button}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
