import Link from "next/link";
import { Card, Col, Row } from "react-bootstrap";
import { ProductStatusData } from "../../utils/constants";
import NotFound from "../common/notfound";
import getMountData from "../../utils/hooks/data_getting_hook";
import { getCounts } from "../../utils";

const ProductStatus = () => {
  const { data, loading } = getMountData("/admin/user-count");

  return (
    <div className="mt-5">
      <Row>
        <NotFound
          loading={loading}
          isData={
            Array.isArray(data) ? data.length > 0 : Object.keys(data).length > 0
          }
          customClass={"loader-white"}
          textWhite={"text-white"}
        />
        {Array.isArray(data)
          ? data.length > 0
          : Object.keys(data).length > 0 &&
            ProductStatusData.map((section, index) => (
              <Col key={index} xl={4} lg={4} md={6} xs={12}>
                <Card className="mb-5 status-box">
                  <Card.Body>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                      <h4 className="mb-0 text-base xl:text-lg font-medium custom__heading">
                        {section.title}
                      </h4>
                    </div>
                    <div className="min-h-[84px]">
                      {section.items.map((item, idx) => (
                        <p key={idx} className="mb-2">
                          {item.label}:{" "}
                          <span className="font-bold text-black">
                            {section.title?.includes("Revenue") && "$"}
                            {getCounts(data, item?.label)}
                          </span>
                        </p>
                      ))}
                    </div>
                    <Link
                      href={section.url}
                      className="mt-4 text-white btn-primary"
                    >
                      View Details
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
      </Row>
    </div>
  );
};
export default ProductStatus;
