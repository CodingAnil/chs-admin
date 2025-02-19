import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import GoBack from "../common/goBack";
import Breadcrumb from "../common/bread-crump";

const ComLayout = ({ children, title }) => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-11 pb-21"></div>

      <div className="layout-wrapper">
        <GoBack />

        <Container fluid className="mt-n22 px-6">
          <Breadcrumb title={title} />
          <Card>
            <CardBody className="p-0">{children}</CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default ComLayout;
