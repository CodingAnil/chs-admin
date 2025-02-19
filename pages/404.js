// import node module libraries
import { Fragment } from "react";
import { Col, Row, Image, Container } from "react-bootstrap";
import Link from "next/link";
import NotFound from "../components/layouts/NotFound";

const Error404 = () => {
  return (
    <Fragment>
      <Container className="d-flex justify-content-center align-items-center vh-100">
        <Row className="text-center">
          <Col>
            <div>
              <div className="ms-10 mb-3">
                <Image
                  src="/images/error/404-error-img.png"
                  alt="404 Error"
                  className="img-fluid"
                  width={400}
                  height={300}
                />
              </div>
              <h1 className="display-4 fw-bold">Oops! The page not found.</h1>
              <p className="mb-4">
                Or simply leverage the expertise of our consultation team.
              </p>
              <Link href="/" className="btn btn-primary">
                Go Home
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

Error404.Layout = NotFound;

export default Error404;
