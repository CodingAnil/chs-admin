import { Autocomplete, AutocompleteItem } from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
export default function SelectDropdown({
  name,
  value,
  onChange,
  placeholder,
  className,
  options,
  onInputChange,
  disabled,
  dropdownType,
}) {
  return (
    <div className="bg-fieldBG border border-darkGrey100 h-13 input-field py-2.5 px-2.5 flex items-center custom-dropdown-option">
      {value && (
        <label className="custom-label">
          {placeholder}
          {/* <span className="text-primary">*</span> */}
        </label>
      )}
      <Autocomplete
        placeholder={placeholder}
        selectedKey={value && value?.toString()}
        onSelectionChange={onChange}
        onInputChange={onInputChange}
        name={name}
        selectorIcon={
          <MdOutlineKeyboardArrowDown className="text-white text-2xl" />
        }
        isClearable={false}
        className={className || ""}
        isDisabled={disabled}
        allowsEmptyCollection={false}
      >
        {options?.map((item) => (
          <AutocompleteItem key={item.value} value={item.value}>
            {item.value}
          </AutocompleteItem>
        ))}
      </Autocomplete>
      {
        (dropdownType = "age" && (
          <span className="absolute right-[18px] top-[14px] text-sm text-darkGrey">
            Years
          </span>
        ))
      }
    </div>
  );
}
