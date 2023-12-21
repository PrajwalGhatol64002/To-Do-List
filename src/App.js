import React, { useState } from "react";
import ToDoList from "./ToDoList.jsx";
import AddIcon from "@mui/icons-material/Add";

const App = () => {
  const [newItem, setNewItem] = useState("");
  const [Items, setItems] = useState([]);

  const itemInput = (event) => {
    setNewItem(event.target.value);
  };

  const addItem = () => {
    if (newItem === "" || newItem === " ") return;
    setItems((oldItem) => {
      return [...oldItem, newItem];
    });
    setNewItem("");
  };

  return (
    <>
      <div className="box">
        <h1>To Do List</h1>
        <input
          type="text"
          name="item"
          value={newItem}
          placeholder="Add a Item"
          onChange={itemInput}
        />
        <button className="add" onClick={addItem}>
          <AddIcon />
        </button>
        <ol>
          {Items.map((itemVal, index) => {
            return <ToDoList key={index} id={index} text={itemVal} />;
          })}
        </ol>
      </div>
    </>
  );
};

export default App;
