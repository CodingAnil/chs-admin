import { Spinner } from "@nextui-org/react";
import React from "react";

const ButtonSpinner = ({ color, label }) => {
  return (
    <Spinner
      size="sm"
      label={label || ""}
      color={color || "default"}
      labelColor={color || "default"}
      className="mr-2"
    />
  );
};

export default ButtonSpinner;
