import { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import VerifiedModalList from "../components/verified-model-list";

const VerifiedModels = () => {
  return (
    <Fragment>
      <div className="bg-primary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Row>
            <Col lg={12} md={12} xs={12}>
              <div>
                <div className="d-flex justify-content-between align-items-center">
                  <div className="mb-2 mb-lg-0">
                    <h3 className="mb-0  text-white">Verified Models</h3>
                  </div>
                </div>
              </div>
            </Col>
            <VerifiedModalList />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
export default VerifiedModels;
