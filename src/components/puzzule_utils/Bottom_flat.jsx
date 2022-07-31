import React from "react";

const BottomFlat = () => {
  return (
    <div className="block  text-sm text-white py-1  rounded-sm mt-2">
      <div className="grid-row-1 flex justify-between">
        <div className="box-start h-1.5 bg-blue-500 rounded-t-sm"></div>
        <div className="box-middle h-1.5  bg-transparent"></div>
        <div className="box-end h-1.5 bg-blue-500 rounded-t-sm"></div>
      </div>
      <div className="grid-row-1 text-xs font-semibold bg-blue-500 px-2 pt-1 pb-2 rounded-b-sm">
        {"delete this clone"}
      </div>
    </div>
  );
};

export default BottomFlat;
