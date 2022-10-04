import React from "react";

const ButtonFormTogG = ({ children, bgColor, type = "submit" }) => {
  return (
    <div className=" w-full mx-auto ">
      <button
        className={`text-center w-full py-2 mt-3 ${
          bgColor ? `bg-[${bgColor}]` : "bg-indigo-400"
        }  text-white  active:bg-gray-700
    rounded-md text-lg  font-medium shadow-md`}
        type={type}
      >
        {children}
      </button>
    </div>
  );
};

export default ButtonFormTogG;
