import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import AllTransaction from "../components/all-transaction";

const UserComplain = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Card>
            <CardHeader className="table-card-header">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0 text-lg">User Complaints</h3>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <AllTransaction />
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default UserComplain;
