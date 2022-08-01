import React, { useState, useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { SpriteList } from "../../utils/context-api/sprites_list_context";
import { ActiveSrite } from "../../utils/context-api/active_sprite_context";

const PuzzuleInputBox = ({
  type = "number",
  id = "",
  k,
  placeholder = "",
  className = "w-10",
  setClicked = () => {},
  clicked = false,
}) => {
  let { list, setSpriteList } = useContext(SpriteList);
  let { sprite, setActiveSprite } = useContext(ActiveSrite);
  const [value, setValue] = useState(10);

  useEffect(() => {
    if (clicked) {
      let index = 0;

      for (let i = 0; i < list.length; i++) {
        if (list[i].id === sprite.id) {
          index = i;
          break;
        }
      }

      if (k === "x") {
        list[index].properties.x += value;
      }

      if (k === "x-turn") {
        list[index].properties.angle += value;
      }

      if (k === "x-anti-turn") {
        list[index].properties.angle -= value;
      }

      setSpriteList([...list]);
      setClicked(false);
    }
  }, [clicked]);

  return (
    <input
      onChange={(el) => setValue(parseInt(el.target.value))}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      className={`${className} appearance-none mx-1 text-center text-xs text-black  border-blue-200 rounded-full border-none  focus:outline-none`}
    />
  );
};

PuzzuleInputBox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default PuzzuleInputBox;
