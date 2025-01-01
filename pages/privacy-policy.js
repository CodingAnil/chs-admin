import { Fragment, useState } from "react";
import { Container } from "react-bootstrap";
import TextEditor from "../components/text-editor";
const PrivacyPolicy = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper ">
        <Container fluid className="mt-n22 px-6 bg-transparent">
          <div>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="mb-0  text-white text-xl font-medium">
                Privacy Policy
              </h3>
            </div>
            <TextEditor />
          </div>
        </Container>
      </div>
    </Fragment>
  );
};
export default PrivacyPolicy;
