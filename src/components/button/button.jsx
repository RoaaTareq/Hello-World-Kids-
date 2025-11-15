
import PropTypes from "prop-types";

const Button = ({
  children,
  color = "primary", // default color
  size = "md",
  rounded = true,
  onClick,
  className = "",
}) => {
  // Sizes
  const sizeClasses = {
    sm: "px-3 py-1 text-sm",
    md: "px-6 py-2 text-base",
    lg: "px-8 py-3 text-lg",
  };

  // Rounded
  const roundedClass = rounded ? "rounded" : "rounded-none";

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} bg-${color} text-white ${roundedClass} hover:bg-${color}-dark transition-all duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

// Prop types for safety
Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    "primary",
    "success",
    "danger",
    "warning",
    "bg-light",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  rounded: PropTypes.bool,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
