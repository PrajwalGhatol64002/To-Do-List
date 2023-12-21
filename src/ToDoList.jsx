import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ToDoList = (props) => {
  const [line, setLine] = useState(false);

  const removeItem = (id) => {
    setLine(true);
  };
  return (
    <>
      <div className="removeItem">
        <button
          className="remove"
          onClick={() => {
            removeItem(props.id);
          }}
        >
          <DeleteIcon />
        </button>
        <li style={{ textDecoration: line ? "line-through black 2px" : "" }}>
          {props.text}
        </li>
      </div>
    </>
  );
};

export default ToDoList;
