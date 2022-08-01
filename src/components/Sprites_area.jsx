import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import {
  faArrowsLeftRight,
  faArrowsUpDown,
  faEye,
  faEyeSlash,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "./Others/Icon";
import { spritesList } from "../utils/sprites-list";
import { SpriteList } from "../utils/context-api/sprites_list_context";
import { ActiveSrite } from "../utils/context-api/active_sprite_context";

let InputField = ({
  className = "",
  toggle = false,
  type = "text",
  id = "",
  placeholder = "",
}) => {
  id = id.toLowerCase();
  let { sprite, setActiveSprite } = useContext(ActiveSrite);
  let { list, setSpriteList } = useContext(SpriteList);
  const [value, setValue] = useState("");

  console.log("insize");
  console.log(sprite.name);

  let index = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i].id === sprite.id) {
      index = i;
      break;
    }
  }

  useEffect(() => {
    if (id === "name") {
      setValue(sprite.name);
    }
    if (id === "x") {
      setValue(sprite.properties.x);
    }
    if (id === "y") {
      setValue(sprite.properties.y);
    }
    if (id === "size") {
      setValue(sprite.properties.scale);
    }
    if (id === "direction") {
      setValue(sprite.properties.angle);
    }
  });

  let onChange = (text, state) => {
    if (id === "name" && !text) return;

    if (id === "display") {
      if (state) list[index].properties.display = "block";
      else list[index].properties.display = "none";
    }

    if (id === "name") {
      list[index].name = text;
    }

    if (id === "x") {
      list[index].properties.x = parseFloat(text);
    }

    if (id === "y") {
      list[index].properties.y = parseFloat(text);
    }

    if (id === "size") {
      list[index].properties.scale = parseFloat(text);
    }

    if (id === "direction") {
      list[index].properties.angle = parseFloat(text);
    }

    setValue(text);
    setSpriteList([...list]);
  };

  return toggle ? (
    <div className="relative flex ml-2">
      <div
        onClick={() => onChange(" ", true)}
        className="show-btn bg-white py-1 px-2 rounded border-2 hover:border-blue-400"
      >
        <Icon
          size="sm"
          icon={faEye}
          color={sprite.properties.display === "block" ? "blue" : "gray"}
        />
      </div>
      <div
        onClick={() => onChange(" ", false)}
        className="show-btn bg-white py-1 px-2 rounded border-2 hover:border-blue-400"
      >
        <Icon
          size="sm"
          icon={faEyeSlash}
          color={sprite.properties.display === "hidden" ? "blue" : "gray"}
        />
      </div>
    </div>
  ) : (
    <input
      onChange={(el) => onChange(el.target.value)}
      type={type}
      id={id}
      value={value}
      placeholder={placeholder}
      className={`${className} text-xs border-2 border-blue-200 rounded-full py-2 px-3 focus:border-blue-500  focus:outline-none`}
    />
  );
};

InputField.protoTypes = {
  className: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

let SpritesEditor = () => {
  let { sprite, setActiveSprite } = useContext(ActiveSrite);

  console.log("editor");
  console.log(sprite.name);

  return (
    <div className="controls h-min bg-blue-200 py-2 px-4">
      <div className="grid-row-1 flex justify-between">
        {/* Row 1 */}
        <div className="flex items-center">
          <label className="text-sm font-medium">Sprite</label>
          <InputField id="name" placeholder="Name" className={"w-28 ml-2"} />
        </div>
        <div className="flex items-center">
          <Icon icon={faArrowsLeftRight} />
          <label className="text-sm font-medium ml-1">X</label>
          <InputField
            type="number"
            id="x"
            placeholder="x"
            className="w-16 ml-1 text-center"
          />
        </div>
        <div className="flex items-center">
          <Icon icon={faArrowsUpDown} />
          <label className="text-sm font-medium ml-1">y</label>
          <InputField
            type="number"
            id="y"
            placeholder="y"
            className="w-16 ml-1 text-center"
          />
        </div>
      </div>
      {/* Row 2 */}
      <div className="grid-row-1 flex justify-between mt-2">
        <div className="flex items-center">
          <label className="text-sm font-medium">Show</label>
          <InputField toggle={true} id="display" />
        </div>
        <div className="flex items-center">
          <label className="text-sm font-medium ml-1">Size</label>
          <InputField
            type="number"
            id="Size"
            placeholder="Size"
            className="w-20 ml-1 text-center"
          />
        </div>
        <div className="flex items-center">
          <label className="text-sm font-medium ml-1">Direction</label>
          <InputField
            type="number"
            id="Direction"
            placeholder="Direction"
            className="w-24 ml-1 text-center"
          />
        </div>
      </div>
    </div>
  );
};

let SpriteCard = ({ image, name, state = false, setShowModal }) => {
  let { list, setSpriteList } = useContext(SpriteList);

  return (
    <div
      onClick={() => {
        let item = {
          id: uuidv4(),
          name: name,
          image: image,
          properties: {
            x: 0,
            y: 0,
            angle: 0,
            scale: 1,
            display: "block",
          },
          code: {},
        };
        setSpriteList([...list, item]);
        setShowModal(false);
      }}
      className={`sprite-card flex-col  border-2 ${
        state ? "border-blue-600" : "border-gray-300"
      }  my-2 ml-2 w-24 h-28 rounded-lg relative hover:border-blue-600 hover:cursor-pointer`}
    >
      {/* Image */}
      <div className="image mx-auto w-fit my-2 sm-img">{image}</div>
      <div
        className={`sprite-name ${
          state ? "text-white bg-blue-600" : ""
        } text-xs mt-3 mx-auto w-fit`}
      >
        {/* title */}
        {name}
      </div>
    </div>
  );
};

SpriteCard.protoTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  state: PropTypes.bool.isRequired,
};

