import React, { useState } from "react";
import PropTypes from "prop-types";

const Image = ({
  src,
  alt = "image",
  fallback = "https://via.placeholder.com/150",
  rounded = false,
  className = "",
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleError = () => {
    setImgSrc(fallback);
  };

  const roundedClass = rounded ? "rounded-full" : "rounded";

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleError}
      className={`${roundedClass} ${className}`}
      loading="lazy"
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  fallback: PropTypes.string,
  rounded: PropTypes.bool,
  className: PropTypes.string,
};

export default Image;
