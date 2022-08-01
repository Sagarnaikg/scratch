import React, { useState } from "react";
import BasicSkin from "../puzzule_utils/Basic_skin";
import PuzzuleInputBox from "../puzzule_utils/Puzzule_input_box";

import {
  faArrowRotateRight,
  faArrowRotateLeft,
} from "@fortawesome/free-solid-svg-icons";
import Icon from "../Others/Icon";

const TurnXDeg = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      turn
      <Icon icon={faArrowRotateRight} color={"white"} className={"px-1"} />
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"x-turn"}
        id={"x-trun"}
      />
      degrees
    </BasicSkin>
  );
};

const PointToDeg = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      point in direction
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"x-turn-in"}
        id={"x-trun"}
      />
    </BasicSkin>
  );
};

const TurnAntiXDeg = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      turn
      <Icon icon={faArrowRotateLeft} color={"white"} className={"px-1"} />
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"x-anti-turn"}
        id={"anti-x-trun"}
      />
      degrees
    </BasicSkin>
  );
};

export { TurnXDeg, TurnAntiXDeg, PointToDeg };
