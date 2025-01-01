import React, { useEffect } from "react";

const ErrInput = ({ error }) => {
  return <>{error ? <div className="text-danger text-start">{error && error}</div> : ""}</>;
};

export default ErrInput;
