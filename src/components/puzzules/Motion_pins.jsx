import React from "react";
import Pin from "../puzzule_utils/Pin";

const PinXPosition = () => {
  return (
    <Pin>
      <>{"x position"}</>
    </Pin>
  );
};

const PinYPosition = () => {
  return (
    <Pin>
      <>{"y position"}</>
    </Pin>
  );
};

const PinDirection = () => {
  return (
    <Pin>
      <>{"direction"}</>
    </Pin>
  );
};

export { PinXPosition, PinYPosition, PinDirection };
