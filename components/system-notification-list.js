import React, { useState } from "react";
import Link from "next/link";
import { Table, Dropdown } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import { AllNotificationTabledata } from "../utils/constants";

const SystemNotificationList = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const DataPerPage = 10;

  const totalPages = Math.ceil(AllNotificationTabledata.length / DataPerPage);

  const indexOfLastData = currentPage * DataPerPage;
  const indexOfFirstData = indexOfLastData - DataPerPage;
  const currentData = AllNotificationTabledata.slice(
    indexOfFirstData,
    indexOfLastData
  );

  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap custom-table">
            <thead className="table-light">
              <tr>
                <th>Notification</th>
                <th>Message</th>
                <th>Recipient</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {currentData.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item.title}</td>
                    <td className="align-middle">{item.message}</td>
                    <td className="align-middle">{item.recipient}</td>
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
        {AllNotificationTabledata.length > DataPerPage && (
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
export default SystemNotificationList;
