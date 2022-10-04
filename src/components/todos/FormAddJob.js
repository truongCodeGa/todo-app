import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useTodos } from "../../contexts/todos-context";
import Validate from "../valed";
import { v4 as uuidv4 } from "uuid";
import { useNavigate, useSearchParams } from "react-router-dom";
import * as yup from "yup";

import { yupResolver } from "@hookform/resolvers/yup";

// import { useCategory } from "../../contexts/categories-context";
const schema = yup.object({
  todojob: yup.string().required("Trường này bắt buộc!"),
});
const FormAddJob = () => {
  const [params] = useSearchParams();
  const categoryId = params.get("id");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const { todoList, setTodoList } = useTodos();
  const HandleAddJob = (data) => {
    data.id = uuidv4();
    data.isCompleted = false;
    data.categoryId = categoryId;
    setTodoList([...todoList, data]);
    toast.success("Thêm công việc thành công!");
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(HandleAddJob)}
      className=" mt-2 sm:mt-0 sm:flex rounded-t-2xl
     px-2 sm:col-span-2 lg:col-span-1  gap-x-2 z-20  "
    >
      <div className="w-full md:flex items-center gap-x-3 ">
        <div className="w-full">
          <input
            {...register("todojob")}
            placeholder="Nhập công việc"
            className="p-[6px] px-4 w-full text-cyan-700 dark:border dark:border-darkBorder
             dark:bg-bgSecon dark:text-darkText dark:focus:bg-bgSecon shadow-md
             rounded placeholder:text-cyan-700 dark:placeholder:text-darkPlaceholder
          focus:bg-gray-300 focus:text-slate-800 outline-none"
          />
          {errors.todojob && <Validate>{errors.todojob.message}</Validate>}
        </div>
      </div>

      <button
        type="submit"
        className="py-[6px]  px-4 cursor-pointer 
      break-words bg-cyan-500 text-white rounded
   hover:bg-cyan-600 hover:text-white mt-2 w-full  transition-all
   sm:w-auto sm:mt-0 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-cyan-300"
      >
        Submit
      </button>
    </form>
  );
};

export default FormAddJob;
