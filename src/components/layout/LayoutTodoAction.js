import { IonIcon } from "@ionic/react";
import React from "react";

const LayoutTodoAction = ({
  icon,
  isCompleHidden,
  isCompleCheck,
  className = "",
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`${isCompleHidden ? "scale-0 hidden xs:flex " : ""} 
      ${className ? className : "text-stone-600 dark:text-darkIconCate"}
      w-9 h-9 rounded-full xs2:h-7 xs2:w-16 mx-auto sm:mx-0 sm:shadow-xl
      xs2:rounded cursor-pointer hover:bg-gray-300
       transition-all duration-300 hover:scale-110
        select-none flex justify-center items-center
        dark:bg-darkInput xs:mb-0 mb-1

     bg-gray-200
        `}
    >
      <IonIcon
        icon={icon}
        className={`text-2xl py-[2px]
         ${isCompleCheck ? "text-green-500 dark:text-green-500 " : ""}`}
      ></IonIcon>
    </div>
  );
};

export default LayoutTodoAction;
