import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex justify-center w-full pt-10">
      <div className="">
        <img src="./404.jpg" alt="" className="w-[400px]" />
        <Link to="/">
          <p
            className="text-center font-medium text-white rounded mt-10
           p-4 bg-gradient-to-br from-amber-500 to-red-600 active:to-stone-200"
          >
            Back to home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
