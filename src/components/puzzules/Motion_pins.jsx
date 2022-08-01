import React from "react";
import Pin from "../puzzule_utils/Pin";

const PinXPosition = () => {
  return (
    <Pin id="x">
      <>{"x position"}</>
    </Pin>
  );
};

const PinYPosition = () => {
  return (
    <Pin id="y">
      <>{"y position"}</>
    </Pin>
  );
};

const PinDirection = () => {
  return (
    <Pin id="angle">
      <>{"direction"}</>
    </Pin>
  );
};

export { PinXPosition, PinYPosition, PinDirection };
