import React from "react";
import { Wraper } from "./styled";
export const Button = ({
  type = "button",
  value = "Click ",
  customClass = "",
  onClick,
  to = "#",
}) => {
  return (
    <Wraper>
      <input
        onClick={onClick}
        type={type}
        className={`btnStyle ${customClass}`}
        value={value}
      />
    </Wraper>
  );
};
