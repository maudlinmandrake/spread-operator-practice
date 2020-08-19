import React, { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");

  function handleChange(event) {}

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          <li>To do</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
