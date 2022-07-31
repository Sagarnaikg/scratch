import React from "react";
import PropTypes from "prop-types";

import {
  faArrowsLeftRight,
  faArrowsUpDown,
  faEye,
  faEyeSlash,
  faXmark,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import CatSprite from "./Others/Cat_sprite";
import Icon from "./Others/Icon";

let InputField = ({
  className = "",
  type = "text",
  id = "",
  placeholder = "",
}) => {
  return (
    <input
      type={type}
      id={id}
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
          <div className="relative flex ml-2">
            <div className="show-btn bg-white py-1 px-2 rounded border-2 hover:border-blue-400">
              <Icon size="sm" icon={faEye} color={true ? "blue" : "gray"} />
            </div>
            <div className="show-btn bg-white py-1 px-2 rounded border-2 hover:border-blue-400">
              <Icon
                size="sm"
                icon={faEyeSlash}
                color={false ? "blue" : "gray"}
              />
            </div>
          </div>
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

let SpriteCard = ({ image, name, state = false }) => {
  return (
    <div
      className={`sprite-card flex-col w-fit border-2 ${
        state ? "border-blue-600" : "border-gray-300"
      }  my-2 ml-2 rounded-lg relative hover:border-blue-600 hover:cursor-pointer`}
    >
      {state && (
        <div className="dlt-btn w-fit px-1 absolute right-0 top-0 bg-blue-600 rounded-bl-lg">
          <Icon size="sm" icon={faXmark} color="white" />
        </div>
      )}
      {/* Image */}
      <div className="image w-fit m-auto mt-1">{image}</div>
      <div
        className={`sprite-name ${
          state ? "text-white bg-blue-600" : ""
        } text-xs mt-1 px-5 py-1`}
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
            <div className="relative p-6 flex-auto">
              {/* body */}
              <div className="sprites-grid flex">
                <SpriteCard
                  image={<CatSprite height={40} width={30} />}
                  name={"Sprite"}
                />
                <SpriteCard
                  image={<CatSprite height={40} width={30} />}
                  name={"Sprite"}
                />
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

  return (
    <div className="sprites-controller relative overflow-hidden  bg-white ml-1.5 mb-4 mt-1.5 mr-4 border border-gray-300 rounded-xl">
      {/* header form */}
      <SpritesEditor />
      {/* Sprites List */}
      <div className="sprites-grid flex">
        <SpriteCard
          image={<CatSprite height={40} width={30} />}
          name={"Sprite"}
          state={true}
        />
        <SpriteCard
          image={<CatSprite height={40} width={30} />}
          name={"Sprite"}
        />
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
