// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useRouter } from "next/router";
import useForm from "../../utils/hooks/formik_hook";
import { forgotValidate } from "../../utils/validations/auth";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import ErrInput from "../../components/common/errorInput";
import { callPostApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";
import ResetPassword from "./reset-password";

const ForgetPassword = () => {
  const router = useRouter();

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await callPostApi("admin/forgot-password", data);

      if (response?.status) {
        toastMessage(
          "success",
          "Reset password link sent! Check your Phone Number to proceed"
        );
        router.push("/auth/sign-in");
      } else {
        toastMessage("error", response?.message || "Login failed");
      }
    } catch (error) {
      console.error("Forgot error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const { loading, handleSubmit, touched, errors, setLoading, formik } =
    useForm({
      initialValues: {
        phoneNumber: "",
      },
      validationFunction: (val) => forgotValidate(val),
      handleFormSubmit: handleFormSubmit,
    });

  return (
    <Row className="align-items-center justify-content-center g-0 min-vh-100">
      <Col xxl={4} lg={6} md={8} xs={12} className="py-8 py-xl-0">
        <Card className="smooth-shadow-md custom-login-box">
          <Card.Body className="p-6">
            <div className="mb-4">
              <Link href="/">
                <Image
                  src="/images/logo/chs_logo.png"
                  className="mb-2"
                  alt=""
                />
              </Link>
              <p className="mb-6 text-white">
                Don&apos;t worry, we&apos;ll send otp to your number to reset
                your password.
              </p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="phoneNumber">
                <Form.Label className="text-white">Phone Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Phone Number"
                  {...formik.getFieldProps("phoneNumber")}
                />
                <ErrInput error={touched.phoneNumber && errors.phoneNumber} />
              </Form.Group>
              <div className="mb-3 d-grid">
                <Button variant="primary" type="submit">
                  Reset Password {loading && <ButtonSpinner />}
                </Button>
              </div>
              <span className="text-white">
                <Link href="/auth/sign-in">Back to Login</Link>
              </span>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

ForgetPassword.Layout = AuthLayout;

export default ForgetPassword;
