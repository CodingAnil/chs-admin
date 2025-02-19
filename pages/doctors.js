import React, { Fragment, useEffect } from "react";
import AllDoctors from "../components/allDoctors";
import ComLayout from "../components/layouts/commonLayout";

const Doctors = () => {
  return (
    <>
      <ComLayout
        children={<AllDoctors />}
        title={"Doctor Management/All Doctors"}
      />
    </>
  );
};

export default Doctors;
