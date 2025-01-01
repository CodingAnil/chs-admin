import { useState, useCallback } from "react";
import debounce from "lodash.debounce"; // Install lodash.debounce if not already installed: npm install lodash.debounce
import Image from "next/image";
import SearchIcon from "@/icons/search.svg";

const SearchComponent = ({ searchQuery, setSearchQuery }) => {
  const debouncedSearch = useCallback(
    debounce((value) => {
      setSearchQuery(value);
      console.log("Search Query:", value);
    }, 500),
    []
  );

  const handleChange = (e) => {
    const value = e.target.value;
    debouncedSearch(value);
  };

  return (
    <div>
      <div className="block relative mr-2">
        <input
          name="search"
          type="text"
          onChange={handleChange}
          placeholder="Search"
          className="h-[42px] bg-white border border-[#dfe3e8] rounded-lg pl-[52px] text-sm text-[#46494e] outline-0 w-full"
        />
        <Image
          src={SearchIcon}
          alt="Search"
          width={22}
          height={22}
          className="absolute fill-black top-2.5 left-3"
        />
      </div>
    </div>
  );
};

export default SearchComponent;
