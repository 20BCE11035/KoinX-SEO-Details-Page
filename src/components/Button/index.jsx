import React from "react";
import PropTypes from "prop-types";

const shapes = { circle: "rounded-[50%]", round: "rounded" };
const variants = {
  fill: {
    blue_gray_900_01: "bg-blue_gray-900_01",
    blue_gray_400: "bg-blue_gray-400 text-white-A700",
    indigo_400: "bg-indigo-400",
    white_A700: "bg-white-A700 text-gray-900",
    blue_gray_50_01: "bg-blue_gray-50_01 text-teal-500",
  },
  gradient: { blue_A400_indigo_A700: "bg-gradient " },
};
const sizes = { xs: "p-1", sm: "p-2.5", md: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "blue_gray_900_01",
    "blue_gray_400",
    "indigo_400",
    "white_A700",
    "blue_gray_50_01",
    "blue_A400_indigo_A700",
  ]),
};

export { Button };
