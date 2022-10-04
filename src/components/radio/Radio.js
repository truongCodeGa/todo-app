import React from "react";
import { useController } from "react-hook-form";
//Bài 149: Thực hành Register Form với RHF - Custom Radio
import { IonIcon } from "@ionic/react";

const Radio = ({ control, checked, color, children, icon, ...props }) => {
  const { field } = useController({
    control,
    name: props.name,
    defaultValue: "",
  });
  return (
    <label className="cursor-pointer">
      <input
        type="radio"
        checked={checked}
        {...field}
        {...props}
        className="hidden"
      />
      <div
        className={`${
          checked
            ? ` ring-2 ring-slate-400 dark:ring-darkText2 dark:ring-offset-darkPrimary2 ring-offset-2`
            : ``
        } w-9 h-9 xs:w-11 xs:h-11 xs1:w-11 xs1:h-11 xs2:w-10 xs2:h-10  mx-auto  rounded-full ${
          color
            ? `bg-[${color.codeColor}]`
            : "bg-gray-300 flex items-center justify-center dark:bg-darkInput text-2xl xs:text-2xl text-zinc-600 dark:text-darkIconCate "
        } `}
      >
        {icon ? <IonIcon icon={icon.icon}></IonIcon> : ""}
      </div>
    </label>
  );
};

export default Radio;
