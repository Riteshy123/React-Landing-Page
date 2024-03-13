import React from "react";


const shapes = {
  circle: "rounded-[50%]",
  round: "rounded-sm",
};
const variants = {
  fill: {
    white_A700: "bg-white-A700",
    green_500: "bg-green-500 text-white-A700",
  },
};
const sizes = {
  xs: "h-[22px] px-[5px]",
  sm: "h-[36px] px-[22px] text-[11px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  variant = "fill",
  size = "sm",
  color = "green_500",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};



export { Button };
