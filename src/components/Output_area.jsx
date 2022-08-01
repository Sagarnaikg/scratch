import React, { useState, useContext } from "react";

import { faPlay, faStop } from "@fortawesome/free-solid-svg-icons";
import CatSprite from "./Others/Cat_sprite";
import Icon from "./Others/Icon";
import { useDrag } from "react-use-gesture";
import { SpriteList } from "../utils/context-api/sprites_list_context";
import { ActiveSrite } from "../utils/context-api/active_sprite_context";

const OutputArea = () => {
  let [position, setPosition] = useState({ x: 0, y: 0 });

  let { list, setSpriteList } = useContext(SpriteList);
  let { sprite, setActiveSprite } = useContext(ActiveSrite);

  console.log(sprite.properties);

  let dragComponent = useDrag((props) => {
    setPosition({
      x: props.offset[0],
      y: props.offset[1],
    });
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
      </div>
    </div>
  );
};

export default OutputArea;
