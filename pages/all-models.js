import { Fragment } from "react";
import { Container, Card, CardHeader, CardBody } from "react-bootstrap";
import AllModalList from "../components/all-model-list";
import Image from "next/image";
import BackButton from "@/icons/backbtn.svg";
import { useRouter } from "next/navigation";
const AllModels = () => {
  const router = useRouter();
  return (
    <Fragment>
      <div className="bg-secondprimary pt-11 pb-21"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n22 px-6">
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
export default AllModels;
