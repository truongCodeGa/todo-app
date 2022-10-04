import React from "react";

const LayoutIconCategories = ({
  type = "",
  className = "",
  children,
  bgColor,
}) => {
  function styleIcon(type) {
    if (type === "form") {
      let newStyle = "w-[70px] h-[70px] mb-4 mx-auto";
      return newStyle;
    } else if (type === "list") {
      let newStyle =
        "  text-4xl  sm:absolute sm:translate-y-[-50%] sm:left-6 mx-auto";
      return newStyle;
    } else if (type === "fill") {
      let newStyle = "w-9 h-9 sm:w-[60px] sm:h-[60px] text-2xl sm:text-5xl";
      return newStyle;
    } else if (type === "all") {
      let newStyle = "sm:w-12 sm:h-12 w-9 h-9 text-white text-xl sm:text-3xl";
      return newStyle;
    }
  }
  return (
    <div
      className={`${styleIcon(type)} ${
        bgColor ? `bg-[${bgColor}]` : "bg-white"
      } flex items-center justify-center
       transition-all duration-500  rounded-full`}
    >
      <div className={`${className ? className : "flex "}`}>{children}</div>
    </div>
  );
};

export default LayoutIconCategories;
