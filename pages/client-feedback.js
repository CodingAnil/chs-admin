import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import ClientFeedbackList from "../components/client-feedback-list";
import useMountData from "../utils/hooks/data_getting_hook";
import NotFound from "../components/common/notfound";

const ClientFeedback = () => {
  const {
    data,
    loading,
    setCurrentPage,
    isOpen,
    getAllData,
    coustomData,
    openModelWithItem,
    addOns,
    currentPage,
  } = useMountData("/admin/get-feedbacks");

  return (
    <Fragment>
      <div className="bg-secondprimary pt-10 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <Card>
            <CardHeader className="table-card-header">
              <div className="mb-2 mb-lg-0">
                <h3 className="mb-0 text-lg">User Feedback</h3>
              </div>
            </CardHeader>
            <CardBody className="p-0">
              <NotFound
                loading={loading}
                isData={data?.length > 0}
                message={"No feedback found."}
              />
              {!loading && data?.length > 0 && (
                <ClientFeedbackList
                  reviewData={data}
                  openModelWithItem={openModelWithItem}
                  isOpen={isOpen}
                  coustomData={coustomData}
                  getAllData={getAllData}
                  setCurrentPage={setCurrentPage}
                  addOns={addOns}
                  currentPage={currentPage}
                />
              )}
            </CardBody>
          </Card>
        </Container>
      </div>
    </Fragment>
  );
};
export default ClientFeedback;
