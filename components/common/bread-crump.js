import React from "react";
import { Col, Row } from "react-bootstrap";

const Breadcrumb = ({ title }) => {
  return (
    <>
      <div className="d-flex justify-content-between align-items-center mb-12">
        <Row>
          <Col lg={12} md={12} xs={12}>
            <h1 className="font-size-28 text-gray-900">{title}</h1>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Breadcrumb;
