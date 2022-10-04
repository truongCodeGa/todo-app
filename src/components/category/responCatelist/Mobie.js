import { IonIcon } from "@ionic/react";
import React from "react";
import { AiFillEdit, AiOutlineEnter } from "react-icons/ai";
import { TiDelete } from "react-icons/ti";
import { useCategory } from "../../../contexts/categories-context";
import { useTodos } from "../../../contexts/todos-context";
import { FieltItemDropdown } from "../../field";
import useClickOutSide from "../../hooks/useClickOutSide";
import useSliceString from "../../hooks/useSliceString";
import { LayoutIconCategories } from "../../layout";

const Mobie = ({ item, onClick = () => {} }) => {
  const { todoList } = useTodos();
  const { show, setShow, nodeRef } = useClickOutSide();
  const { newSlice } = useSliceString();
  const { onDeleteCategory, handleEditOnCate } = useCategory();
  const categoryCount = [...todoList].filter(
    (num) => num.categoryId === item.id
  ).length;
  return (
    <>
      <div
        ref={nodeRef}
        onClick={() => setShow(!show)}
        className={`w-full block sm:hidden  cursor-pointer py-1
  rounded group active:bg-gray-300 transition-all duration-300
 
  ${
    show
      ? ` bg-[${item.bgcolor}] z-50 text-white scale-105 dark:bg-darkBorder  scale-y-110 `
      : "bg-white  text-gray-600 "
  }
 dark:bg-darkPrimary2 pr-2`}
      >
        {/* dropdownItem */}
        <div
          className={`fixed w-full jj:w-8/12 xs:w-7/12 top-[-110px] right-0 z-50 bg-[${
            item.bgcolor
          }] dark:bg-darkBorder  shadow-lg rounded-md 
          transition-all duration-300 
        ${show ? "opacity-100 scale-100 " : "opacity-0 scale-0 invisible"}
        text-base  `}
        >
          <div className=" w-full">
            <FieltItemDropdown
              onClick={() => {
                handleEditOnCate(item.id);
              }}
              text="Thông tin"
            >
              <AiFillEdit></AiFillEdit>
            </FieltItemDropdown>
            <FieltItemDropdown
              text="Xóa"
              onClick={() => {
                onDeleteCategory(item.id);
              }}
            >
              <TiDelete className="Icon"></TiDelete>
            </FieltItemDropdown>
            <FieltItemDropdown
              className="border-b-0"
              onClick={onClick}
              text="Chọn"
            >
              <AiOutlineEnter></AiOutlineEnter>
            </FieltItemDropdown>
          </div>
        </div>

        <div className="flex w-full justify-between items-center">
          <div
            className={`w-9/12 xs2:w-10/12 xs3:w-10/12 flex justify-start items-center p-2  hover:rounded-l`}
          >
            <LayoutIconCategories
              type="list"
              bgColor={show ? "" : item.bgcolor}
            >
              <div className="text-2xl w-9 h-9 flex justify-center items-center">
                <IonIcon
                  icon={item.icon}
                  className={`${show ? "text-slate-600" : "text-white"}`}
                ></IonIcon>
              </div>
            </LayoutIconCategories>
            <div className="w-full break-words dark:text-white px-3 font-medium">
              <span className="hidden xs:inline">{item.category}</span>
              <span className="inline xs:hidden">
                {newSlice(item.category)}
              </span>
            </div>
          </div>

          <div className="`w-3/12  flex items-center gap-x-1 xs:gap-x-0">
            <div
              className=" text-xl xs:text-lg 
   xs:pr-3 font-medium dark:text-white"
            >
              {categoryCount ? categoryCount : " 0"}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mobie;
