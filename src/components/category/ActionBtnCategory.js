import React from "react";
import { IonIcon } from "@ionic/react";
const ActionBtnCategory = ({ icon, onClick = () => {}, bgColor }) => {
  return (
    <div className="text-white relative mt-2 xs:mt-0">
      <div
        onClick={onClick}
        className={`bg-[${bgColor}] group cursor-pointer p-1 rounded-md flex`}
      >
        <IonIcon
          icon={icon}
          className="rotate-[180deg] mx-auto xs:mx-0 text-4xl transition-all duration-500 group-hover:rotate-[360deg]"
        ></IonIcon>
      </div>

      <div className="hidden xs:block w-1 h-7 bg-slate-500 absolute left-[19px]"></div>
    </div>
  );
};

export default ActionBtnCategory;
