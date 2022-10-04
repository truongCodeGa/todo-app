import React, { useEffect, useState } from "react";
import { useWatch } from "react-hook-form";
import useClickOutSide from "../hooks/useClickOutSide";
import { IonIcon } from "@ionic/react";
import useSliceString from "../hooks/useSliceString";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { BsCheck2 } from "react-icons/bs";
const Dropdown = ({
  control,
  setValue,
  name,
  data,
  droplabel = "Chọn danh sách",
}) => {
  const { show, setShow, nodeRef } = useClickOutSide();
  const { newSlice } = useSliceString();
  const dropdownValue = useWatch({
    control,
    name: "categoryId",
    defaultValue: "",
  });
  console.log();
  const [labelData, setLabelData] = useState([]);

  const handleClickDropdownItem = (id) => {
    setValue(name, id);
    setShow(false);
    setLabelData(data.filter((item) => item.id === id));
  };
  console.log("labelData", labelData);
  console.log("dropdownValue", dropdownValue);
  useEffect(() => {
    if (dropdownValue === "") setLabelData([]);
  }, [dropdownValue]);

  return (
    <div className={`relative px-3 w-full mt-2  `} ref={nodeRef}>
      <div
        className={`w-full bg-gray-200 
        py-4 px-2 xs1:px-4 rounded mb-1
  dark:bg-darkInput
        flex justify-between items-center `}
        onClick={() => setShow(!show)}
      >
        <div className="hidden xs2:inline-block">Danh sách</div>
        <div className="">
          {labelData.length > 0 ? (
            labelData.map((item) => (
              <div key={item.id} className="xs w-full flex items-center ">
                <div
                  className={`w-4 h-4 ml-1 mr-2 xs2:mx-2 flex-none mt-[2px] bg-[${item.bgcolor}] rounded-full`}
                ></div>
                <div className=" w-28 xs0:w-full">
                  {newSlice(item.category)}
                </div>

                <div className="xs2:relative absolute right-6 xs1:right-7 xs2:right-0">
                  <MdOutlineKeyboardArrowRight
                    size={23}
                    className={`${
                      show ? "rotate-90" : ""
                    } transition-all duration-300 mr-[-6px]`}
                  ></MdOutlineKeyboardArrowRight>
                </div>
              </div>
            ))
          ) : (
            <div className="flex items-center w-full justify-between">
              <div>{droplabel}</div>
              <div className="xs2:relative absolute right-5 xs2:right-0">
                <MdOutlineKeyboardArrowRight
                  size={23}
                  className={`${
                    show ? "rotate-90" : ""
                  } transition-all duration-300`}
                ></MdOutlineKeyboardArrowRight>
              </div>
            </div>
          )}
        </div>
      </div>
      <div
        className={`w-full overflow-y-auto transition-all duration-500 
       rounded bg-white dark:bg-darkInput ${
         show ? "h-[192px]" : "opacity-0 invisible h-0"
       }`}
      >
        {(data || []).length > 0 &&
          data.map((item) => (
            <div
              className={`p-3  border-b-[1px] border-spacing-2 cursor-pointer
               hover:bg-gray-200 dark:hover:bg-darkText2 ${
                 dropdownValue === item.id && "bg-darkText2 xs1:bg-transparent"
               } text-xl 
               flex gap-x-3 items-center`}
              onClick={() => {
                handleClickDropdownItem(item.id);
              }}
              key={item.id}
            >
              <div className="w-10">
                <div
                  className={`bg-[${item.bgcolor}] w-10 h-10 rounded-full text-white flex justify-center items-center`}
                >
                  <IonIcon icon={item.icon}></IonIcon>
                </div>
              </div>
              <div className="w-10/12 xs1:pr-0 pr-4 text-base">
                {newSlice(item.category)}
              </div>
              {dropdownValue === item.id && (
                <div className=" text-2xl">
                  <BsCheck2 className="hidden xs1:flex "></BsCheck2>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
