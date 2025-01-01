import React, { useState } from "react";
import { Table, Dropdown } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import moment from "moment";

const AllTransaction = ({
  data,
  dataLength,
  pageLimit,
  currentPage,
  setCurrentPage,
}) => {
  const convertToUsd = (value) => {
    const decimalValue = value?.$numberDecimal
      ? parseFloat(value.$numberDecimal)
      : 0;
    return `$${(decimalValue / 100).toFixed(2)}`;
  };

  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>Transaction ID</th>
                <th>Sender User</th>
                <th>Receiver User</th>
                <th>Date</th>
                <th>Tip Amount</th>
                <th>Total Amount</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item?._id}</td>
                    <td className="align-middle">
                      {item?.fromUserId?.username}
                    </td>
                    <td className="align-middle">{item?.toUserId?.username}</td>
                    <td className="align-middle">
                      {" "}
                      {moment(item?.updatedAt).format("DD MMM YYYY")}
                    </td>
                    <td className="align-middle">
                      {convertToUsd(item?.userAmount) || 0}
                    </td>
                    <td className="align-middle">
                      {convertToUsd(item?.amount) || 0}
                    </td>

                    <td className={`align-middle`}>
                      <span
                        style={{
                          color: item.status == "Received" ? "green" : "red",
                        }}
                      >
                        {" "}
                        {item.status}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {dataLength > pageLimit && (
          <div className="d-flex justify-content-center w-100 mb-6 mt-2">
            <CustomPagination
              totalPages={Math.ceil(dataLength / pageLimit)}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default AllTransaction;
