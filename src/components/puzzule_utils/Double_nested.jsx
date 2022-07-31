import React from "react";

const DoubleNested = () => {
  return (
    <div className="block  text-sm text-white py-1  rounded-sm mt-2">
      <div className="grid-row-1 flex justify-between">
        <div className="box-start h-1.5 bg-blue-500 rounded-t-sm"></div>
        <div className="box-middle h-1.5  bg-transparent"></div>
        <div className="box-end h-1.5 bg-blue-500 rounded-t-sm"></div>
      </div>
      <div className="grid-row-1 text-xs font-semibold bg-blue-500 px-2 pt-1 pb-2 rounded-br-sm">
        forever
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-0 w-5 h-1.5 bg-blue-500"></div>
        <div className="box-start w-5 h-1.5 bg-transparent"></div>
        <div className="box-middle h-1.5 text-blue-500 text-sm overflow-hidden rounded-b-sm bg-blue-500"></div>
        <div className="box-end  h-1 bg-transparent"></div>
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-0  h-3 bg-blue-500" style={{ width: "15px" }}></div>
        <div className="box-start w-full h-2 bg-transparent"></div>
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-0 w-8 h-1.5 bg-blue-500"></div>
        <div className="box-start h-1.5 bg-blue-500 rounded-tr-sm"></div>
        <div className="box-middle h-1.5  bg-transparent"></div>
        <div className="box-end h-1.5 bg-blue-500 rounded-t-sm"></div>
      </div>
      <div className="grid-row-1 h-5 text-xs font-semibold bg-blue-500 px-2 pt-1 pb-2 rounded-b-sm">
        {" "}
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-0 w-5 h-1.5 bg-blue-500"></div>
        <div className="box-start w-5 h-1.5 bg-transparent"></div>
        <div className="box-middle h-1.5 text-blue-500 text-sm overflow-hidden rounded-b-sm bg-blue-500"></div>
        <div className="box-end  h-1 bg-transparent"></div>
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-0  h-3 bg-blue-500" style={{ width: "15px" }}></div>
        <div className="box-start w-full h-2 bg-transparent"></div>
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-0 w-8 h-1.5 bg-blue-500"></div>
        <div className="box-start h-1.5 bg-blue-500 rounded-tr-sm"></div>
        <div className="box-middle h-1.5  bg-transparent"></div>
        <div className="box-end h-1.5 bg-blue-500 rounded-t-sm"></div>
      </div>
      <div className="grid-row-1 h-5 text-xs font-semibold bg-blue-500 px-2 pt-1 pb-2 rounded-b-sm">
        {" "}
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-start h-1.5 bg-transparent"></div>
        <div className="box-middle h-1.5 text-blue-500 text-sm overflow-hidden rounded-b-sm bg-blue-500"></div>
        <div className="box-end  h-1 bg-transparent"></div>
      </div>
    </div>
  );
};

export default DoubleNested;
