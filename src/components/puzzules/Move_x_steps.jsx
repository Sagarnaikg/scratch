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

const ChangeXBy = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      change x by
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"x"}
        id={"steps"}
        placeholder={""}
      />
    </BasicSkin>
  );
};

const ChangeYBy = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      change y by
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"y"}
        id={"steps"}
        placeholder={""}
      />
    </BasicSkin>
  );
};

const SetX = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      set x to
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"x-set"}
        id={"steps"}
        placeholder={""}
      />
    </BasicSkin>
  );
};

const SetY = () => {
  const [clicked, setClicked] = useState(false);

  return (
    <BasicSkin setClicked={setClicked}>
      set y to
      <PuzzuleInputBox
        setClicked={setClicked}
        clicked={clicked}
        k={"y-set"}
        id={"steps"}
        placeholder={""}
      />
    </BasicSkin>
  );
};

export { ChangeXBy, ChangeYBy, SetX, SetY };

export default MoveXSteps;
