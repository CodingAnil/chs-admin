import { Autocomplete, AutocompleteItem } from "@nextui-org/react";

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
  onBlur
}) {
  return (
    <div className="flex bg-fieldBG input-field p-2 w-full flex-wrap md:flex-nowrap relative h-[46px] profileC">
      {value && (
        <label className="custom-label">
          {placeholder}
          {/* <span className="text-primary">*</span> */}
        </label>
      )}
      <Autocomplete
        placeholder={placeholder}
        selectedKey={value}
        onSelectionChange={onChange}
        // onInputChange={onInputChange}
        onBlur={onBlur}
        name={name}
        selectorIcon={false}
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
