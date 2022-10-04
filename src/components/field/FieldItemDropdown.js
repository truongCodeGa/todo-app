import React from "react";

const FieldItemDropdown = ({
  text = "",
  children,
  onClick = () => {},
  className = "",
}) => {
  return (
    <div
      onClick={onClick}
      className={`${
        className ? "" : "border-b-2 border-b-white"
      } flex justify-between text-white font-medium hover:px-3 transition-all duration-300
     items-center  w-full px-2 py-[5px]  hover:text-slate-300`}
    >
      <div>{text}</div>
      <div className="text-xl">{children}</div>
    </div>
  );
};

export default FieldItemDropdown;
