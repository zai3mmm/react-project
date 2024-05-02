import { useState } from "react";
import "./todo.css";

function Todo() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  return (
    <div className="main-container">
      <div className="container">
        <div className="heading">
          <h1>To-Do List</h1>
        </div>
        <div className="form">
          <input onChange={handleChange} type="text" value={inputText} />
          <button onClick={addItem}>
            <span>Add</span>
          </button>
        </div>
        <div>
          <ul>
            {items.map((todoItem, idx) => (
              <li key={idx}>{todoItem}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todo;
