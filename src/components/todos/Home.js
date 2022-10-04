import React from "react";
// import useHandleJob from "./hooks/useHandleJob";
import TodoFilter from "./TodoFilter";
import FormAddJob from "./FormAddJob";
import useParamsCategory from "../hooks/useParamsCategory";
import PageNotFound from "../../PageNotFound";
import FromAddCategory from "../category/FromAddCategory";
import { useCategory } from "../../contexts/categories-context";
import { LayoutFooter, LayoutHeader, LayoutTodoApp } from "../layout";
import FormUpdateCategory from "../category/FormUpdateCategory";

const Home = () => {
  const { cateParams } = useParamsCategory();
  const { toggleEdit } = useCategory();

  return (
    <>
      {cateParams.length > 0 ? (
        <LayoutTodoApp
          className={` ${
            toggleEdit ? " xl:mr-[320px]" : ""
          } pb-[168px] jj:pb-[112px] xs:pb-[54px]`}
        >
          <LayoutHeader result={1}>
            <FormAddJob></FormAddJob>
          </LayoutHeader>
          <TodoFilter></TodoFilter>
          <LayoutFooter result={1}></LayoutFooter>
          <FromAddCategory></FromAddCategory>
          <FormUpdateCategory></FormUpdateCategory>
        </LayoutTodoApp>
      ) : (
        <PageNotFound></PageNotFound>
      )}
    </>
  );
};

export default Home;
