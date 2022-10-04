import React from "react";

const LayoutRadioForm = ({ children }) => {
  return (
    <div
      className=" w-11/12 bg-white  rounded-md mx-auto mt-3
shadow-lg grid grid-cols-4 xs1:grid-cols-5 xs2:grid-cols-6  gap-y-4 gap-x-[16px] xs1:gap-x-[18px] xs2:gap-x-[12px]  p-3
dark:bg-darkPrimary2 
"
    >
      {children}
    </div>
  );
};

export default LayoutRadioForm;
// grid grid-cols-4 xs:grid-cols-5 sm:grid-cols-6 gap-y-2
