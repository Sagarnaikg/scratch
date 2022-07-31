import React from "react";
import BasicSkin from "../puzzule_utils/Basic_skin";
import PuzzuleInputBox from "../puzzule_utils/Puzzule_input_box";

const MoveXSteps = () => {
  return (
    <BasicSkin>
      move
      <PuzzuleInputBox id={"steps"} placeholder={""} />
      steps
    </BasicSkin>
  );
};

export default MoveXSteps;
