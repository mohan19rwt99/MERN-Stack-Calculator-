import React, { useState, useEffect } from "react";
import axios from "axios";
import History from "./History";

function Calc() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      const response = await axios.get("/api/history");
      setHistory(response.data.map((item) => `${item.expression} = ${item.result}`));
    } catch (error) {
      console.error("Error fetching history:", error);
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleButtonClick = async (value) => {
    if (value === "=") {
      try {
        const response = await axios.post("/api/calculate", { expression: input });
        setHistory((prevHistory) => [...prevHistory, `${input} = ${response.data.result}`]);
        setInput(response.data.result);
      } catch (error) {
        setInput("Error");
      }
    } else if (value === "AC") {
      setInput("");
    } else if (value === "C") {
      setInput((prevInput) => prevInput.slice(0, -1));
    } else {
      setInput((prevInput) => prevInput + value);
    }
  };

  const handleKeyDown = (e) => {  
    if (e.key === "Enter") {
      handleButtonClick("=");
    }
  };

  const handleClearHistory = async () => {
    const response = await axios.delete("/api/delete");
    setHistory([]);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[url('./image.webp')] bg-cover bg-center">
      <div className="border-4 border-gray-300 rounded-lg w-[32rem] p-6 shadow-md bg-white/30 backdrop-blur-md">
        <input
          type="text"
          placeholder="Enter Amount"
          className="p-3 h-20 mb-4 w-full text-right text-2xl border border-gray-300 rounded-md"
          onChange={handleInputChange}
          value={input}
          onKeyDown={handleKeyDown}
        />
        <div className="grid grid-cols-4 gap-2">
          {["AC", "/", "C", "*", "7", "8", "9", "-", "4", "5", "6", "+", "1", "2", "3", "=", "0", "."].map((btn) => (
            <button
              key={btn}
              className={`${
                btn === "=" ? "bg-blue-500 hover:bg-blue-600 text-white" : 
                ["AC", "C", "/", "*", "-", "+"].includes(btn) ? "bg-gray-200 hover:bg-gray-300" : 
                "bg-white hover:bg-gray-100 border border-gray-300"
              } rounded-lg p-3 text-2xl font-semibold w-full`}
              onClick={() => handleButtonClick(btn)}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>
      <History history={history} onClear={handleClearHistory} />
    </div>
  );
}

export default Calc;
