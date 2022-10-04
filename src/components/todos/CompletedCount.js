import React from "react";
// import { useSearchParams } from "react-router-dom";
// import { useCategory } from "../../contexts/categories-context";
import { useTodos } from "../../contexts/todos-context";
import useParamsCategory from "../hooks/useParamsCategory";
// import { useSearchParams } from "react-router-dom";

const CompletedCount = () => {
  // const [params] = useSearchParams();
  // const categoryId = params.get("id");
  const { categoryId } = useParamsCategory();
  const { todoList } = useTodos();
  const newToCate = [...todoList];
  const isCountFilCate = newToCate.filter(
    (item) => item.isCompleted === true && item.categoryId === categoryId
  ).length;
  // console.log("A", a);
  return (
    <>
      {isCountFilCate ? (
        <div
          className={`w-5 h-5 bg-red-500 xs:flex items-center 
                justify-center text-white text-sm hidden 
                xs:absolute xs:pr-[1px]  
                xs:pb-[1px] xs:-top-[6px] 
                xs:-left-2 rounded-full`}
        >
          <span>{isCountFilCate}</span>
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default CompletedCount;
