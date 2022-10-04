import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useCategory } from "../../contexts/categories-context";

export default function useParamsCategory() {
  const [params] = useSearchParams();
  const categoryId = params.get("id");

  const { cateList } = useCategory();

  const [cateParams, setCateParams] = useState([]);

  useEffect(() => {
    async function fetchCateData() {
      const newArray = [...cateList].filter((item) => item.id === categoryId);
      setCateParams(newArray);
    }
    fetchCateData();
  }, [cateList, setCateParams, categoryId]);
  return {
    cateParams,
    categoryId,
  };
}
