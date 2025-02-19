import React from "react";
import AllPatients from "../components/allPaitent";
import ComLayout from "../components/layouts/commonLayout";

const patients = () => {
  return (
    <>
      <ComLayout
        children={<AllPatients />}
        title={"Patient Management/All Patient"}
      />
    </>
  );
};

export default patients;
