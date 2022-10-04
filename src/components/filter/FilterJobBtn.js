import React from "react";
import { BsBorderAll } from "react-icons/bs";
import CompletedCount from "../todos/CompletedCount";
import { BsFolderCheck } from "react-icons/bs";
import { ImRadioUnchecked } from "react-icons/im";
import { useTodos } from "../../contexts/todos-context";
import { FieldFillJobBtn } from "../field";
import { TbArrowBack } from "react-icons/tb";
import { VscSettings } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";
import { useCategory } from "../../contexts/categories-context";
const FilterJobBtn = () => {
  const { status, setCompletedFilter } = useTodos();
  const navigate = useNavigate();
  const { setToggleEdit } = useCategory();
  const backResetToggle = () => {
    setToggleEdit(false);
    navigate("/");
  };
  return (
    <div className="grid grid-cols-2 jj:grid-cols-3 gap-y-4 xs:gap-y-0 xs:flex xs:justify-center gap-x-3 select-none">
      <FieldFillJobBtn
        className="bg-gradient-to-tr from-cyan-500 to-cyan-700"
        onClick={backResetToggle}
      >
        <TbArrowBack></TbArrowBack>
      </FieldFillJobBtn>
      <FieldFillJobBtn
        onClick={() => {
          setCompletedFilter("ALL");
        }}
        status={status === "ALL"}
        className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
      >
        <BsBorderAll></BsBorderAll>
      </FieldFillJobBtn>
      <FieldFillJobBtn
        onClick={() => {
          setCompletedFilter("ACTIVE");
        }}
        status={status === "ACTIVE"}
        className="bg-gradient-to-r from-indigo-900 to-indigo-400"
      >
        <ImRadioUnchecked></ImRadioUnchecked>
      </FieldFillJobBtn>

      <div
        className="relative"
        onClick={() => {
          setCompletedFilter("COMPLETED");
        }}
      >
        <FieldFillJobBtn
          status={status === "COMPLETED"}
          className=" bg-gradient-to-r from-green-500 to-green-700"
        >
          <BsFolderCheck></BsFolderCheck>
        </FieldFillJobBtn>
        <CompletedCount></CompletedCount>
      </div>
      <FieldFillJobBtn
        onClick={() => {
          setToggleEdit(true);
        }}
        className="bg-gradient-to-tr from-orange-500 to-orange-300 "
      >
        <VscSettings></VscSettings>
      </FieldFillJobBtn>
    </div>
  );
};

export default FilterJobBtn;
