import PropTypes from "prop-types";

const Heading = ({
  children,
  level = 1, // h1 by default
  color = "text-text-primary",
  size = "text-2xl",
  weight = "font-bold",
  className = "",
}) => {
  const Tag = `h${level}`; // dynamic heading tag

  return (
    <Tag className={`${color} ${size} ${weight} ${className}`}>
      {children}
    </Tag>
  );
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  color: PropTypes.string,
  size: PropTypes.string,
  weight: PropTypes.string,
  className: PropTypes.string,
};

export default Heading;
