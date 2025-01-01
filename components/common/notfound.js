import React from "react";
import Loader from "../loaders/loader";

const NotFound = ({ loading, isData, message, customClass, textWhite }) => {
  return (
    <div>
      {loading ? (
        <>
          <Loader customClass={customClass} />
        </>
      ) : !isData ? (
        <div
          className={`flex justify-center w-full my-2 text-base text-red-900 mb-4 ${textWhite}`}
        >
          {message || "Data not Found !"}
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NotFound;
