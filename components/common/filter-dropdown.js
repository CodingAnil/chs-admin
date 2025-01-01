import React from "react";

const FilterMenu = ({ selected, type, setSelected }) => {
  const optionsValues = () => {
    let options =
      type == "client"
        ? [
            { label: "All", value: "" },
            { label: "Regular Client", value: "Regular_Client" },
            { label: "Elite Client", value: "Elite_Client" },
            { label: "Suspended Clients", value: "Suspended" },
          ]
        : type == "pending-model"
        ? [
            { label: "All Pending Models", value: "" },
            { label: "New Models", value: "Pending" },
            { label: "Re-Submited Models", value: "Rejected" },
          ]
        : [
            { label: "All Verified Models", value: "" },
            { label: "Gent Models", value: "Gent" },
            { label: "Elite Gent Models", value: "Elite_Gent" },
            {
              label: "Exclusive Elite Gent Models",
              value: "Exclusive_Elite_Gent",
            },
            { label: "Suspended Models", value: "Suspended" }
          ];

    return options?.map((it, i) => {
      return (
        <option key={i} value={it?.value} class="text-dark">
          {it?.label}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    setSelected(e?.target?.value);
  };

  return (
    <div>
      <select
        value={selected}
        class="form-control form-select manage-option"
        onChange={handleChange}
      >
        {optionsValues(type)}
      </select>
    </div>
  );
};

export default FilterMenu;
