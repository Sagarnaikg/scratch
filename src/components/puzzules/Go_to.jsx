import React from "react";
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
  return (
    <BasicSkin>
      go to x:
      <PuzzuleInputBox id="x" /> y:
      <PuzzuleInputBox id="y" />
    </BasicSkin>
  );
};

export { GoTo, GoToXtoY };
