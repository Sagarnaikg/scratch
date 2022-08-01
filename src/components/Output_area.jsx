import React, { useState, useContext } from "react";

import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Others/Icon";
import { useDrag } from "react-use-gesture";
import { SpriteList } from "../utils/context-api/sprites_list_context";
import {
  ActiveSrite,
  MotionPins,
} from "../utils/context-api/active_sprite_context";

const OutputArea = () => {
  let { list, setSpriteList } = useContext(SpriteList);
  let { sprite, setActiveSprite } = useContext(ActiveSrite);
  const { motionPins, setMotionPins } = useContext(MotionPins);

  let dragComponent = useDrag((props) => {
    let index = 0;

    for (let i = 0; i < list.length; i++) {
      if (list[i].id === sprite.id) {
        index = i;
        break;
      }
    }

    list[index].properties.x = props.offset[0];
    list[index].properties.y = props.offset[1];

    setSpriteList([...list]);
  });

  return (
    <div className="display overflow-hidden   bg-white ml-1.5 mt-4 mb-1.5 mr-4 border border-gray-300 rounded-xl">
      <div className="controls bg-blue-200 py-2 px-4">
        <Icon
          size="lg"
          icon={faPlay}
          className="mr-4 hover:cursor-pointer"
          color="green"
        />
        <Icon
          size="lg"
          className="hover:cursor-pointer"
          icon={faStop}
          color="red "
        />
      </div>
      <div className="output-area relative overflow-hidden w-full h-full">
        {list.map((item) => (
          <div
            {...dragComponent()}
            style={{
              position: "relative",
              transformOrigin: "10% 50%",
              left: item.properties.x,
              top: item.properties.y,
              transform: `rotate(${item.properties.angle}deg) scale(${item.properties.scale})`,
              display: item.properties.display,
            }}
            onClick={() => setActiveSprite(item)}
            className="absolute out-image-size"
          >
            {item.image}
          </div>
        ))}
        <div className="absolute right-2 top-2 flex-col">
          {motionPins.x && (
            <div className="text-xs text-white font-semibold bg-blue-500 py-1 px-1.5 rounded-md">
              {`x-position ${parseInt(sprite.properties.x)}`}
            </div>
          )}
          {motionPins.y && (
            <div className="mt-1 text-xs text-white font-semibold bg-blue-500 py-1 px-1.5 rounded-md">
              {`y-position ${parseInt(sprite.properties.y)}`}
            </div>
          )}
          {motionPins.angle && (
            <div className="mt-1 text-xs text-white font-semibold bg-blue-500 py-1 px-1.5 rounded-md">
              {`angle ${parseInt(sprite.properties.angle)}`}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default OutputArea;
