import React from "react";

const FieldFillJobBtn = ({
  onClick = () => {},
  children,
  className = "",
  status,
}) => {
  return (
    <div
      onClick={onClick}
      className={`
      ${
        status ? "bg-gray-300 text-red-500  cursor-default p-2" : `${className}`
      }
      w-9 h-9 sm:w-10 sm:h-10 bg-slate-500 flex 
      justify-center items-center mx-auto xs:mx-0 mb-1 xs:mb-0
    text-2xl sm:text-3xl hover:p-2 rounded text-white
     transition-all duration-300 cursor-pointer`}
    >
      {children}
    </div>
  );
};

export default FieldFillJobBtn;
