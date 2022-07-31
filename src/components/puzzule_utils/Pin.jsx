import React from "react";

const Pin = (props) => {
  return (
    <div className="screen-pin flex items-center mt-2">
      <input
        className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value=""
        id="flexCheckDefault"
      />
      <label className=" inline-block text-xs text-white font-semibold bg-blue-500 py-2 px-3 rounded-full">
        {props.children}
      </label>
    </div>
  );
};

export default Pin;
