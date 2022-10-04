import React from "react";
import { useTodos } from "../../contexts/todos-context";
import { BgStartusAll } from "../toggle";

const FieldHeader = ({ className, text, children, bgColor }) => {
  const { togGlistAll } = useTodos();

  return (
    <div
      className={`
      sticky top-0 z-20
      ${
        bgColor
          ? `bg-[${bgColor}] text-white`
          : `${
              togGlistAll
                ? "text-white bg-gray-200 "
                : " bg-gray-200 text-cyan-500"
            }`
      }
      dark:bg-bgSecon rounded py-2 
      grid grid-cols-1 relative 
      ${className ? className : "sm:grid-cols-3 lg:grid-cols-2"}
`}
    >
      <BgStartusAll bgColor={bgColor}></BgStartusAll>
      {bgColor ? (
        <div
          className={`w-full xs0:flex  justify-center items-center pr-2 pl-2 dark:xs0:pl-4`}
        >
          <div className="dark:w-5 mx-auto xs0:mx-0  left-0">
            <div
              className={`dark:w-5 dark:h-5 dark:rounded-full ${
                bgColor ? `bg-[${bgColor}]` : ""
              } `}
            ></div>
          </div>
          <div
            className={`mx-auto dark:xs0:pl-2 xs0:mx-0 w-full xs0:max-w-full text-center max-w-[211px] break-words `}
          >
            {text}
          </div>
        </div>
      ) : (
        <h1 className="w-full flex items-center justify-center font-medium z-10">
          {text}
        </h1>
      )}

      {children}
    </div>
  );
};

export default FieldHeader;
