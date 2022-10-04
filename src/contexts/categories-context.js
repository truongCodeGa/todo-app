import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import useLocalStorage from "../components/hooks/useLocalStorage";
import useSliceString from "../components/hooks/useSliceString";
import { colorCateData, iconCateData } from "../utils/data";
import { useTodos } from "./todos-context";

const CategoryContext = createContext();
function CategoryProvider(props) {
  const [toggle, setToggle] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);
  const [cateList, setCateList] = useState([]);
  const [colorList, setColorList] = useState([]);
  const [iconList, setIconList] = useState([]);
  const { todoList, setTodoList, setCompletedFilter } = useTodos();
  const [todoStorage, setTodosStorage] = useLocalStorage("GET_STARTED");
  const { newSlice } = useSliceString();
  const navigate = useNavigate();
  const handleNaviCate = (id) => {
    setToggle(false);
    setToggleEdit(false);
    navigate(`/todos?id=${id}`);
    setCompletedFilter("");
    cateList.map(
      (cate) =>
        cate.id === id &&
        toast(`Danh sách: ${newSlice(cate.category)}`, {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
    );
  };

  const handleEditOnCate = (id) => {
    setToggleEdit(true);
    navigate(`/?id=${id}`);
  };
  const handleToggle = (status) => {
    setColorList([]);
    setIconList([]);
    if (status === "open") {
      setToggle(true);
    } else if (status === "close") {
      setToggle(false);
    } else {
      setToggleEdit(false);
    }
  };
  const filterData = (param, data) => {
    if (data === "color") {
      setColorList(
        colorCateData.filter((item) => {
          return item.codeColor === param;
        })
      );
    } else if (data === "icon") {
      setIconList(
        iconCateData.filter((item) => {
          return item.icon === param;
        })
      );
    }
  };

  const onDeleteCategory = (id) => {
    const newDel = [...cateList];
    const delTodoforCate = [...todoList].filter(
      (todo) => todo.categoryId !== id
    );
    const newDelLabel = [...todoList].filter((todo) => todo.categoryId === id);

    const deleteCate = newDel.filter((cate) => cate.id !== id);
    if (newDelLabel.length > 0) {
      Swal.fire({
        title: "Bạn có chắc không?",
        text: "Việc này sẽ xóa tất cả công việc bên trong!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1DC071",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa nó đi",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setCateList(deleteCate);
          setTodoList(delTodoforCate);
          Swal.fire("Đã xóa!", "Danh sách và công việc bên trong.", "success");
        }
      });
    } else {
      Swal.fire({
        title: "Bạn muốn xóa danh mục này?",
        // text: "Việc này sẽ xóa tất cả công việc bên trong!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#1DC071",
        cancelButtonColor: "#d33",
        confirmButtonText: "Xóa",
        cancelButtonText: "Hủy",
      }).then(async (result) => {
        if (result.isConfirmed) {
          setCateList(deleteCate);
        }
      });
    }
  };
  useEffect(() => {
    setCateList(todoStorage);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setTodosStorage(cateList);
  }, [setTodosStorage, cateList]);
  const value = {
    toggle,
    cateList,
    toggleEdit,
    colorList,
    iconList,
    colorCateData,
    iconCateData,
    handleToggle,
    handleEditOnCate,
    setColorList,
    setToggleEdit,
    setToggle,
    setIconList,
    setCateList,
    onDeleteCategory,
    filterData,
    handleNaviCate,
  };
  return (
    <CategoryContext.Provider
      value={value}
      {...props}
    ></CategoryContext.Provider>
  );
}
function useCategory() {
  const context = useContext(CategoryContext);
  if (typeof context === "undefined")
    throw new Error("useCategory must be used within a CategoryProvider");
  return context;
}
export { useCategory, CategoryProvider };
