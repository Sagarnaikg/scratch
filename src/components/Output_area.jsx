import React from "react";

import { faPlay, faStop, faMaximize } from "@fortawesome/free-solid-svg-icons";
import CatSprite from "./Others/Cat_sprite";
import Icon from "./Others/Icon";

const OutputArea = () => {
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
        {/*  <Icon
          size="lg"
          icon={faMaximize}
          className="float-right hover:cursor-pointer"
        /> */}
      </div>
      <CatSprite />
    </div>
  );
};

export default OutputArea;
