import React from "react";
import { useCategory } from "../../contexts/categories-context";
import { useTodos } from "../../contexts/todos-context";
import { IonIcon } from "@ionic/react";
import { checkmarkCircle, closeSharp } from "ionicons/icons";
import ButtonManage from "./ButtonManage";
import { motion } from "framer-motion";
import { LayoutIconCategories } from "../layout";
import useSliceString from "../hooks/useSliceString";
import { HiPlusSm } from "react-icons/hi";
const ManageList = () => {
  const { cateList } = useCategory();
  const {
    sttAllJob,
    togGlistAll,
    filterByAllWork,
    todoList,
    onComplatedjob,
    onDeleteJob,
  } = useTodos();

  const { newSlice } = useSliceString();

  const newListWord = filterByAllWork(todoList, sttAllJob);
  const { handleNaviCate } = useCategory();

  return (
    <motion.div
      animate={{
        scaleY: togGlistAll ? 1 : 0,
      }}
      transition={{ duration: 0.5 }}
    >
      <div
        className={`
        ${togGlistAll ? "" : "h-0 hidden"}
      list w-full px-4 pt-4 z-0 transition-all duration-500 `}
      >
        {(cateList || []).length > 0 ? (
          cateList.map((cate) => (
            <div key={cate.id}>
              <div
                onClick={() => {
                  handleNaviCate(cate.id);
                }}
                className=" w-full pr-3 sm:pr-10 font-medium flex items-center justify-start gap-x-2 xs:gap-x-1 xs3:gap-x-2 pb-2 cursor-pointer group"
              >
                <div className="w-10 sm:w-12 sm:mr-[4px]">
                  <LayoutIconCategories type="all" bgColor={cate.bgcolor}>
                    <IonIcon icon={cate.icon}></IonIcon>
                  </LayoutIconCategories>
                </div>
                <div className="text-white text-xl w-10/12 sm:w-full xs3:ml-[-4px] group-hover:text-gray-400">
                  <div className="w-full break-words sm:pr-3">
                    <span className="hidden sm:inline ">{cate.category}</span>
                    <span className="inline sm:hidden" title="">
                      {newSlice(cate.category)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full">
                {(newListWord || []).length > 0 &&
                  newListWord.map(
                    (todo) =>
                      todo.categoryId === cate.id && (
                        <div
                          key={todo.id}
                          className="relative font-medium mb-2 sm:pl-14 pl-11 "
                        >
                          <div
                            className={`ml-[-4px] mr-1 w-4 h-4 rounded-full text-white absolute left-6 sm:left-8 top-1
                               bg-[${cate.bgcolor}] flex justify-center items-center`}
                          >
                            <HiPlusSm size={18}></HiPlusSm>
                          </div>
                          <div
                            className={` ${
                              todo.isCompleted
                                ? "line-through text-green-500"
                                : "text-white"
                            } 
                       w-full border-dotted border-b-2 border-gray-400/50 pb-1 sm:pb-4 sm:pr-[130px] mb-2 sm:mb-0 break-words`}
                          >
                            {todo.todojob}
                          </div>
                          <div className="sm:absolute top-0 right-0 ">
                            <div className=" jj:flex items-center justify-end gap-x-2">
                              <ButtonManage
                                onClick={() => {
                                  onComplatedjob(todo.id);
                                }}
                                isCompleted={todo.isCompleted}
                              >
                                <IonIcon
                                  icon={checkmarkCircle}
                                  className="text-3xl sm:text-2xl"
                                ></IonIcon>
                              </ButtonManage>
                              <ButtonManage
                                className="active:text-red-600 jj:bg-red-200 sm:bg-gray-500 rounded-full 
                                sm:rounded jj:text-gray-500 sm:text-white"
                                onClick={() => {
                                  onDeleteJob(todo.id);
                                }}
                              >
                                <IonIcon icon={closeSharp}></IonIcon>
                              </ButtonManage>
                            </div>
                          </div>
                        </div>
                      )
                  )}
              </div>
            </div>
          ))
        ) : (
          <div className="w-full">
            <h1 className="bg-amber-500 rounded-full mb-4 text-center font-bold text-white">
              Todos
            </h1>
            {(newListWord || []).length > 0 &&
              newListWord.map((todo) => (
                <div
                  key={todo.id}
                  className=" relative w-full font-medium mb-2"
                >
                  <div
                    className={` ${
                      todo.isCompleted
                        ? "line-through text-green-500"
                        : "text-white"
                    }
                border-dotted border-b-2 border-gray-400/50 w-full pb-4 sm:pr-[130px] mb-2 sm:mb-0 break-words`}
                  >
                    {todo.todojob}
                  </div>
                  <div className="sm:absolute top-0 right-0 ">
                    <div className="flex gap-x-2">
                      <ButtonManage
                        onClick={() => {
                          onComplatedjob(todo.id);
                        }}
                        isCompleted={todo.isCompleted}
                      >
                        <IonIcon icon={checkmarkCircle}></IonIcon>
                      </ButtonManage>
                      <ButtonManage
                        onClick={() => {
                          onDeleteJob(todo.id);
                        }}
                      >
                        <IonIcon icon={closeSharp}></IonIcon>
                      </ButtonManage>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default ManageList;
