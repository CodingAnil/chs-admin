import { Fragment } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import UserGrowthDetail from "../components/user-growth-detail";
import Breadcrumb from "../components/common/bread-crump";

const UserGrowth = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Breadcrumb title={"User Growth"} />

          <Row>
            <Col lg={12} md={12} xs={12}>
              <Card>
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
export default UserGrowth;
