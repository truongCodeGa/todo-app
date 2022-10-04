import React, { useState } from "react";
import { useTodos } from "../../contexts/todos-context";
import { IonIcon } from "@ionic/react";
import {
  createOutline,
  closeCircleOutline,
  checkmarkOutline,
  saveSharp,
} from "ionicons/icons";
import useParamsCategory from "../hooks/useParamsCategory";
import { LayoutTodoAction } from "../layout";

const ListJob = ({ item, todoList, handleEditTodos }) => {
  const { onDeleteJob, onComplatedjob } = useTodos();
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todoList.todojob);
  const handleSaveJob = (id) => {
    setOnEdit(false);
    if (editValue) handleEditTodos(editValue, id);
  };
  const handleEditJob = () => {
    setOnEdit(true);
  };
  const { cateParams } = useParamsCategory();

  return (
    <div className="mb-10">
      {cateParams.length > 0 &&
        cateParams.map((cate) => (
          <div
            className={`ml-3 mt-4 -mb-[28px] text-2xl ${
              item.isCompleted
                ? "text-green-500"
                : " text-yellow-500 dark:text-darkIconCate"
            }`}
            key={cate.id}
          >
            <IonIcon
              icon={cate.icon}
              className={`dark:bg-darkPrimary2    
             rounded-t-md bg-white  pt-1 px-4`}
            ></IonIcon>
          </div>
        ))}

      <div
        key={item.id}
        className=" bg-white dark:bg-darkPrimary2  text-xl
                       mt-5 mx-3 px-4 gap-x-2 rounded-tl-none rounded-md"
      >
        {onEdit ? (
          <input
            type="text"
            id={item.id}
            defaultValue={item.todojob}
            onChange={(e) => setEditValue(e.target.value)}
            className={` w-full outline-none bg-transparent mt-1 dark:border-darkBorder border-2 text-black dark:text-darkIconCate px-2 py-1 rounded mb-1`}
          ></input>
        ) : (
          <div
            className={`w-full  py-1 break-words ${
              item.isCompleted
                ? "text-green-500 line-through"
                : "text-gray-600 dark:text-darkIconCate"
            }`}
          >
            {item.todojob}
          </div>
        )}
        <div
          className={`mb-1 w-full h-[1px] ${
            item.isCompleted ? "bg-green-500" : "bg-bgSecon dark:bg-darkText"
          }`}
        ></div>
        {onEdit ? (
          <div className=" xs:flex  sm:justify-between pb-1">
            <LayoutTodoAction
              isCompleHidden={item.isCompleted}
              onClick={() => {
                handleSaveJob(item.id);
              }}
              icon={saveSharp}
              className="text-indigo-500"
            ></LayoutTodoAction>
            <LayoutTodoAction
              isCompleHidden={item.isCompleted}
              onClick={() => {
                onDeleteJob(item.id);
              }}
              icon={closeCircleOutline}
              className="text-red-500"
            ></LayoutTodoAction>
          </div>
        ) : (
          <div className="  xs:flex sm:justify-between pb-1">
            <LayoutTodoAction
              isCompleHidden={item.isCompleted}
              onClick={handleEditJob}
              icon={createOutline}
            ></LayoutTodoAction>
            <LayoutTodoAction
              onClick={() => {
                onDeleteJob(item.id);
              }}
              icon={closeCircleOutline}
              className="text-red-400"
            ></LayoutTodoAction>
            <LayoutTodoAction
              isCompleCheck={item.isCompleted}
              onClick={() => {
                onComplatedjob(item.id);
              }}
              icon={checkmarkOutline}
            ></LayoutTodoAction>
          </div>
        )}
      </div>
    </div>
  );
};
// };

export default ListJob;
