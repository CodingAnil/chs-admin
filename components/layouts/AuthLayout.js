// import node module libraries
import { Container } from "react-bootstrap";

const AuthLayout = (props) => {
  return (
    <div className="flex justify-center items-center min-h-screen w-full bg-splash_screen relative bg-cover font-primary">
      <Container className="d-flex flex-column">{props.children}</Container>
    </div>
  );
};
export default AuthLayout;
