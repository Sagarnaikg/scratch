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

  return (
    <BasicSkin setClicked={setClicked}>
      go to x:
      <PuzzuleInputBox
        clicked={clicked}
        setClicked={setClicked}
        k={"x"}
        id="xy"
      />{" "}
      y:
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"y"}
        id="xy"
      />
    </BasicSkin>
  );
};

export { GoTo, GoToXtoY };
