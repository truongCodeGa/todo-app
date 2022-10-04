import React from "react";
import { Toggle } from "../toggle";
const LayoutTodoApp = ({ className = "", children }) => {
  return (
    <div className={`${className} transition-all duration-500 `}>
      <div className="m-4">
        <Toggle></Toggle>
      </div>
      <div className="flex justify-center sm:mt-10 w-full ">
        <div
          className="w-full sm:w-10/12 sm:bg-zinc-700/70 bg-transparent
           sm:shadow-2xl rounded  mt-0 sm:mb-10"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default LayoutTodoApp;
