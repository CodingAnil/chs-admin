import React, { Fragment } from "react";
import { Card, CardBody } from "reactstrap";
import CategoryList from "../components/category-list";
import Breadcrumb from "../components/common/bread-crump";
import GoBack from "../components/common/goBack";
import { Container } from "react-bootstrap";

const CategoriesManagement = () => {
  return (
    <Fragment>
    <div className="bg-secondprimary pt-11 pb-21"></div>

    <div className="layout-wrapper">
      <GoBack />

      <Container fluid className="mt-n22 px-6">
      <Breadcrumb title={"Pharmacy Products/Category Management"} />
        <Card>
          <CardBody className="p-0">
          <CategoryList />
          </CardBody>
        </Card>
      </Container>
    </div>
  </Fragment>
  );
};

export default CategoriesManagement; 