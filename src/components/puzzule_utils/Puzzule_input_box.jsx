import React from "react";
import PropTypes from "prop-types";

const PuzzuleInputBox = ({
  type = "number",
  id = "",
  placeholder = "",
  className = "w-10",
}) => {
  return (
    <input
      type={type}
      id={id}
      placeholder={placeholder}
      className={`${className} appearance-none mx-1 text-center text-xs text-black  border-blue-200 rounded-full border-none  focus:outline-none`}
    />
  );
};

PuzzuleInputBox.propTypes = {
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};

export default PuzzuleInputBox;
