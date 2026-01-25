import React, { useEffect, useState } from "react";
import { TodoContext, TodoProvider } from "./context/todoContext";

const App = () => {
  const [todo, setTodo] = useState([]);

  const addTodo = (todo) => {
    setTodo((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };

  const updatetodo = (id, todo) => {
    setTodo((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prev)),
    );
  };

  const deleteTodo = (id) => {
    setTodo((prev) => prev.filter((prevtodo) => prevtodo.id != id));
  };

  const toggleCompleted = (id) => {
    setTodo((prevtodo) =>
      prevtodo.map((prev) =>
        prev.id === id ? { ...prev, completed: !prevtodo.completed } : prev,
      ),
    );
  };
  //LocalStorage
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");

    if (storedTodos) {
      setTodo(JSON.parse(storedTodos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);

  return (
    <TodoProvider
      value={{ todos: todo, addTodo, updatetodo, deleteTodo, toggleCompleted }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}</div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
};

export default App;
