import React, { useState } from "react";
import Link from "next/link";
import { Card, Table, Dropdown, Image } from "react-bootstrap";
import { MoreVertical } from "react-feather";
import CustomPagination from "./common/custom-pagination";
import { AllModelsdata } from "../utils/constants";

const VerifiedModalList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const DataPerPage = 10;

  const totalPages = Math.ceil(AllModelsdata.length / DataPerPage);

  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = AllModelsdata.slice(indexOfFirstData, indexOfLastData);
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
          <Dropdown.Item eventKey="3">Suspend </Dropdown.Item>
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
            <th>Verified Attributes</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {currentData.map((item, index) => {
            return (
              <tr key={index}>
                <td className="align-middle">{item.name}</td>
                <td className="align-middle">{item.membershipType}</td>
                <td className="align-middle">{item.verificationStatus}</td>
                <td className="align-middle">
                  <ActionMenu />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      {AllModelsdata.length > DataPerPage && (
        <div className="d-flex justify-content-center w-100 mb-6 mt-2">
          <CustomPagination
            totalPages={totalPages}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        </div>
      )}
    </Card>
  );
};
export default VerifiedModalList;
