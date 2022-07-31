import React from "react";
import BasicSkin from "../puzzule_utils/Basic_skin";
import PuzzleDropDown from "../puzzule_utils/Puzzle_drop_down";
import PuzzuleInputBox from "../puzzule_utils/Puzzule_input_box";

const GlideToDropDown = () => {
  return (
    <BasicSkin>
      glide <PuzzuleInputBox id="sec" /> secs to <PuzzleDropDown />
    </BasicSkin>
  );
};

const GlideToXY = () => {
  return <div>Glide</div>;
};

export { GlideToXY, GlideToDropDown };
