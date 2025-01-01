import React, { useState } from "react";
import Link from "next/link";
import { Table, Dropdown } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import { modelReviewData } from "../utils/constants";
import { MoreVertical } from "react-feather";
import FullReviewModal from "./modal/full-review-modal";
import moment from "moment";
import ActionMenu from "./common/coustom-act-menu";
import { capitalizeFirstLetter } from "../utils/model";
const ModelReviewList = ({
  openModelWithItem,
  reviewData,
  isOpen,
  coustomData,
  getAllData,
  setCurrentPage,
  addOns,
  currentPage,
}) => {
  const truncateReview = (review) => {
    const words = review.split(" ");
    return words.length > 10 ? `${words.slice(0, 10).join(" ")}...` : review;
  };

  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>Model Name</th>
                <th>Client name</th>
                <th>Rating</th>
                <th>Review Text</th>
                <th>Date</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviewData?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <span
                        className="cursor-pointer"
                        onClick={() => openModelWithItem("view", item)}
                      >
                        {item?.receiverId?.username || "--"}
                      </span>
                    </td>
                    <td className="align-middle">{item?.senderId?.username}</td>
                    <td className="align-middle">{`${item.rating}/5`}</td>
                    <td className="align-middle">
                      {truncateReview(item.comments)}
                    </td>
                    {/* <td
                      className={`align-middle ${
                        item.status == "Approved" ? "Resolved" : "Pending"
                      }`}
                    >
                      {capitalizeFirstLetter(item.status)}
                    </td> */}
                    <td className="align-middle">
                      {" "}
                      {moment(item.createdAt).format("DD MMM YYYY") || ""}
                    </td>

                    <td className="align-middle">
                      {
                        <ActionMenu
                          type="client"
                          handleClick={openModelWithItem}
                          item={item}
                          options={["View Full Review", "View Model Profile"]}
                        />
                        // ActionMenu(item)
                      }
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
        {addOns?.totalWords > addOns?.limit && (
          <div className="d-flex justify-content-center w-100 mb-6 mt-2">
            <CustomPagination
              totalPages={addOns?.totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </div>
        )}
      </div>
      <FullReviewModal
        isOpen={isOpen == "view"}
        onClose={openModelWithItem}
        reviewText={coustomData}
        title={"Full Review"}
        getAllData={getAllData}
      />
    </>
  );
};
export default ModelReviewList;
