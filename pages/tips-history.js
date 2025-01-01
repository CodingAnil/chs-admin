import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import AllTransaction from "../components/all-tips-transaction";
import NotFound from "../components/common/notfound";
import useMountData from "../utils/hooks/data_getting_hook";

const PaymentHistory = () => {
  const {
    data,
    loading,
    dataLength,
    currentPage,
    setCurrentPage,
    pageLimit,
    setQuery,
  } = useMountData(`/admin/transaction-logs/Tip`);

  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Card>
            <CardHeader className="table-card-header">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0 text-lg">Tips Transactions</h3>
              </div>
              <select
                name=""
                class="form-control form-select transaction-option"
                id="payment"
                onChange={(e) => setQuery(e?.target?.value)}
              >
                <option value="" class="text-muted">
                  All Transactions
                </option>
                <option value="Failed" class="text-dark">
                  Failed Transactions
                </option>
                <option value="Received" class="text-dark">
                  Completed Transactions
                </option>
              </select>
            </CardHeader>
            <CardBody className="p-0">
              <NotFound
                loading={loading}
                isData={data?.length > 0}
                message={"Subscription Transactions Not Found."}
              />
              {!loading && data?.length > 0 && (
                <AllTransaction
                  data={data}
                  dataLength={dataLength}
                  pageLimit={pageLimit}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                />
              )}
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default PaymentHistory;
