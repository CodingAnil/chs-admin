import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import AllModalList from "../components/all-model-list";
import GoBack from "../components/common/goBack";
import Breadcrumb from "../components/common/bread-crump";

const AllProducts = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-11 pb-21"></div>

      <div className="layout-wrapper">
        <GoBack />

        <Container fluid className="mt-n22 px-6">
          <Breadcrumb title={"Pharmacy Products/All Products"} />
          <Card>
            <CardBody className="p-0">
              <AllModalList />
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default AllProducts;
