import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../../feature/todoSlice";
export const Todos = () => {
  const todos = useSelector((state) => state.Todos);
  const dispatch = useDispatch();

  return (
    <div>
      Todos:
      {todos.map((todo) => {
        <li key={todo.id}>
          {todo.text}
          <button onClick={() => dispatch(removeTodo(id))}>X</button>
        </li>;
      })}
    </div>
  );
};
