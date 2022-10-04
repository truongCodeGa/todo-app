import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useLocalStorage from "../components/hooks/useLocalStorage";
const filterByAllWork = (Todos = [], sttAllJob = "") => {
  switch (sttAllJob) {
    case "ACCOMPLISHED":
      return Todos.filter((item) => item.isCompleted);
    case "SLACKING":
      return Todos.filter((item) => !item.isCompleted);
    default:
      return Todos;
  }
};
const TodosContext = createContext();
function TodosProvider(props) {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  const filterByStatus = (listTodos = [], status = "") => {
    switch (status) {
      case "COMPLETED":
        return listTodos.filter(
          (item) => item.isCompleted && item.categoryId === categoryId
        );
      case "ACTIVE":
        return listTodos.filter(
          (item) => !item.isCompleted && item.categoryId === categoryId
        );
      default:
        return listTodos.filter((item) => item.categoryId === categoryId);
    }
  };
  const [todoList, setTodoList] = useState([]);
  const [status, setStatus] = useState("ALL");
  const [sttAllJob, setSttAllJob] = useState("");
  const [onEdit, setOnEdit] = useState(false);
  const [togGlistAll, setTogGlistAll] = useState(false);
  const [todoStorage, setTodosStorage] = useLocalStorage("crud-app");
  const setCompletedFilter = (status) => {
    setStatus(status);
    if (status === "COMPLETED") {
      toast("Công việc đã xong!");
    } else if (status === "ACTIVE") {
      toast.warn("Công việc chưa hoàn thành");
    } else if (status === "ALL") {
      toast("Tất cả công việc trong danh mục!");
    }
  };
  const setAllWorkFil = (sttAllJob) => {
    setSttAllJob(sttAllJob);
    if (sttAllJob === "ACCOMPLISHED") {
      toast.success("Tất cả công việc đã xong!");
      setTogGlistAll(true);
    } else if (sttAllJob === "SLACKING") {
      toast.warn("Tất cả công việc còn lại!");
      setTogGlistAll(true);
    } else if (sttAllJob === "TODOS") {
      toast("Tất cả công việc");
      setTogGlistAll(true);
    } else {
      toast("Danh sách của tôi");
      setTogGlistAll(false);
    }
  };
  const onDeleteJob = (id) => {
    const newDel = [...todoList];
    const deleteJob = newDel.filter((todo) => todo.id !== id);
    Swal.fire({
      title: "Bạn chắc không?",
      text: "Bạn sẽ không thể khôi phục công việc này!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#1DC071",
      cancelButtonColor: "#d33",
      confirmButtonText: "Xóa!",
      cancelButtonText: "Hủy",
    }).then(async (result) => {
      if (result.isConfirmed) {
        setTodoList(deleteJob);
        Swal.fire("Đã xóa!", "Công việc của bạn đã bị xóa.", "success");
      }
    });
  };

  const onComplatedjob = (id) => {
    const newCompeted = [...todoList];
    newCompeted.forEach((todo) => {
      if (todo.id === id) {
        todo.isCompleted = !todo.isCompleted;
      }
    });
    setTodoList(newCompeted);
  };
  useEffect(() => {
    setTodoList(todoStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTodosStorage(todoList);
  }, [setTodosStorage, todoList]);
  const value = {
    todoList,
    status,
    sttAllJob,
    onEdit,
    togGlistAll,
    setTogGlistAll,
    setTodoList,
    setStatus,
    setOnEdit,
    filterByStatus,
    filterByAllWork,
    setCompletedFilter,
    setAllWorkFil,
    onDeleteJob,
    onComplatedjob,
  };
  return (
    <TodosContext.Provider value={value} {...props}></TodosContext.Provider>
  );
}

function useTodos() {
  const context = useContext(TodosContext);
  if (typeof context === "undefined")
    throw new Error("useTodos must be used within a TodosProvider");
  return context;
}
export { useTodos, TodosProvider };
