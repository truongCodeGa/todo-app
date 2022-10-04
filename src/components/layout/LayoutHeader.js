import React from "react";
import useParamsCategory from "../hooks/useParamsCategory";
import useSliceString from "../hooks/useSliceString";
import { FieldHeader } from "../field";

const LayoutHeader = ({
  children,
  text = "XIN CHÀO",
  result = 1,
  className = "",
}) => {
  const { cateParams } = useParamsCategory();

  const { newSlice } = useSliceString();
  return (
    <>
      {result > 0 ? (
        cateParams.length > 0 &&
        cateParams.map((item) => (
          <FieldHeader
            key={item.id}
            className={className}
            text={newSlice(item.category)}
            bgColor={item.bgcolor}
          >
            {children}
          </FieldHeader>
        ))
      ) : (
        <FieldHeader className={className} text={text}>
          {children}
        </FieldHeader>
      )}
    </>
  );
};

export default LayoutHeader;
