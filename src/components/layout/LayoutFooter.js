import React from "react";
import { FilterJobBtn } from "../filter";
import useParamsCategory from "../hooks/useParamsCategory";
import FormAddTodosForCate from "../category/FormAddTodosForCate";
import { BgStartusAll } from "../toggle";
import { useTodos } from "../../contexts/todos-context";
const LayoutFooter = ({ result = 1 }) => {
  const { cateParams } = useParamsCategory();
  const { togGlistAll } = useTodos();
  return (
    <>
      {result > 0 ? (
        cateParams.length > 0 &&
        cateParams.map((item) => (
          <div key={item.id} className="fixed w-full sm:sticky bottom-0">
            <div
              className={`p-2 rounded
              bg-[${item.bgcolor}] dark:bg-darkPrimary
             `}
            >
              <FilterJobBtn></FilterJobBtn>
            </div>
          </div>
        ))
      ) : (
        <div className="fixed w-full sm:sticky bottom-0  z-40">
          <div
            className={`w-full break-words flex items-center ${
              togGlistAll ? "text-white" : "text-cyan-500"
            }
          gap-x-2 h-[54px] bg-gray-200  rounded 
           px-2 cursor-pointer font-medium dark:bg-darkPrimary relative

  `}
          >
            <BgStartusAll></BgStartusAll>
            <FormAddTodosForCate></FormAddTodosForCate>
          </div>
        </div>
      )}
    </>
  );
};

export default LayoutFooter;
