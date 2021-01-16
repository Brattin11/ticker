import React, { useState } from "react";

const omit = (arr, index) => {
  const dupArr = [...arr];
  dupArr.splice(index, 1);
  return dupArr;
};

export const ToDos = () => {
  const [todos, setTodos] = useState([
    { message: "drive to mall", checked: true },
    { message: "get shirt", checked: false },
    { message: "get pans", checked: false },
    { message: "get tie", checked: false },
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
            setTodos([...todos, { message: newTodo, checked: false }]);
            setNewTodo("");
          }}
        >
          +
        </button>
      </div>
      {todos.map((todo, index) => {
        return (
          <div>
            <input
              type="checkbox"
              onClick={() => {
                setTodos([
                  ...todos,
                  { message: todos[index].message, checked: true },
                ]);
              }}
            ></input>
            <span
              style={{ textDecoration: todo.checked ? "line-through" : "" }}
            >
              {todo.message}
            </span>
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
