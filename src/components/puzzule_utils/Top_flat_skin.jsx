import React from "react";

const TopFlatSkin = (props) => {
  return (
    <div className="block  text-sm text-white py-1  rounded-sm mt-2">
      <div className="grid-row-1 text-xs font-semibold bg-blue-500 px-2 pt-2 pb-2 rounded-sm">
        {props.children}
      </div>
      <div className="grid-row-1 flex justify-between">
        <div className="box-start h-1.5 bg-transparent"></div>
        <div className="box-middle h-1.5 text-blue-500 text-sm overflow-hidden rounded-b-sm bg-blue-500"></div>
        <div className="box-end  h-1 bg-transparent"></div>
      </div>
    </div>
  );
};

export default TopFlatSkin;
