import React from "react";
import { useTodos } from "../../contexts/todos-context";

const BgStartusAll = ({ bgColor }) => {
  const { sttAllJob } = useTodos();
  return (
    <div
      className={`absolute  rounded bottom-0 h-full z-0 ${
        bgColor
          ? "hidden"
          : `${
              sttAllJob === "ACCOMPLISHED"
                ? "bg-green-700 dark:bg-darkPrimary w-full left-0"
                : sttAllJob === "SLACKING"
                ? "bg-indigo-500 dark:bg-darkPrimary w-full left-0"
                : sttAllJob === "TODOS"
                ? "bg-gradient-to-r from-indigo-500 dark:from-darkPrimary via-purple-500  to-pink-500  w-full left-0"
                : "bg-gray-500 dark:bg-white w-0 left-1/2"
            } 
 
              `
      } transition-all duration-300`}
    ></div>
  );
};

export default BgStartusAll;
// sttAllJob === "TODOS"
//? "bg-gradient-to-r from-indigo-500 dark:from-indigo-700 via-purple-500 dark:via-purple-700 to-pink-500 dark:to-pink-700 w-full left-0"
