import { IonIcon } from "@ionic/react";
import React from "react";
import { useForm } from "react-hook-form";
import { useCategory } from "../../contexts/categories-context";
import ButtonFormTogG from "../button/ButtonFormTogG";
import Dropdown from "../dropdown";
import Input from "../input";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Validate from "../valed";
import { v4 as uuidv4 } from "uuid";
import { RiAddCircleFill, RiPlayListAddLine } from "react-icons/ri";
import useClickOutSide from "../hooks/useClickOutSide";
import { useTodos } from "../../contexts/todos-context";
import { toast } from "react-toastify";
import { backspaceSharp } from "ionicons/icons";
const schema = yup.object({
  todojob: yup.string().required("Please enter your reminder!"),
  categoryId: yup.string().required("Select category for todo !"),
});
const FormAddTodosForCate = () => {
  const { cateList, toggleEdit, toggle } = useCategory();
  const { todoList, setTodoList } = useTodos();

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const { show: showF, setShow: setShowF } = useClickOutSide();
  const handleAddTodoForCate = (values) => {
    console.log(values);
    values.id = uuidv4();
    values.isCompleted = false;
    setTodoList([...todoList, values]);
    toast.success("Thêm công việc thành công!");
    reset();
  };
  const handleCloseForm = () => {
    setShowF(false);
  };

  return (
    <>
      {toggle || toggleEdit ? (
        ""
      ) : (
        <button
          onClick={() => {
            setShowF(true);
          }}
          disabled={cateList.length === 0 ? true : false}
          className={`flex items-center gap-x-2  
        transition-all duration-300 text-lg z-10
        ${cateList.length === 0 ? "text-gray-400" : " hover:text-lime-600"}
        ${showF ? "bg-cyan-500 text-white " : ""}
          p-2
        rounded select-none`}
        >
          <RiAddCircleFill size={25}></RiAddCircleFill>
          Thêm công việc
        </button>
      )}
      {/* over play */}
      <div
        className={`w-screen h-screen fixed top-0 left-0 right-0 ${
          showF
            ? "bg-gradient-to-br from-gray-500/90 to-slate-800/90 "
            : "hidden"
        }`}
      ></div>
      <div
        className={`
       
        text-cyan-500
        ${
          showF
            ? " opacity-100 scale-100 left-0 right-0 "
            : "  opacity-0 scale-0 left-[-50%] translate-y-[50%] "
        }  z-[61] transition-all duration-500 w-full md:w-8/12 lg:w-7/12 xl:w-5/12
      absolute bottom-0 rounded-md bg-teal-600 dark:bg-darkPrimary shadow-md`}
      >
        <form onSubmit={handleSubmit(handleAddTodoForCate)}>
          <div className="w-full  text-center p-4 relative ">
            <div
              onClick={handleCloseForm}
              className="relative mx-auto bottom-1 xs:absolute xs:left-3 text-2xl xs:top-[17px]  w-14 h-7 rounded transition-all duration-300
             hover:bg-yellow-200 bg-white dark:bg-darkInput flex items-center justify-center text-red-400 hover:text-amber-800"
            >
              <IonIcon icon={backspaceSharp}></IonIcon>
            </div>
            <p className="text-lg break-words text-gray-200"> Công việc mới </p>
          </div>
          <div>
            <Input
              control={control}
              name="todojob"
              placeholder="Tên công việc..."
            ></Input>
            {errors.todojob && <Validate>{errors.todojob.message}</Validate>}
          </div>
          <div>
            <Dropdown
              control={control}
              name="categoryId"
              data={cateList}
              setValue={setValue}
            ></Dropdown>
            {errors.categoryId && (
              <Validate>{errors.categoryId.message}</Validate>
            )}
          </div>

          <div
            className="w-full flex 
        justify-end items-center gap-x-2 mb-2"
          >
            <div className="w-4/12 pr-3">
              <ButtonFormTogG text="a">
                <span className="xs1:hidden flex justify-center text-2xl">
                  <RiPlayListAddLine></RiPlayListAddLine>
                </span>
                <span className="hidden xs1:inline-block">Thêm mới</span>
              </ButtonFormTogG>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default FormAddTodosForCate;
