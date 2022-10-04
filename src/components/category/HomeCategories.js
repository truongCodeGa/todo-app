import React from "react";

import FromAddCategory from "./FromAddCategory";
import Category from "./Category";
import { useCategory } from "../../contexts/categories-context";
import FilterManageTodo from "../filter/FilterManageTodo";
import { useTodos } from "../../contexts/todos-context";
import ManageList from "../manage/ManageList";
import { motion } from "framer-motion";
import { LayoutFooter, LayoutHeader, LayoutTodoApp } from "../layout";
import FormUpdateCategory from "./FormUpdateCategory";
import MenuCategory from "./MenuCategory";
const HomeCategories = () => {
  const { toggle, toggleEdit } = useCategory();
  const { togGlistAll } = useTodos();

  return (
    <>
      <LayoutTodoApp
        className={`
        pb-[54px]
         ${toggleEdit ? "lg:mr-[320px]" : toggle ? " lg:mr-[320px]" : ""}`}
      >
        <LayoutHeader
          result={0}
          className="sm:grid-cols-3 lg:grid-cols-2 xs:pt-2 sm:pt-0"
        >
          <MenuCategory></MenuCategory>
        </LayoutHeader>
        <FromAddCategory></FromAddCategory>
        <ManageList></ManageList>
        <FilterManageTodo></FilterManageTodo>
        <motion.div
          animate={{
            scaleY: togGlistAll ? 0 : 1,
            opacity: togGlistAll ? 0 : 1,
          }}
          transition={{
            duration: 0.5,
          }}
        >
          <div className={` ${togGlistAll ? "hidden" : ""}`}>
            <p className="text-white font-medium text-xl break-words px-4">
              Danh sách của tôi
            </p>
            <Category></Category>
          </div>
        </motion.div>
        {/* footer cate */}
        <LayoutFooter result={0}></LayoutFooter>
        <FormUpdateCategory></FormUpdateCategory>
      </LayoutTodoApp>
    </>
  );
};

export default HomeCategories;