let SpriteCardBtn = ({ image, name, id, item }) => {
  let { sprite, setActiveSprite } = useContext(ActiveSrite);
  let { list, setSpriteList } = useContext(SpriteList);

  let index = list.indexOf(sprite);

  if (index === -1) {
    if (list.length) {
      setActiveSprite(list[0]);
      setSpriteList(list);
    } else {
      setActiveSprite(undefined);
    }
  }

  return (
    <div
      onClick={() => {
        setActiveSprite(item);
      }}
      className={`sprite-card flex-col  border-2 ${
        sprite.id === id ? "border-blue-600" : "border-gray-300"
      }  my-2 ml-2 w-24 h-28 rounded-lg overflow-hidden relative hover:border-blue-600 hover:cursor-pointer`}
    >
      {sprite.id === id && (
        <div
          onClick={() => {
            setSpriteList(list.filter((el) => el.id !== id));
          }}
          className="dlt-btn w-fit px-1 absolute right-0 top-0 bg-blue-600 rounded-bl-lg"
        >
          <Icon size="sm" icon={faXmark} color="white" />
        </div>
      )}
      {/* Image */}
      <div className="image mx-auto w-fit my-2 sm-img">{image}</div>
      <div
        className={`sprite-name ${
          sprite.id === id ? "text-white bg-blue-600" : ""
        } text-xs mt-3 py-2 mx-auto w-full text-center`}
      >
        {/* title */}
        {sprite.id === id ? sprite.name : name}
      </div>
    </div>
  );
};

let Model = ({ setShowModal }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative w-auto my-6 mx-auto max-w-3xl">
          <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
              {/* header */}
              <h2 className="text-2xl font-semibold">{"Choose Sprite"}</h2>
              <button
                onClick={() => setShowModal(false)}
                className="p-1 ml-auto bg-transparent border-0 text-black  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
              >
                <Icon icon={faXmark} />
              </button>
            </div>
            <div className="relative px-6 py-4 max-h-96 overflow-scroll">
              {/* body */}
              <div className="sprites-grid flex flex-wrap justify-between ">
                {spritesList.map((el, index) => (
                  <div key={index}>
                    {" "}
                    <SpriteCard
                      image={el}
                      name={`Sprite-${index + 1}`}
                      setShowModal={setShowModal}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Model.protoTypes = {
  setShowModal: PropTypes.func,
};

const SpritesArea = () => {
  const [showModal, setShowModal] = React.useState(false);
  let { list } = useContext(SpriteList);

  return (
    <div className="sprites-controller relative overflow-hidden bg-white ml-1.5 mb-4 mt-1.5 mr-4 border border-gray-300 rounded-xl">
      {/* header form */}
      <SpritesEditor />
      {/* Sprites List */}

      <div className="sprites-grid flex  flex-wrap  ">
        {list.map((sprite) => (
          <div key={sprite.id}>
            <SpriteCardBtn
              image={sprite.image}
              name={sprite.name}
              id={sprite.id}
              item={sprite}
            />
          </div>
        ))}
      </div>

      {/* model trigger btn */}
      <div
        onClick={() => setShowModal(true)}
        className="sprite-add-btn absolute right-3 bottom-3 w-fit py-2 px-3 bg-blue-600 hover:bg-blue-500 hover:cursor-pointer rounded-lg drop-shadow-xl"
      >
        <Icon icon={faPlus} color="white" />
      </div>
      {showModal && <Model setShowModal={setShowModal} />}
    </div>
  );
};

export default SpritesArea;
