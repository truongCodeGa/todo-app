import React from "react";
import { useController } from "react-hook-form";

const Input = ({ name = "", type = "text", children, control, ...props }) => {
  const { field } = useController({
    control,
    name,
    defaultValue: "",
  });
  return (
    <div className="px-3">
      <input
        id={name}
        type={type}
        {...field}
        {...props}
        className="w-full bg-gray-300 rounded-md outline-none text-center p-2 text-lg font-medium  text-darkText
         dark:bg-darkInput dark:text-darkText2 dark:placeholder:text-darkText2"
      />
    </div>
  );
};

export default Input;
