import Input from "../input";
import React from "react";
import { Radio } from "../radio";
import { v4 as uuidv4 } from "uuid";
import { IonIcon } from "@ionic/react";
import Validate from "../valed";
import { useForm } from "react-hook-form";
import { useCategory } from "../../contexts/categories-context";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import LayoutRadioForm from "../layout/LayoutRadioForm";
import { LayoutIconCategories } from "../layout";
import { FieldFormToggle } from "../field";
import ButtonFormTogG from "../button/ButtonFormTogG";

const schema = yup.object({
  category: yup.string().required("Trường này bắt buộc!"),
});
const FromAddCategory = () => {
  const {
    toggle,
    colorList,
    iconList,
    cateList,
    setCateList,
    handleToggle,
    colorCateData,
    iconCateData,
    setColorList,
    setIconList,
    filterData,
  } = useCategory();
  const {
    handleSubmit,
    watch,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
    defaultValues: {
      category: "",
      bgcolor: colorCateData[5].codeColor,
      icon: iconCateData[0].icon,
    },
  });
  const handleAddCategories = (values) => {
    values.id = uuidv4();
    setCateList([...cateList, values]);
    toast.success("Thêm mới danh sách thành công!");
    setColorList([]);
    setIconList([]);
    reset();
  };
  const handleResetFill = () => {
    handleToggle("close");
    reset();
  };
  const watchBgColorCate = watch("bgcolor");
  const watchIconCate = watch("icon");
  return (
    <FieldFormToggle toggle={toggle} onClick={handleResetFill}>
      <form
        onSubmit={handleSubmit(handleAddCategories)}
        className=" w-[240px] xs:w-full clear-both"
      >
        <div
          className="bg-white w-11/12 xs:w-11/12 rounded-md mx-auto mt-1 py-4 shadow-lg
        dark:bg-darkPrimary2 dark:border dark:border-darkBorder"
        >
          {colorList.length > 0 ? (
            colorList.map((item, index) => (
              <div key={index}>
                <LayoutIconCategories type="form" bgColor={item.codeColor}>
                  {iconList.length > 0 ? (
                    iconList.map((icItem, index) => (
                      <IonIcon
                        key={index}
                        icon={icItem.icon}
                        className="text-white w-10 h-10"
                      ></IonIcon>
                    ))
                  ) : (
                    <IonIcon
                      icon={iconCateData[0].icon}
                      className="text-white w-10 h-10"
                    ></IonIcon>
                  )}
                </LayoutIconCategories>
              </div>
            ))
          ) : (
            <div>
              <LayoutIconCategories
                type="form"
                bgColor={colorCateData[5].codeColor}
              >
                {iconList.length > 0 ? (
                  iconList.map((icItem, index) => (
                    <IonIcon
                      key={index}
                      icon={icItem.icon}
                      className="text-white w-10 h-10"
                    ></IonIcon>
                  ))
                ) : (
                  <IonIcon
                    icon={iconCateData[0].icon}
                    className="text-white w-10 h-10"
                  ></IonIcon>
                )}
              </LayoutIconCategories>
            </div>
          )}
          <div>
            <Input
              control={control}
              name="category"
              placeholder="Tên danh sách"
            ></Input>
            {errors.category && <Validate>{errors.category.message}</Validate>}
          </div>
          {/* )} */}
        </div>
        <LayoutRadioForm>
          {colorCateData.map((color, index) => (
            <Radio
              key={index}
              control={control}
              value={color.codeColor}
              color={color}
              name="bgcolor"
              checked={watchBgColorCate === color.codeColor}
              onClick={() => {
                filterData(color.codeColor, "color");
              }}
            ></Radio>
          ))}
        </LayoutRadioForm>
        <LayoutRadioForm>
          {iconCateData.map((icon, index) => (
            <Radio
              key={index}
              control={control}
              value={icon.icon}
              icon={icon}
              name="icon"
              checked={watchIconCate === icon.icon}
              onClick={() => {
                filterData(icon.icon, "icon");
              }}
            ></Radio>
          ))}
        </LayoutRadioForm>
        <div className="w-11/12 mx-auto">
          <ButtonFormTogG>Thêm</ButtonFormTogG>
        </div>
      </form>
    </FieldFormToggle>
  );
};

export default FromAddCategory;
