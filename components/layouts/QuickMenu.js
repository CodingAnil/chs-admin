// import node module libraries
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Row, Col, Image, Dropdown, ListGroup } from "react-bootstrap";
import SimpleBar from "simplebar-react";
import "simplebar/dist/simplebar.min.css";
import { NotificationList } from "./data";
import useMounted from "../../utils/hooks/useMounted";
import {
  clearAllData,
  getLocalData,
  removeClientCookie,
} from "../../utils/configs/localStorage";
import { useRouter } from "next/navigation";
import { MdOutlineNotifications } from "react-icons/md";
const QuickMenu = () => {
  const hasMounted = useMounted();
  const router = useRouter();
  const [adminUser, setAdminUser] = useState("");

  const isDesktop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  useEffect(() => {
    let admin = getLocalData("adminDetails");
    if (admin) {
      setAdminUser(admin);
    }
  }, []);

  // const Notifications = () => {
  //   return (
  //     <SimpleBar style={{ maxHeight: "300px" }}>
  //       <ListGroup variant="flush">
  //         {NotificationList.map(function (item, index) {
  //           return (
  //             <ListGroup.Item
  //               className={index === 0 ? "bg-light" : ""}
  //               key={index}
  //             >
  //               <Row>
  //                 <Col>
  //                   <Link href="#" className="text-muted">
  //                     <h5 className=" mb-1">{item.sender}</h5>
  //                     <p className="mb-0"> {item.message}</p>
  //                   </Link>
  //                 </Col>
  //               </Row>
  //             </ListGroup.Item>
  //           );
  //         })}
  //       </ListGroup>
  //     </SimpleBar>
  //   );
  // };

  const handleLogout = () => {
    clearAllData();
    removeClientCookie("authToken");
    router?.push("/auth/sign-in");
  };

  const QuickMenuDesktop = () => {
    return (
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-auto d-flex nav-top-wrap"
      >
        <Dropdown as="li" className="stopevent">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="btn btn-light btn-icon text-xl text-secondprimary rounded-circle indicator indicator-primary text-muted"
          >
            <MdOutlineNotifications className="fill-secondprimary" />
          </Dropdown.Toggle>
          {/* <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
            aria-labelledby="dropdownNotification"
            align="end"
            show
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Notifications</span>
                <Link href="/#" className="text-muted">
                  <span className="align-middle">
                    <MdOutlineNotifications />
                  </span>
                </Link>
              </div>
              <Notifications />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/dashboard/notification-history"
                  className="text-link fw-semi-bold"
                >
                  See all Notifications
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu> */}
        </Dropdown>
        <Dropdown as="li" className="ms-2">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image
                alt="avatar"
                src="/images/avatar/avatar-1.jpg"
                className="rounded-circle"
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu dropdown-menu-end "
            align="end"
            aria-labelledby="dropdownUser"
            show
          >
            <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=" ">
              <div className="lh-1 ">
                <h5 className="mb-1">
                  {" "}
                  {adminUser?.email || "Admin Dashboard"}
                </h5>
                <div className="text-inherit fs-6">
                  {adminUser?.username || "--"}
                </div>
              </div>
              <div className=" dropdown-divider mt-3 mb-2"></div>
            </Dropdown.Item>

            <Dropdown.Item>
              <Link href="/settings">
                <i className="fe fe-settings me-2"></i> Account Settings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>
              <i className="fe fe-power me-2"></i>Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    );
  };

  const QuickMenuMobile = () => {
    return (
      <ListGroup
        as="ul"
        bsPrefix="navbar-nav"
        className="navbar-right-wrap ms-auto d-flex nav-top-wrap"
      >
        {/* <Dropdown as="li" className="stopevent">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            id="dropdownNotification"
            className="btn btn-light btn-icon rounded-circle indicator indicator-primary text-muted"
          >
            <i className="fe fe-bell"></i>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dashboard-dropdown notifications-dropdown dropdown-menu-lg dropdown-menu-end py-0"
            aria-labelledby="dropdownNotification"
            align="end"
          >
            <Dropdown.Item className="mt-3" bsPrefix=" " as="div">
              <div className="border-bottom px-3 pt-0 pb-3 d-flex justify-content-between align-items-end">
                <span className="h4 mb-0">Notifications</span>
                <Link href="/" className="text-muted">
                  <span className="align-middle">
                    <i className="fe fe-settings me-1"></i>
                  </span>
                </Link>
              </div>
              <Notifications />
              <div className="border-top px-3 pt-3 pb-3">
                <Link
                  href="/dashboard/notification-history"
                  className="text-link fw-semi-bold"
                >
                  See all Notifications
                </Link>
              </div>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown> */}
        <Dropdown as="li" className="ms-2">
          <Dropdown.Toggle
            as="a"
            bsPrefix=" "
            className="rounded-circle"
            id="dropdownUser"
          >
            <div className="avatar avatar-md avatar-indicators avatar-online">
              <Image
                alt="avatar"
                src="/images/avatar/avatar-1.jpg"
                className="rounded-circle"
              />
            </div>
          </Dropdown.Toggle>
          <Dropdown.Menu
            className="dropdown-menu dropdown-menu-end "
            align="end"
            aria-labelledby="dropdownUser"
          >
            <Dropdown.Item as="div" className="px-4 pb-0 pt-2" bsPrefix=" ">
              <div className="lh-1 ">
                <h5 className="mb-1">
                  {" "}
                  {adminUser?.email || "Admin Dashboard"}
                </h5>
                <div className="text-inherit fs-6">
                  {adminUser?.username || "--"}
                </div>
              </div>
              <div className=" dropdown-divider mt-3 mb-2"></div>
            </Dropdown.Item>
            <Dropdown.Item>
              <Link href="/settings">
                <i className="fe fe-settings me-2"></i> Account Settings
              </Link>
            </Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>
              <i className="fe fe-power me-2"></i>Sign Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </ListGroup>
    );
  };

  return (
    <Fragment>
      {hasMounted && isDesktop ? <QuickMenuDesktop /> : <QuickMenuMobile />}
    </Fragment>
  );
};

export default QuickMenu;
