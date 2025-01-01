import { Fragment } from "react";
import { Card, CardBody, CardHeader, Container } from "react-bootstrap";
import UserGrowthDetail from "../components/user-growth-detail";

const UserGrowth = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Card>
            <CardHeader className="table-card-header">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0 text-lg">User Growth</h3>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <UserGrowthDetail />
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default UserGrowth;
