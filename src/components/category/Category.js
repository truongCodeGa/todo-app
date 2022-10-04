import React from "react";
import { useCategory } from "../../contexts/categories-context";
// import Footer from "../layout/Footer";
import CategoryList from "./CategoryList";
//p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8
const Category = () => {
  const { cateList } = useCategory();
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-x-4 ">
      {(cateList || []).length > 0 &&
        cateList.map((item) => (
          <CategoryList key={item.id} item={item}></CategoryList>
        ))}
    </div>
  );
};

export default Category;
