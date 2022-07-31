import React from "react";
import BasicSkin from "../puzzule_utils/Basic_skin";
import PuzzuleInputBox from "../puzzule_utils/Puzzule_input_box";

import {
  faArrowRotateRight,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Others/Icon";

const TurnXDeg = () => {
  return (
    <BasicSkin>
      turn
      <Icon icon={faArrowRotateRight} color={"white"} className={"px-1"} />
      <PuzzuleInputBox id={"x-trun"} />
      degrees
    </BasicSkin>
  );
};

const TurnAntiXDeg = () => {
  return (
    <BasicSkin>
      turn
      <Icon icon={faArrowRotateLeft} color={"white"} className={"px-1"} />
      <PuzzuleInputBox id={"anti-x-trun"} />
      degrees
    </BasicSkin>
  );
};

export { TurnXDeg, TurnAntiXDeg };
