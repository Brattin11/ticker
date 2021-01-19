import React, { useState } from "react";

const omit = (arr, index) => {
  const dupArr = [...arr];
  dupArr.splice(index, 1);
  return dupArr;
};

const ToDo = ({ message }) => {
  const [checked, setChecked] = useState(false);
  return (
    <div>
      <input
        type="checkbox"
        onClick={() => {
          setChecked(!checked);
        }}
      ></input>
      <span style={{ textDecoration: checked ? "line-through" : "" }}>
        {message}
      </span>
    </div>
  );
};

export const ToDos = () => {
  const [todos, setTodos] = useState([
    "drive to mall",
    "get shirt",
    "get pans",
    "get tie",
  ]);

  const [newTodo, setNewTodo] = useState("");

  console.log(newTodo);

  return (
    <>
      <div>
        <input
          type="text"
          onChange={(event) => setNewTodo(event.target.value)}
        />
        <button
          onClick={() => {
            setTodos([...todos, newTodo]);
            setNewTodo("");
          }}
        >
          +
        </button>
      </div>
      {todos.map((todo, index) => {
        console.log(todo);
        return (
          <div style={{ display: "flex", flexDirection: "row" }}>
            <ToDo message={todo} />
            <button
              onClick={() => {
                setTodos(omit(todos, index));
              }}
            >
              X
            </button>
          </div>
        );
      })}
    </>
  );
};
