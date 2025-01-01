import { Spinner } from "@nextui-org/react";
import React, { useEffect, useState } from "react";
import { loadingLabels } from "../../utils/constants";

const Loader = ({ size, color, label, customClass }) => {
  const [randomLabel, setRandomLabel] = useState(label || "Loading...");

  useEffect(() => {
    if (!label) {
      setRandomLabel(
        loadingLabels[Math.floor(Math.random() * loadingLabels.length)]
      );
    }
  }, [label]);

  return (
    <div
      className={`flex flex-1 justify-center items-center mb-4 ${customClass}`}
    >
      <Spinner
        size={size || "lg"}
        label={label || randomLabel}
        color={color || "default"}
        labelColor={color || "default"}
      />
    </div>
  );
};

export default Loader;
