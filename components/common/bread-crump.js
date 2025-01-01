import React from "react";

const Breadcrumb = ({ title, customClass }) => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center">
        <div className="mb-2 mb-lg-0">
          <h3
            className={`mb-0  text-secondary text-lg font-medium ${customClass}`}
          >
            {title}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
