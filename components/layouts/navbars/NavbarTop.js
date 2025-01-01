// import node module libraries
import { Menu } from "react-feather";
import Link from "next/link";
import { Nav, Navbar, Form } from "react-bootstrap";
import QuickMenu from "../QuickMenu";

const NavbarTop = (props) => {
  return (
    <Navbar expanded="lg" className="navbar-classic navbar navbar-expand-lg">
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex align-items-center">
          <div
            id="nav-toggle"
            className="nav-icon me-2 icon-xs cursor-pointer"
            onClick={() => props.data.SidebarToggleMenu(!props.data.showMenu)}
          >
            <Menu size="18px" />
          </div>
          <div className="ms-lg-3 d-none d-md-none d-lg-block">
            {/* <Form className="d-flex align-items-center">
              <Form.Control type="search" placeholder="Search" />
            </Form> */}
          </div>
        </div>
        <Nav className="navbar-right-wrap ms-2 d-flex nav-top-wrap">
          <QuickMenu />
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavbarTop;
