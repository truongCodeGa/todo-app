import { IonIcon } from "@ionic/react";
import React from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useCategory } from "../../contexts/categories-context";
import useParamsCategory from "../hooks/useParamsCategory";
import Input from "../input";
import { LayoutIconCategories, LayoutRadioForm } from "../layout";
import { Radio } from "../radio";
import Validate from "../valed";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldFormToggle } from "../field";
import ButtonFormTogG from "../button";
import { toast } from "react-toastify";
import useSliceString from "../hooks/useSliceString";
const schema = yup.object({
  category: yup.string().required("This field is required"),
});
const FormUpdateCategory = () => {
  const { categoryId: idCate, cateParams: infoCate } = useParamsCategory();
  const { newSlice } = useSliceString();
  const {
    toggleEdit,
    cateList,
    handleToggle,
    colorList,
    setColorList,
    setIconList,
    setCateList,
    iconList,
    iconCateData,
    colorCateData,
    filterData,
  } = useCategory();
  const {
    control,
    watch,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),

    mode: "onChange",
    defaultValues: {
      category: "",
    },
  });
  const handleResetFill = () => {
    handleToggle();
    reset();
  };
  const handleUpdateCategory = (value) => {
    const newUp = cateList;
    newUp.forEach((cate) => {
      if (cate.id === idCate) {
        cate.bgcolor = value.bgcolor;
        cate.category = value.category;
        cate.icon = value.icon;
      }
    });
    setCateList(newUp);
    setColorList([]);
    setIconList([]);
    handleToggle();
    toast.success(
      `Cập nhật danh sách: ${newSlice(value.category)} thành công!`
    );
  };
  const watchColor = watch("bgcolor");
  const watchIcon = watch("icon");
  useEffect(() => {
    async function fetdata() {
      return infoCate.map((item) =>
        reset({
          bgcolor: item.bgcolor,
          category: item.category,
          icon: item.icon,
        })
      );
    }
    fetdata();
  }, [infoCate, idCate, reset]);
  return (
    <FieldFormToggle
      toggle={toggleEdit}
      text="Thông tin"
      onClick={handleResetFill}
    >
      <form
        onSubmit={handleSubmit(handleUpdateCategory)}
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
                    <div className="h-10">
                      {infoCate.length > 0 &&
                        infoCate.map((cate) => (
                          <IonIcon
                            key={cate.id}
                            icon={cate.icon}
                            className="text-white w-10 h-10"
                          ></IonIcon>
                        ))}
                    </div>
                  )}
                </LayoutIconCategories>
              </div>
            ))
          ) : (
            <div>
              {infoCate.length > 0 &&
                infoCate.map((cate) => (
                  <LayoutIconCategories
                    key={cate.id}
                    type="form"
                    bgColor={cate.bgcolor}
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
                        icon={cate.icon}
                        className="text-white w-10 h-10"
                      ></IonIcon>
                    )}
                  </LayoutIconCategories>
                ))}
            </div>
          )}
          <div>
            <Input
              control={control}
              name="category"
              placeholder="enter name category"
            ></Input>
            {errors.category && <Validate>{errors.category.message}</Validate>}
          </div>
        </div>
        <LayoutRadioForm>
          {colorCateData.map((color, index) => (
            <Radio
              key={index}
              control={control}
              value={color.codeColor}
              color={color}
              name="bgcolor"
              checked={watchColor === color.codeColor}
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
              checked={watchIcon === icon.icon}
              onClick={() => {
                filterData(icon.icon, "icon");
              }}
            ></Radio>
          ))}
        </LayoutRadioForm>
        <div className="w-11/12 mx-auto">
          {infoCate &&
            infoCate.map((cate) => (
              <ButtonFormTogG key={cate.id} bgColor={cate.bgcolor}>
                Cập nhật
              </ButtonFormTogG>
            ))}
        </div>
      </form>
    </FieldFormToggle>
  );
};

export default FormUpdateCategory;
