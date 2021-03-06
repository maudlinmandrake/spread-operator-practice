import React, { useState } from "react";
import ToDoItem from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [toDoItems, setToDoItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;

    setInputText(newValue);
  }

  function addToDo() {
    setToDoItems((prevToDos) => {
      return [...prevToDos, inputText];
    });
    setInputText("");
  }

  function deleteItem(id) {
    setToDoItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addToDo}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {toDoItems.map((toDoItem, index) => (
            <ToDoItem
              key={index}
              id={index}
              text={toDoItem}
              onChecked={deleteItem}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
