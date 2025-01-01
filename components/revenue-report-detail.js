import React from "react";
import { Table } from "react-bootstrap";

const RevenueReportDetail = ({ revenueData }) => {
  return (
    <div className="h-100 p-0">
      <div className="table-wrapper">
        <Table responsive className="text-nowrap">
          <thead className="table-light">
            <tr>
              <th> User Type</th>
              <th> Membership Plan</th>
              <th> Revenue</th>
              <th>Period</th>
            </tr>
          </thead>
          <tbody>
            {revenueData.map((item, index) => (
              <tr key={index}>
                <td className="align-middle">{item.userType}</td>
                <td className="align-middle">{item.membershipPlan}</td>
                <td className="align-middle">{item.revenue}</td>
                <td className="align-middle">{item.period}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default RevenueReportDetail;
