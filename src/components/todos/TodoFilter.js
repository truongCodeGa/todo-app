import React from "react";
import { useTodos } from "../../contexts/todos-context";
import PageNotFound from "../../PageNotFound";
import ListJob from "./ListJob";

const TodoFilter = () => {
  const { todoList, filterByStatus, status, setTodoList } = useTodos();
  const newTodolist = filterByStatus(todoList, status);
  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todoList];
    newTodos.forEach((todo) => {
      if (todo.id === id) {
        todo.todojob = editValue;
      }
    });
    setTodoList(newTodos);
  };
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-all ease-in-out
     "
    >
      {newTodolist.length > 0 ? (
        newTodolist.map((todo) => (
          <ListJob
            key={todo.id}
            item={todo}
            todoList={newTodolist}
            handleEditTodos={handleEditTodos}
          ></ListJob>
        ))
      ) : (
        <div
          className="sm:col-span-2  flex items-center sm:h-auto lg:col-span-3
        mx-auto sm:w-1/2 lg:w-1/4 w-2/3 "
        >
          <img src="./nojob.jpg" alt="" />
        </div>
      )}
    </div>
  );
};
export default TodoFilter;
