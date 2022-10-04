import React from "react";
const ButtonManage = ({
  children,
  isCompleted,
  onClick = () => {},
  className = "",
}) => {
  return (
    <div className="mb-1 xs:mb-0" onClick={onClick}>
      <div
        className={`text-2xl sm:p-1 sm:h-8 sm:w-14 flex justify-center mx-auto 
        text-white rounded select-none cursor-pointer
         ${
           isCompleted
             ? "sm:bg-green-500 text-green-500 sm:text-white"
             : `sm:bg-gray-500 sm:hover:bg-gray-600 sm:hover:text-white ${
                 className ? className : ""
               }`
         } `}
      >
        {children}
      </div>
    </div>
  );
};

export default ButtonManage;
