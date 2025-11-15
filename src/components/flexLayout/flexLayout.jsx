import PropTypes from "prop-types";

const FlexLayout = ({
  children,
  direction = "row", 
  justify = "start", 
  align = "start", 
  gap = "4",
  className = "",
}) => {

  const directionClass = direction === "row" ? "flex-row" : "flex-col";
  const justifyClassMap = {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
    around: "justify-around",
    evenly: "justify-evenly",
  };
  const alignClassMap = {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
    baseline: "items-baseline",
  };

  return (
    <div
      className={`flex ${directionClass} ${justifyClassMap[justify]} ${alignClassMap[align]} gap-${gap} ${className}`}
    >
      {children}
    </div>
  );
};

FlexLayout.propTypes = {
  children: PropTypes.node.isRequired,
  direction: PropTypes.oneOf(["row", "column"]),
  justify: PropTypes.oneOf(["start", "center", "end", "between", "around", "evenly"]),
  align: PropTypes.oneOf(["start", "center", "end", "stretch", "baseline"]),
  gap: PropTypes.string,
  className: PropTypes.string,
};

export default FlexLayout;
