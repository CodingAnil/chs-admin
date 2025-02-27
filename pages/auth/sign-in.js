// import node module libraries
import { Row, Col, Card, Form, Button, Image } from "react-bootstrap";
import Link from "next/link";
import AuthLayout from "../../components/layouts/AuthLayout";
import { useFormik } from "formik";
import ErrInput from "../../components/common/errorInput";
import { loginValidate } from "../../utils/validations/auth";
import { callPostApi } from "../../services";
import {
  setClientCookie,
  setLocalData,
} from "../../utils/configs/localStorage";
import { toastMessage } from "../../utils/configs/toast";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useForm from "../../utils/hooks/formik_hook";
import { BsEye } from "react-icons/bs";
import { BsEyeSlash } from "react-icons/bs";
const SignIn = () => {
  const router = useRouter();
  const [isPwdVisible, setPwdVisible] = useState(false);

  const handlePwdVisibility = () => {
    setPwdVisible(!isPwdVisible);
  };

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = await callPostApi("admin/login", data);
      if (response?.status) {
        const { accessToken, ...userData } = await response.data;

        const expirationDays = 30;
        setClientCookie("authToken", accessToken, expirationDays);
        setLocalData("adminDetails", userData);
        router.replace("/");
        resetForm();
      } else {
        toastMessage("error", response?.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  const {
    loading,
    handleSubmit,
    touched,
    errors,
    setLoading,
    formik,
    resetForm,
  } = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validationFunction: loginValidate,
    handleFormSubmit: handleFormSubmit,
  });

  // const handelResetData = () => {
  //   resetForm();
  // };

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
              <p className="mb-6 text-white font-medium">
                Please enter your user information.
              </p>
            </div>
            <Form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <Form.Group className="mb-3" controlId="username">
                <Form.Label className="text-white">
                  Email Or User Name
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter email or username here"
                  {...formik.getFieldProps("email")}
                />
                <ErrInput error={touched.email && errors.email} />
              </Form.Group>
              <Form.Group className="mb-3 " controlId="password">
                <Form.Label className="text-white">Password</Form.Label>
                <div className="relative">
                  <Form.Control
                    type={!isPwdVisible && "password"}
                    placeholder="**************"
                    {...formik.getFieldProps("password")}
                  />
                  <button
                    type="button"
                    onClick={handlePwdVisibility}
                    className="custom-password-eye"
                  >
                    {" "}
                    {!isPwdVisible ? (
                      <span className="close">
                        <BsEyeSlash />
                      </span>
                    ) : (
                      <span className="close">
                        <BsEye />
                      </span>
                    )}
                  </button>
                </div>
                <ErrInput error={touched.password && errors.password} />
              </Form.Group>
              <div className="d-lg-flex justify-content-between align-items-center mb-4">
                {/* <Form.Check
                  type="checkbox"
                  {...formik.getFieldProps("remember")}
                >
                  <Form.Check.Input type="checkbox" />
                  <Form.Check.Label className="text-white">
                    Remember me
                  </Form.Check.Label>
                </Form.Check> */}
                <div>
                  <p className="mb-4 text-white font-medium">
                    {/* Please enter your user information. */}
                  </p>
                  {/* <Link
                    href="/auth/forgot-password"
                    className="text-white fs-5"
                  >
                    Forgot your password?
                  </Link> */}
                </div>
              </div>
              <div>
                <div className="d-grid">
                  <Button variant="primary" type="submit">
                    Sign In {loading && <ButtonSpinner />}
                  </Button>
                </div>
                <div className="d-md-flex justify-content-between mt-4"></div>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

SignIn.Layout = AuthLayout;

export default SignIn;
