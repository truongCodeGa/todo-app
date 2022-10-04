import React from "react";
import PropTypes from "prop-types";

const Validate = ({
  error,
  children,
  type = "default",
  className = "",
  ...rest
}) => {
  let styleClassName = "text-gray-500 bg-gray-100";
  switch (type) {
    case "warning":
      styleClassName =
        "text-orange-500 bg-orange-100 before:border-b-[#ffedd5]";
      break;
    default:
      styleClassName = " before:border-b-[#fecaca] text-red-600";
      break;
  }
  return (
    <div
      className={`
      relative z-50
      before:absolute
      before:-top-[30px]
      before:left-[15px]
      before:border-[13px]
      before:border-transparent
      
       ${styleClassName} ${className}
      `}
      {...rest}
    >
      <span
        className="bg-red-200 text-error
      py-2 absolute -top-2 shadow-lg
      px-6 rounded-md -left-2
      "
      >
        {children}
      </span>
    </div>
  );
};
Validate.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["warning"]),
};
export default Validate;
