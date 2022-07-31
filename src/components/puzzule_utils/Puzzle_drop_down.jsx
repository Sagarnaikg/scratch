import React from "react";
import { createPopper } from "@popperjs/core";

const PuzzleDropDown = ({ bgColor = "bg-blue-500" }) => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  let color = bgColor;

  return (
    <>
      <div className="inline bg-blue-700 mx-1 px-2 py-1 rounded-full">
        <div className="w-30">
          <div className="relative inline align-middle w-full">
            <button
              className={
                "text-white font-medium text-xs   outline-none focus:outline-none  ease-linear transition-all duration-150 "
              }
              type="button"
              ref={btnDropdownRef}
              onClick={() => {
                dropdownPopoverShow
                  ? closeDropdownPopover()
                  : openDropdownPopover();
              }}
            >
              Show Options
            </button>
            <div
              ref={popoverDropdownRef}
              className={
                (dropdownPopoverShow ? "block " : "hidden ") +
                (color === "white" ? "bg-white " : bgColor + " ") +
                "text-sm z-50 float-left py-1 list-none text-left rounded shadow-lg"
              }
            >
              <a
                href="#pablo"
                className={
                  "text-sm py-1 px-2 font-normal block w-full text-left  whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                random position
              </a>
              <a
                href="#pablo"
                className={
                  "text-sm py-1 px-2 font-normal block w-full text-left  whitespace-nowrap bg-transparent " +
                  (color === "white" ? " text-slate-700" : "text-white")
                }
                onClick={(e) => e.preventDefault()}
              >
                mouse pointer
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PuzzleDropDown;
