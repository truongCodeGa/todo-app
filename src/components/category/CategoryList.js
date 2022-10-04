import React from "react";

import { IonIcon } from "@ionic/react";
import { useCategory } from "../../contexts/categories-context";
import {
  closeCircleOutline,
  rocketOutline,
  settingsOutline,
} from "ionicons/icons";
import { useTodos } from "../../contexts/todos-context";
import ActionBtnCategory from "./ActionBtnCategory";
import { LayoutIconCategories } from "../layout";

import Mobie from "./responCatelist/Mobie";
const CategoryList = ({ item }) => {
  const { todoList } = useTodos();
  const { onDeleteCategory, toggle, handleEditOnCate, handleNaviCate } =
    useCategory();

  const categoryCount = [...todoList].filter(
    (num) => num.categoryId === item.id
  ).length;
  return (
    <div className="mb-1 sm:mb-4">
      <div
        className={`w-full hidden sm:block  xs:bg-white rounded-lg pt-4 pb-4 dark:bg-darkPrimary2`}
      >
        <div
          className="w-full flex justify-center xs:justify-end pr-0 pb-4 text-xl xs:text-lg
         xs:pr-3 font-medium dark:text-white"
        >
          <span className="hidden xs:inline-block pr-1">Công việc:</span>
          {categoryCount ? categoryCount : " 0"}
        </div>
        <div className="w-full h-[1px] bg-slate-400 mt-6 relative mb-10 ">
          <LayoutIconCategories type="list" bgColor={item.bgcolor}>
            <div className="text-4xl w-16 h-16  flex justify-center items-center">
              <IonIcon icon={item.icon} className="  text-white"></IonIcon>
            </div>
          </LayoutIconCategories>
        </div>

        <div
          className="text-white xs:text-slate-700 mb-2
         text-center xs:text-left text-xl px-4 break-words dark:text-darkIconCate"
        >
          {item.category}
        </div>
        <div className="xs:flex justify-end  xs:pb-3  mt-2 xs:mt-0 px-4 gap-x-2">
          {!toggle && (
            <ActionBtnCategory
              icon={settingsOutline}
              bgColor={item.bgcolor}
              onClick={() => {
                handleEditOnCate(item.id);
              }}
            ></ActionBtnCategory>
          )}
          <ActionBtnCategory
            icon={closeCircleOutline}
            onClick={() => {
              onDeleteCategory(item.id);
            }}
            bgColor={item.bgcolor}
          ></ActionBtnCategory>
          <ActionBtnCategory
            icon={rocketOutline}
            onClick={() => {
              handleNaviCate(item.id);
            }}
            bgColor={item.bgcolor}
          ></ActionBtnCategory>
        </div>
      </div>
      {/* mobie */}
      <Mobie
        onClick={() => {
          handleNaviCate(item.id);
        }}
        item={item}
      ></Mobie>
    </div>
  );
};

export default CategoryList;
