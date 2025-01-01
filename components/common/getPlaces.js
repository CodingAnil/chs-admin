import React from "react";
import LocationIcon from "@/icons/location-icon.svg";
import Autocomplete from "react-google-autocomplete";
import Image from "next/image";
import ErrInput from "./errorInput";

const GetGooglePlaces = ({
  value,
  iconClass,
  className,
  handlePlaceSelect,
  handleChange,
  placeError,
}) => {
  return (
    <>
      <div className="flex items-center bg-fieldBG border border-darkGrey100 input-field mb-6 relative">
        <Autocomplete
          apiKey={process.env.NEXT_PUBLIC_GOOGLE_PLACE_KEY}
          onPlaceSelected={handlePlaceSelect}
          defaultValue={value}
          className={
            className ||
            "block border-0 bg-transparent outline-0 text-secondprimary text-sm placeholder:text-secondprimary w-full pl-10"
          }
          onChange={handleChange}
        />
        <Image
          src={LocationIcon}
          alt="Search"
          width={22}
          height={22}
          className={iconClass || "absolute top-3 left-3"}
        />
      </div>

      <ErrInput error={placeError} />
    </>
  );
};

export default GetGooglePlaces;
