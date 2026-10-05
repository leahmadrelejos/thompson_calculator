import { useState } from "react";

function App() {
  const [display, setDisplay] = useState("0");

  const buttons = [
    "7", "8", "9", "÷",
    "4", "5", "6", "×",
    "1", "2", "3", "−",
    "0", ".", "+", "="
  ];

  const handleClick = (button) => {
    if (button === "C") {
      setDisplay("0");
      return;
    }

    if (button === "=") {
      try {
        let expression = display
          .replace(/×/g, "*")
          .replace(/÷/g, "/")
          .replace(/−/g, "-");

        if (expression.includes("/0")) {
          setDisplay("Cannot divide by zero");
          return;
        }

        const result = eval(expression);
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }

      return;
    }

    if (display === "Error" || display === "Cannot divide by zero") {
      setDisplay(button);
      return;
    }

    if (display === "0") {
      setDisplay(button);
    } else {
      setDisplay(display + button);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 px-4 py-8">

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">
          Simple Calculator
        </h1>

        <p className="text-gray-600 mt-2">
          React + Tailwind CSS
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Calculator */}
        <div className="bg-white rounded-2xl shadow-lg p-5">

          <h2 className="text-xl font-bold text-center mb-4">
            Calculator
          </h2>

          {/* Display */}
          <div className="bg-gray-900 text-white rounded-xl p-5 mb-4 text-right">
            <p className="text-3xl font-semibold break-words">
              {display}
            </p>
          </div>

          {/* Clear Button */}
          <button
            onClick={() => handleClick("C")}
            className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-xl mb-3"
          >
            C / AC
          </button>

          {/* Calculator Buttons */}
          <div className="grid grid-cols-4 gap-3">

            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => handleClick(button)}
                className={`py-4 rounded-xl text-xl font-bold transition
                  ${
                    button === "="
                      ? "bg-green-500 hover:bg-green-600 text-white"
                      : ["+", "−", "×", "÷"].includes(button)
                      ? "bg-blue-500 hover:bg-blue-600 text-white"
                      : "bg-gray-200 hover:bg-gray-300 text-gray-800"
                  }
                `}
              >
                {button}
              </button>
            ))}

          </div>
        </div>

        {/* Instructions */}
        <div className="bg-white rounded-2xl shadow-lg p-6">

          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Instructions / User Guide
          </h2>

          <div className="space-y-4 text-gray-700">

            <div>
              <h3 className="font-bold">
                How to use the calculator
              </h3>

              <p className="mt-1">
                Click the number buttons to enter numbers. 
                Select an operator, enter another number, 
                and press the equals button to calculate.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Supported Operations
              </h3>

              <ul className="list-disc ml-6 mt-2">
                <li>Addition (+)</li>
                <li>Subtraction (−)</li>
                <li>Multiplication (×)</li>
                <li>Division (÷)</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold">
                Clear / Reset
              </h3>

              <p className="mt-1">
                Press the C / AC button to clear the calculator
                and start a new calculation.
              </p>
            </div>

            <div>
              <h3 className="font-bold">
                Error Handling
              </h3>

              <p className="mt-1">
                The calculator displays an error message when
                an invalid calculation is performed, such as
                dividing by zero.
              </p>
            </div>

          </div>
        </div>

      </div>

      {/* Footer */}
      <div className="text-center mt-8 text-gray-500">
        <p>Laboratory 1 - Application Development and Emerging Technologies</p>
      </div>

    </div>
  );
}

export default App;