import React from "react";
import { Table } from "react-bootstrap";
import CustomPagination from "./common/custom-pagination";
import FullReviewModal from "./modal/full-review-modal";
import FeedbackReplyModal from "./modal/feedback-reply-modal";
import ActionMenu from "./common/coustom-act-menu";
import { callPutApi } from "../services";
import moment from "moment";
import { truncateReview } from "../utils";
import Link from "next/link";

const ClientFeedbackList = ({
  openModelWithItem,
  reviewData = [],
  isOpen,
  coustomData,
  getAllData,
  setCurrentPage,
  addOns,
  currentPage,
}) => {
  const reviewFeedbackUpdate = async (id, data) => {
    try {
      if (id) {
        const response = await callPutApi(`/admin/update-feedback/${id}`, {
          ...data,
        });
        if (!response.status) throw new Error(response.message);
        getAllData(`/admin/get-feedbacks`);
      }
    } catch (error) {
      console.error("Is Review status error ", error);
    }
  };

  return (
    <>
      <div className="h-100 p-0">
        <div className="table-wrapper">
          <Table responsive className="text-nowrap">
            <thead className="table-light">
              <tr>
                <th>User Name</th>
                <th>Reporter Name</th>
                <th>Feedback</th>
                <th>Date</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {reviewData?.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="align-middle">
                      <Link
                        href={
                          item?.userId?.model
                            ? `profile/model?id=${item?.userId?._id}`
                            : `profile/client?id=${item?.userId?._id}`
                        }
                        className="py-2"
                      >
                        {item?.userId?.username || "--"}
                      </Link>
                    </td>
                    <td className="align-middle">{item?.name || "--"}</td>
                    <td className="align-middle">
                      <span
                        className="cursor-pointer"
                        onClick={() => openModelWithItem("view", item)}
                      >
                        {truncateReview(item?.description)}
                      </span>
                    </td>
                    <td className="align-middle">
                      {moment(item.updatedAt).format("DD MMM YYYY") || ""}
                    </td>
                    <td className={`align-middle ${item.status}`}>
                      {item.status}
                    </td>

                    <td className="align-middle">
                      {
                        <ActionMenu
                          handleClick={openModelWithItem}
                          handelUpdate={reviewFeedbackUpdate}
                          item={item}
                          options={
                            item.status === "Resolved"
                              ? ["View Full Feedback"]
                              : [
                                  "View Full Feedback",
                                  // "Reply",
                                  "Mark as Resolved",
                                ]
                          }
                        />
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
        pageType="feedback"
        isOpen={isOpen == "view"}
        onClose={openModelWithItem}
        reviewText={coustomData}
        getAllData={getAllData}
        title="Full Feedback"
      />
      <FeedbackReplyModal
        isOpen={isOpen == "replay"}
        title="Reply Feedback"
        onClose={openModelWithItem}
        reviewText={coustomData}
        feedbackUpdate={reviewFeedbackUpdate}
      />
    </>
  );
};
export default ClientFeedbackList;
