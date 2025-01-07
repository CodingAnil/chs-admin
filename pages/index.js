import { Fragment, useEffect, useState } from "react";
import {
  Container,
  Col,
  Row,
  Card,
  CardBody,
  CardHeader,
} from "react-bootstrap";
import ProductStatus from "../components/dashboard/product-status";
import Breadcrumb from "../components/common/bread-crump";
import UserGrowthDetail from "../components/user-growth-detail";

const Home = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Row>
            <Breadcrumb title={"Dashboard"} />
            <ProductStatus />
          </Row>
          <Row>
            <Col lg={12} md={12} xs={12}>
              <Card>
                <CardHeader>
                  <h1 className="font-size-20">User Growth</h1>
                </CardHeader>
                <CardBody className="p-0">
                  <UserGrowthDetail />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
export default Home;
