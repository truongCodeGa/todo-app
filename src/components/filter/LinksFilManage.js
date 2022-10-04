import { IonIcon } from "@ionic/react";
import React from "react";

const LinksFilManage = ({
  className,
  children,
  text = "",
  count,
  onClick = () => {},
}) => {
  return (
    <div
      onClick={onClick}
      className={`${className} w-full
      rounded pt-2 pb-1 px-2 sm:p-4  cursor-pointer`}
    >
      <div className="flex items-center justify-between gap-x-2">
        {children}
        <span className="text-xl font-medium text-white">{count}</span>
      </div>
      <div className="pt-2 w-full text-center font-medium text-white break-words">
        {text}
      </div>
    </div>
  );
};

export default LinksFilManage;
