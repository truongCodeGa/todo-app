import React from "react";
import { RiCloseFill } from "react-icons/ri";

const FieldFormToggle = ({
  onClick = () => {},
  text = "Danh sách mới",
  children,
  toggle,
}) => {
  return (
    <div
      className={`transition-all fixed right-0 top-0 z-50 bottom-0 w-full xs2:w-[360px]
       duration-500 pb-4 overflow-y-auto
  ${toggle ? "" : "translate-x-[200%]"}
   bg-gray-200 dark:bg-darkPrimary`}
    >
      <div className=" text-center w-full py-4 ">
        <h4 className="font-medium text-lg dark:text-darkText2">{text}</h4>
        <p
          onClick={onClick}
          className="cursor-pointer text-lg float-right mt-[-22px] xs1:mt-[-26px]
          flex items-center
           mr-[-10px] xs:mr-3 xs1:mr-4 text-red-500 hover:text-red-700"
        >
          <span className="hidden xs1:flex">Hủy</span>
          <span
            className="xs1:hidden w-5 h-5 flex justify-center items-center rounded-full
           hover:bg-white hover:scale-125  transition-all duration-300"
          >
            <RiCloseFill size={40}></RiCloseFill>
          </span>
        </p>
      </div>
      {children}
    </div>
  );
};

export default FieldFormToggle;
