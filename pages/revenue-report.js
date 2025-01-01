import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import { revenueData } from "../utils/constants";
import RevenueReportDetail from "../components/revenue-report-detail";

const RevenueReport = () => {
  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Card>
            <CardHeader className="table-card-header">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0 text-lg">Revenue Report</h3>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <RevenueReportDetail revenueData={revenueData} />
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default RevenueReport;
