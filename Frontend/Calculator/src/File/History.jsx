import React from "react";

function History({ history, onClear }) {
  return (
    <div className="border-4 border-gray-300 rounded-lg w-[20rem] h-[29rem] p-6 shadow-md bg-white/30 backdrop-blur-md ml-4">
      <button
        className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"
        onClick={onClear}
      >
        Clear
      </button>
      <h3 className="text-lg font-semibold mb-2 text-center">History</h3>
      <hr className="border-black" />
      <ul className="max-h-[calc(100%-8rem)] overflow-y-auto">
        {history.map((item, index) => (

          <li key={index} className="text-xl mb-1 border-5 border-indigo-200 mt-1 rounded-lg text-center">{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default History;
