import React from "react";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { MdCategory } from "react-icons/md";
import { useCategory } from "../../contexts/categories-context";
import { useTodos } from "../../contexts/todos-context";

const MenuCategory = () => {
  const { handleToggle, toggleEdit } = useCategory();
  const { setAllWorkFil } = useTodos();

  return (
    <div className="jj:flex gap-x-2 px-2 pt-2 sm:pt-0 text-white sm:col-span-2 lg:col-span-1 z-10">
      <div className="block w-full h-2 jj:hidden"></div>
      <div
        onClick={() => {
          setAllWorkFil("asds");
        }}
        className="w-full bg-gradient-to-l from-orange-500 to-orange-300 hover:to-cyan-300 rounded-md cursor-pointer py-1
               xs3:mt-0 "
      >
        <MdCategory size={30} className="mx-auto "></MdCategory>
      </div>
      <div className="block w-full h-2 jj:hidden"></div>
      {!toggleEdit && (
        <div
          className="w-full bg-slate-600 hover:bg-slate-700 rounded-md cursor-pointer py-1 xs3:mt-0 "
          onClick={() => {
            handleToggle("open");
          }}
        >
          <AiOutlineAppstoreAdd
            size={30}
            className="mx-auto "
          ></AiOutlineAppstoreAdd>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
