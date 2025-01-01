"use client";

import { useEffect, useState } from "react";
import { capitalizeFirstLetter } from "../../utils/model";

const CustomFormSwitch = ({
  disabled,
  name2,
  name,
  item1,
  item2,
  setData,
  setError,
  value,
  setCockSizeStatus,
}) => {
  const [selected, setSelected] = useState(item1);

  const handleChange = (name, value) => {
    if (disabled) return;
    setSelected(value);
    setData(`stats.${name}`, value?.toLowerCase());
    setData(`stats.${name2}`, "");

    setError(`stats.${name2}`, "");

    // if ((name = "cockSizeType" && setCockSizeStatus)) {
    //   setCockSizeStatus("Pending");
    // }
  };

  useEffect(() => {
    if (value) {
      setSelected(capitalizeFirstLetter(value));
    }
  }, [value]);

  return (
    <div className="flex justify-center">
      <div className="relative inline-flex items-center bg-[#787878] rounded-md p-1 h-[39px]">
        <label
          aria-disabled={disabled}
          htmlFor={item1}
          className={`cursor-pointer px-4 py-1.5 text-white flex justify-center h-[33px] w-[42px] rounded-md w-11 transition-all ${
            selected === item1 ? "bg-primary" : ""
          }`}
          onClick={() => handleChange(name, item1)}
        >
          {item1}
        </label>

        <label
          aria-disabled={disabled}
          htmlFor={item2}
          className={`cursor-pointer px-4 py-1.5 text-white flex justify-center h-[33px] w-[42px] rounded-md w-11 transition-all ${
            selected === item2 ? "bg-primary" : ""
          }`}
          onClick={() => handleChange(name, item2)}
        >
          {item2}
        </label>
      </div>
    </div>
  );
};

export default CustomFormSwitch;
