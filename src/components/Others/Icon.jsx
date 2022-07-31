import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = ({ size = "sm", color = "black", icon, className = "" }) => {
  return (
    <FontAwesomeIcon
      size={size}
      color={color}
      className={className}
      icon={icon}
    />
  );
};

Icon.propTypes = {
  size: PropTypes.string,
  icon: PropTypes.object.isRequired,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Icon;
