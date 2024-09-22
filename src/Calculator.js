import React, { useState } from 'react';
import { evaluate } from 'mathjs'; // Import math.js

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculateResult = () => {
    try {
      setResult(evaluate(input)); // Use math.js evaluate instead of eval
    } catch (error) {
      setResult('Error');
    }
  };

  const clearInput = () => {
    setInput('');
    setResult('');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h1 className="text-2xl font-bold text-center mb-4">Calculator</h1>

        <div className="mb-4 bg-gray-200 p-4 rounded-lg">
          <input
            type="text"
            value={input}
            className="w-full text-right bg-transparent text-lg font-semibold mb-2"
            readOnly
          />
          <div className="text-right text-gray-500">
            {result !== '' ? `= ${result}` : ''}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          {/* Numbers and operations */}
          {['7', '8', '9', '/'].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-4 bg-gray-300 rounded-lg hover:bg-gray-400 text-xl font-semibold"
            >
              {char}
            </button>
          ))}

          {['4', '5', '6', '*'].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-4 bg-gray-300 rounded-lg hover:bg-gray-400 text-xl font-semibold"
            >
              {char}
            </button>
          ))}

          {['1', '2', '3', '-'].map((char) => (
            <button
              key={char}
              onClick={() => handleClick(char)}
              className="p-4 bg-gray-300 rounded-lg hover:bg-gray-400 text-xl font-semibold"
            >
              {char}
            </button>
          ))}

          {['0', '.', '=', '+'].map((char) => (
            <button
              key={char}
              onClick={() =>
                char === '=' ? calculateResult() : handleClick(char)
              }
              className={`p-4 ${
                char === '=' ? 'bg-blue-500 text-white' : 'bg-gray-300'
              } rounded-lg hover:bg-gray-400 text-xl font-semibold`}
            >
              {char}
            </button>
          ))}

          {/* Clear Button */}
          <button
            onClick={clearInput}
            className="col-span-4 p-4 bg-red-500 text-white rounded-lg hover:bg-red-600 text-xl font-semibold"
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
