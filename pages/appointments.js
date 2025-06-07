import React, { Fragment } from "react";
import Appointments from "../components/appointments";
import GoBack from "../components/common/goBack";
import { Card, CardBody, Container } from "react-bootstrap";
import Breadcrumb from "../components/common/bread-crump";

const patients = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-11 pb-21"></div>

      <div className="layout-wrapper">
        <GoBack />

        <Container fluid className="mt-n22 px-6">
          <Breadcrumb title={"Appointments"} />
          <Card>
            <CardBody className="p-0">
              <Appointments />
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};

export default patients;
