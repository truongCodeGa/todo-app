import React from "react";
import LinksFilManage from "./LinksFilManage";
import { TbChecks } from "react-icons/tb";
import { MdRadioButtonUnchecked } from "react-icons/md";
import { RiListUnordered } from "react-icons/ri";
import { useTodos } from "../../contexts/todos-context";
import { LayoutIconCategories } from "../layout";

const FilterManageTodo = () => {
  const { setAllWorkFil, todoList } = useTodos();
  const newArr = todoList || [];
  const countTodosAll = newArr.map((item) => item).length;

  function isCompledCount(boolean) {
    const count = newArr.filter((item) => item.isCompleted === boolean).length;
    const newCount = count ? count : 0;
    return newCount;
  }

  return (
    <div
      className={`grid  grid-cols-1 xs:grid-cols-2 xs2:grid-cols-3 gap-4 p-4 transition-all `}
    >
      <LinksFilManage
        className=" bg-gradient-to-r from-green-600 dark:from-darkPrimary2 to-green-900 dark:to-darkPrimary2
       active:to-slate-300 "
        count={isCompledCount(true)}
        text="ĐÃ XONG"
        onClick={() => {
          setAllWorkFil("ACCOMPLISHED");
        }}
      >
        <LayoutIconCategories type="fill" className="text-green-700">
          <TbChecks></TbChecks>
        </LayoutIconCategories>
      </LinksFilManage>

      <LinksFilManage
        className=" bg-gradient-to-r from-indigo-700 dark:from-darkPrimary2 to-indigo-400 dark:to-darkPrimary2
        active:to-slate-200 "
        count={isCompledCount(false)}
        text="CHƯA XONG"
        onClick={() => {
          setAllWorkFil("SLACKING");
        }}
      >
        <LayoutIconCategories type="fill" className="text-indigo-700">
          <MdRadioButtonUnchecked></MdRadioButtonUnchecked>
        </LayoutIconCategories>
      </LinksFilManage>
      <LinksFilManage
        className=" bg-gradient-to-tl from-indigo-500 dark:from-darkPrimary2  via-purple-500  to-pink-500 dark:to-darkPrimary2 
        active:to-slate-200 xs:col-span-2 xs2:col-span-1"
        count={countTodosAll ? countTodosAll : 0}
        text="TẤT CẢ"
        onClick={() => {
          setAllWorkFil("TODOS");
        }}
      >
        <LayoutIconCategories
          type="fill"
          className="text-pink-500 text-2xl sm:text-4xl"
        >
          <RiListUnordered></RiListUnordered>
        </LayoutIconCategories>
      </LinksFilManage>
    </div>
  );
};

export default FilterManageTodo;
