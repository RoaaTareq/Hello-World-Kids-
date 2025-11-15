import React from "react";
import PropTypes from "prop-types";

const Paragraph = ({
  children,
  color = "text-text-primary",
  size = "text-base",
  weight = "font-normal",
  className = "",
}) => {
  return (
    <p className={`${color} ${size} ${weight} ${className}`}>
      {children}
    </p>
  );
};

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  className: PropTypes.string,
};

export default Paragraph;
