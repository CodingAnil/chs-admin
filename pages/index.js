import { Fragment, useEffect, useState } from "react";
import { Container, Col, Row } from "react-bootstrap";
import ProductStatus from "../components/dashboard/product-status";
import Breadcrumb from "../components/common/bread-crump";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Row>
            <Col lg={12} md={12} xs={12}>
              <Breadcrumb title={"Dashboard"} customClass={"text-white"} />
            </Col>
            <ProductStatus />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
export default Home;
