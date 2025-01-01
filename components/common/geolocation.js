"use client";

import { useEffect, useState } from "react";
import { usePlacesWidget } from "react-google-autocomplete";
import ErrInput from "./errorInput";
import { getCity, getCityCountry } from "../../utils/model";

const GeolocationComponent = ({
  type,
  setData,
  data,
  errorfor,
  setErrorFor,
}) => {
  const [searchLocation, setSearchLocation] = useState("");

  const handleChange = async (e) => {
    const inputValue = e.target.value.trim();

    setSearchLocation(inputValue);

    if (errorfor) {
      setErrorFor("location.city", "");
    }

    if (!inputValue) {
      setData("location.city", "");
      setData("location.country", "");
    }
  };

  const selectSuggestion = (place) => {
    // if (!place?.formatted_address) return;

    console.log(place, "Selected place details");

    const { city, country } = getCity(place.formatted_address);

    setErrorFor("location.city", "");

    setData("location.city", city);
    setData("location.country", country);

    setSearchLocation(getCityCountry(city, country));
  };

  useEffect(() => {
    setSearchLocation(
      getCityCountry(data?.location?.city, data?.location?.country)
    );
  }, [data]);

  const { ref } = usePlacesWidget({
    apiKey: process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY,
    onPlaceSelected: (place) => {
      console.log(place, "Selected");

      // const { city, country } = getCity(place.formatted_address);

      setErrorFor("location.city", "");

      setData("location.city", place.formatted_address);
      // setData("location.country", country);

      setSearchLocation(place.formatted_address);
    },
    // options: {
    //   types: ["(cities)"], // Optional: Restrict to cities only
    //   // componentRestrictions: { country: "us" }, // Optional: Restrict to a specific country
    // },
  });

  return (
    <>
      <div className="flex items-center bg-fieldBG border border-darkGrey100 input-field mb-6 relative">
        <input
          name="location"
          aria-label="location"
          value={searchLocation || ""}
          ref={ref} // Attach the Places API ref
          onChange={handleChange} // Track user input
          type="text"
          placeholder={type ? "Location" : "Location*"}
          className="block border-0 bg-transparent outline-0 text-secondprimary text-sm placeholder:text-secondprimary w-full pr-10"
        />
      </div>
      <ErrInput error={errorfor} />
    </>
  );
};

export default GeolocationComponent;
