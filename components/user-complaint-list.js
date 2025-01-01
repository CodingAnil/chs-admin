import React, { useState } from "react";
import { Table } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import { AllClientsdata, AllTransactionData } from "../utils/constants";
const UserComplaintList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const DataPerPage = 10;

  const totalPages = Math.ceil(AllTransactionData.length / DataPerPage);

  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = AllTransactionData.slice(
    indexOfFirstData,
    indexOfLastData
  );

  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>Complaint from</th>
                <th>Complaint for</th>
                <th>Complaint Text</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.id}</td>
                    <td className="align-middle">{item.userType}</td>
                    <td className="align-middle">{item.date}</td>
                    <td className={`align-middle ${item.status}`}>
                      {item.status}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {AllClientsdata.length > DataPerPage && (
          <div className="d-flex justify-content-center w-100 mb-6 mt-2">
            <CustomPagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default UserComplaintList;
