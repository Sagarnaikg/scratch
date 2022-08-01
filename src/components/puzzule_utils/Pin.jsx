import React, { useContext } from "react";
import { MotionPins } from "../../utils/context-api/active_sprite_context";
import { SpriteList } from "../../utils/context-api/sprites_list_context";

const Pin = (props) => {
  let { list, setSpriteList } = useContext(SpriteList);
  const { motionPins, setMotionPins } = useContext(MotionPins);

  return (
    <div className="screen-pin flex items-center mt-2">
      <input
        onClick={() => {
          let object = motionPins;
          object[props.id] = !object[props.id];
          setMotionPins(object);
          setSpriteList([...list]);
        }}
        className="form-check-input  h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200  align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
        type="checkbox"
        value={motionPins[props.id]}
        id="flexCheckDefault"
      />
      <label className=" inline-block text-xs text-white font-semibold bg-blue-500 py-2 px-3 rounded-full">
        {props.children}
      </label>
    </div>
  );
};

export default Pin;
