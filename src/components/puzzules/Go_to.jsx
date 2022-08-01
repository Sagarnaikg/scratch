import React, { useState } from "react";
import BasicSkin from "../puzzule_utils/Basic_skin";
import PuzzleDropDown from "../puzzule_utils/Puzzle_drop_down";
import PuzzuleInputBox from "../puzzule_utils/Puzzule_input_box";

const GoTo = () => {
  return (
    <BasicSkin>
      <div className="flex items-center">
        go to <PuzzleDropDown />
      </div>
    </BasicSkin>
  );
};

const GoToXtoY = () => {
  const [clicked, setClicked] = useState(false);
  const [x, setX] = useState(10);
  const [y, setY] = useState(10);

  useState(() => {
    console.log(x);
    console.log(y);
  }, [x, y]);

  return (
    <BasicSkin setClicked={setClicked}>
      go to x:
      <PuzzuleInputBox setCor={clicked ? setX : () => {}} k={"xy"} id="xy" /> y:
      <PuzzuleInputBox setCor={clicked ? setY : () => {}} k={"yx"} id="xy" />
    </BasicSkin>
  );
};

export { GoTo, GoToXtoY };
