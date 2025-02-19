import { useEffect, useState } from "react";
import NavbarVertical from "./navbars/NavbarVertical";
import NavbarTop from "./navbars/NavbarTop";
import { Row, Col } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { getClientCookie } from "../../utils/configs/localStorage";
import Loader from "../loaders/loader";

const DefaultDashboardLayout = (props) => {
  const [showMenu, setShowMenu] = useState(true);
  const [loading, setLoading] = useState(true);
  const ToggleMenu = () => {
    return setShowMenu(!showMenu);
  };

  const router = useRouter();
  useEffect(() => {
    if (!getClientCookie("authToken")) {
      router.replace("/auth/sign-in");
    }
    setTimeout(() => {
      setLoading(false);
    }, 800);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  return (
    <div id="db-wrapper" className={`${showMenu ? "" : "toggled"}`}>
      <div className="navbar-vertical navbar">
        <NavbarVertical
          showMenu={showMenu}
          onClick={(value) => setShowMenu(value)}
        />
      </div>
      <div id="page-content" className="d-flex flex-column min-vh-100">
        <div className="header">
          <NavbarTop
            data={{
              showMenu: showMenu,
              SidebarToggleMenu: ToggleMenu,
            }}
          />
        </div>
        <div className="flex-grow-1">{props.children}</div>

        <div className="px-6 border-top py-3">
          <Row>
            <Col sm={6} className="text-center text-sm-start mb-2 mb-sm-0">
              {/* <p className='m-0'>Made by <a href='https://codescandy.com/' target='_blank'>Codescandy</a></p> */}
            </Col>
            <Col sm={6} className="text-center text-sm-end">
              <p className="m-0">
                Copy right{" "}
                <a
                  className="m-0 text-blue-500 underline"
                  href="https://chshealthcare.in/"
                  target="_blank"
                >
                  @chshealthcare
                </a>
              </p>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};
export default DefaultDashboardLayout;
