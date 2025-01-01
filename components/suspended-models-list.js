import React from "react";
import Link from "next/link";
import { Card, Table, Dropdown, Image } from "react-bootstrap";
import { MoreVertical } from "react-feather";
import { AllModelsdata, TeamsData } from "utils/constants";

const SuspendedModelsList = () => {
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <Link
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
      className="text-muted text-primary-hover"
    >
      {children}
    </Link>
  ));

  CustomToggle.displayName = "CustomToggle";

  const ActionMenu = () => {
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle}>
          <MoreVertical size="15px" className="text-muted" />
        </Dropdown.Toggle>
        <Dropdown.Menu align={"end"}>
          <Dropdown.Item eventKey="1"> View Profile</Dropdown.Item>
          <Dropdown.Item eventKey="2">Edit Profile</Dropdown.Item>
          <Dropdown.Item eventKey="3">Suspend Account</Dropdown.Item>
          <Dropdown.Item eventKey="4">Delete Account</Dropdown.Item>
          <Dropdown.Item eventKey="5">Send Message</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  };

  return (
    <Card className="h-100 mt-6 p-0">
      <Table responsive className="text-nowrap">
        <thead className="table-light">
          <tr>
            <th>Name</th>
            <th>Membership Type</th>
            <th>Account Status</th>
            <th>Verification Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {AllModelsdata.map((item, index) => {
            return (
              <tr key={index}>
                <td className="align-middle">{item.name}</td>
                <td className="align-middle">{item.membershipType}</td>
                <td className="align-middle">{item.accountStatus}</td>
                <td className="align-middle">{item.verificationStatus}</td>
                <td className="align-middle">
                  <ActionMenu />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Card>
  );
};
export default SuspendedModelsList;
