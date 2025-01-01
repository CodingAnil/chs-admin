import React, { useState } from "react";
import Link from "next/link";
import { Table, Dropdown } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import { AllClientsdata, AllTransactionData } from "../utils/constants";
import moment from "moment";

const AllTransaction = ({
  data,
  dataLength,
  pageLimit,
  currentPage,
  setCurrentPage,
}) => {
  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>Transaction ID</th>
                <th>User Email</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">{item?._id}</td>
                    <td className="align-middle">{item?.fromUserId?.email}</td>
                    <td className="align-middle">{`$${
                      item?.amount?.$numberDecimal
                        ? parseFloat(item?.amount.$numberDecimal)
                        : 0
                    }`}</td>
                    <td className="align-middle">
                      {" "}
                      {moment(item?.updatedAt).format("DD MMM YYYY")}
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
