import { Fragment } from "react";
import { Container, Col, Row } from "react-bootstrap";
import PendingVerificationList from "../components/pending-verification-list";
import BackButton from "@/icons/backbtn.svg";
import { useRouter } from "next/navigation";
import Image from "next/image";
const PendingVerification = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="bg-secondprimary pt-11 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6 ">
          <div className=" relative custom-backbtn">
            <div
              href="#"
              onClick={router.back}
              className="flex items-center space-x-2 absolute left-0 backbtn"
            >
              <Image src={BackButton} alt="backbtn" height={30} width={30} />
              <span className="text-base font-medium text-white ml-2">
                Go back
              </span>
            </div>
          </div>
          <Row>
            <PendingVerificationList />
          </Row>
        </Container>
      </div>
    </Fragment>
  );
};
export default PendingVerification;
