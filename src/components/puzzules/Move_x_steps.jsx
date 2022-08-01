import React, { useState, useContext } from "react";
import BasicSkin from "../puzzule_utils/Basic_skin";
import PuzzuleInputBox from "../puzzule_utils/Puzzule_input_box";

const MoveXSteps = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      move
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"x"}
        id={"steps"}
        placeholder={""}
      />
      steps
    </BasicSkin>
  );
};

export default MoveXSteps;
