// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useRouter } from "next/router";
import useForm from "../../utils/hooks/formik_hook";
import {  resetPwdValidate } from "../../utils/validations/auth";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import ErrInput from "../../components/common/errorInput";
import {  callPutApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";
import { useSearchParams } from "next/navigation";
import { BsEye, BsEyeSlash } from "react-icons/bs";

const ResetPassword = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const authToken = searchParams.get("token");

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await callPutApi(
        "admin/reset-password",
        { ...data },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      if (response?.status) {
        toastMessage("success", "Password changed successfully");
        router.push("/auth/sign-in");
      } else {
        toastMessage("error", response?.message || "Password reset failed");
      }
    } catch (error) {
      console.error("Forgot error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const {
    loading,
    handleSubmit,
    values,
    touched,
    errors,
    setLoading,
    formik,
    toggleVisibility,
  } = useForm({
    initialValues: {
      password: "",
      confirmPassword: "",
      otp: "",
      phoneNumber: "99999999999",
      showPwd: false,
      showCnPwd: false,
    },
    validationFunction: resetPwdValidate,
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
                  src="/images/logo/brand-logo.png"
                  className="mb-2"
                  alt=""
                />
              </Link>
              <p className="mb-6 text-white">
                Don&apos;t worry, we&apos;ll send Otp to your number to reset
                your password.
              </p>
            </div>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-white">
                  One Time Password
                </Form.Label>
                <div className="relative">
                  <Form.Control
                    type={"text"}
                    placeholder="Enter Your Otp"
                    {...formik.getFieldProps("otp")}
                  />
                </div>
                <ErrInput error={touched.otp && errors.otp} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-white">Password</Form.Label>
                <div className="relative">
                  <Form.Control
                    type={values?.showPwd ? "text" : "password"}
                    placeholder="Enter Your New Password"
                    {...formik.getFieldProps("password")}
                  />
                  <span
                    onClick={() => toggleVisibility("showPwd")}
                    {...formik.getFieldProps("showPwd")}
                    className="custom-password-eye"
                  >
                    {values.showPwd ? (
                      <span className="close">
                        <BsEye />
                      </span>
                    ) : (
                      <span className="close">
                        <BsEyeSlash />
                      </span>
                    )}
                  </span>
                </div>
                <ErrInput error={touched.password && errors.password} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="email">
                <Form.Label className="text-white">Confirm Password</Form.Label>
                <div className="relative">
                  <Form.Control
                    type={values?.showCnPwd ? "text" : "password"}
                    placeholder="Enter Your Confirm Password"
                    {...formik.getFieldProps("confirmPassword")}
                  />
                  <span
                    onClick={() => toggleVisibility("showCnPwd")}
                    {...formik.getFieldProps("showCnPwd")}
                    className="custom-password-eye"
                  >
                    {values.showCnPwd ? (
                      <span className="close">
                        <BsEye />
                      </span>
                    ) : (
                      <span className="close">
                        <BsEyeSlash />
                      </span>
                    )}
                  </span>
                </div>
                <ErrInput
                  error={touched.confirmPassword && errors.confirmPassword}
                />
              </Form.Group>
              <div className="mb-3 d-grid">
                <Button variant="primary" type="submit">
                  Update Password {loading && <ButtonSpinner />}
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

ResetPassword.Layout = AuthLayout;

export default ResetPassword;
