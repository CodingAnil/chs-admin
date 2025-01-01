import React, { useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import { getCity } from "../../utils/model";

export const LocationInput = ({ values, handleSelect }) => {
  const [searchLocation, setSearchLocation] = useState("");

  const handleChange = async (e) => {
    const inputValue = e.target.value;

    setSearchLocation(inputValue);
    console.log(inputValue, "place");

    if (inputValue?.length < 3) {
      handleSelect("location.city", "");
      handleSelect("location.country", "");
    }
  };

  const getCityCountry = (city, country) => {
    let val = "";
    if (city && country) {
      val = `${city}, ${country}`;
    } else if (city) {
      val = city;
    } else if (country) {
      val = country;
    }
    return val;
  };

  const selectSuggestion = (place) => {
    let iscity, iscountry;
    if (place?.formatted_address.includes(",")) {
      const { city, country } = getCity(place?.formatted_address);
      iscity = city;
      iscountry = country;
    }
    handleSelect("location.city", iscity);
    handleSelect("location.country", iscountry);
  };

  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY,
    onPlaceSelected: selectSuggestion,
  });

  return (
    <div className="w-full">
      <div className="form-group">
        <input
          name="location"
          aria-label="location"
          value={
            searchLocation ||
            getCityCountry(values?.location?.city, values?.location?.country) ||
            ""
          }
          ref={ref}
          onChange={handleChange}
          type="text"
          onBlur={() => setSearchLocation("")}
          placeholder={"Location"}
          className="block border-3 outline-1 text-black text-sm placeholder:text-black w-full pr-10"
        />
      </div>
    </div>
  );
};
