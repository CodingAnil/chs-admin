"use client";

import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import { useState } from "react";
import AddReviewModal from "../modal/add-review-modal";
import DeleteModal from "../modal/delete-account-modal";
import { callDeleteApi, callPutApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";

const FullReviewModal = ({
  isOpen,
  onClose,
  reviewText,
  title,
  getAllData,
  type = "",
  pageType,
}) => {
  const [opModel, setOpModel] = useState(null);
  const [loading, setLoading] = useState(null);

  const openModel = (type) => {
    setOpModel(type);
  };

  const handleDelete = async () => {
    try {
      setLoading(true);
      const response = await callDeleteApi(
        `/admin/model-reviews/${reviewText._id}`
      );
      if (response?.status) {
        toastMessage("success", "Review is deleted successfully!");
        onClose();
        openModel();
        setLoading(false);
        if (type == "profile") {
          getAllData();
        } else {
          getAllData(`/admin/model-reviews`);
        }
      } else {
        toastMessage(
          "error",
          response?.message || "Failed to delete the review"
        );
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  const reviewStatus = async (id, data) => {
    try {
      if (id) {
        setLoading(true);
        const response = await callPutApi(
          `/admin/client-update-reviews/${id}`,
          { ...data }
        );
        if (!response.status) throw new Error(response.message);
        onClose();
        if (type == "profile") {
          getAllData();
        } else {
          getAllData(`/admin/model-reviews`);
        }
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Is Review status error ", error);
    }
  };

  const reviewFeedbackUpdate = async (id, data) => {
    try {
      if (id) {
        setLoading(true);
        const response = await callPutApi(`/admin/update-feedback/${id}`, {
          ...data,
        });
        if (!response.status) throw new Error(response.message);
        onClose();
        getAllData(`/admin/get-feedbacks`);
        setLoading(false);
        return true;
      }
    } catch (error) {
      console.error("Is Review status error ", error);
    }
  };

  const handleFeedbackDelete = async () => {
    try {
      setLoading(true);
      const response = await callDeleteApi(
        `/admin/delete-feedback/${reviewText._id}`
      );
      if (response?.status) {
        toastMessage("success", "Feedback is deleted successfully!");
        onClose();
        openModel();
        setLoading(false);
        getAllData(`/admin/get-feedbacks`);
      }
    } catch (error) {
      console.error("Delete operation error:", error);
      toastMessage("error", "An unexpected error occurred while deleting.");
    }
  };

  return (
    <>
      <Modal
        size="lg"
        isOpen={isOpen}
        backdrop="blur"
        classNames={{
          backdrop: "bg-black bg-opacity-70",
        }}
        hideCloseButton={true}
        placement="center"
      >
        <ModalContent className="bg-[#1A1D22]  custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-5 pb-[30px] font-primary">
          <ModalBody className="text-white text-center p-0">
            <div className="block mb-3">
              <h2 className="text-2xl px-6 md:px-8 text-center font-medium text-white mb-5">
                {title}
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 px-4">
              <div className="text-base">
                {reviewText?.comments || reviewText?.description}
              </div>
            </div>
            {pageType == "feedback" ? (
              <div className="flex justify-center gap-4.5 mt-4">
                <button
                  className="bg-[#1A1D22] text-white hover:bg-primary font-bold text-base rounded-lg border border-primary  py-2.5 px-4"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  onClick={() =>
                    reviewFeedbackUpdate(reviewText?._id, {
                      status: "Resolved",
                    })
                  }
                  className="bg-[#1A1D22] hover:bg-primary text-white font-bold text-base rounded-lg border border-primary  py-2.5 px-4"
                >
                  Resolve
                </button>
                {/* <button
                  onClick={() =>
                    reviewFeedbackUpdate(reviewText?._id, {
                      status: "Rejected",
                    })
                  }
                  className="bg-[#1A1D22] hover:bg-primary text-white font-bold text-base rounded-lg border border-primary  py-2.5 px-4"
                >
                  Reject
                </button> */}
                <button
                  onClick={() => openModel("delete")}
                  className="bg-[#1A1D22] hover:bg-primary rounded-lg text-white text-base font-bold border border-primary py-2.5 px-4"
                >
                  Delete
                </button>
              </div>
            ) : (
              <div className="flex justify-center gap-4.5 mt-4">
                <button
                  className="bg-[#1A1D22] text-white hover:bg-primary font-bold text-base rounded-lg border border-primary  py-2.5 px-4"
                  onClick={onClose}
                >
                  Cancel
                </button>
                <button
                  onClick={() => openModel("edit")}
                  className="bg-[#1A1D22] rounded-lg hover:bg-primary text-white text-base min-w-[96px] border border-primary font-bold py-2.5 px-4"
                >
                  Edit
                </button>
                <button
                  onClick={() =>
                    reviewStatus(reviewText?._id, {
                      status: "Approved",
                    })
                  }
                  className="bg-[#1A1D22] hover:bg-primary text-white font-bold text-base rounded-lg border border-primary  py-2.5 px-4"
                >
                  Approve
                </button>
                <button
                  onClick={() =>
                    reviewStatus(reviewText?._id, {
                      status: "Rejected",
                    })
                  }
                  className="bg-[#1A1D22] hover:bg-primary text-white font-bold text-base rounded-lg border border-primary  py-2.5 px-4"
                >
                  Reject
                </button>
                <button
                  onClick={() => openModel("delete")}
                  className="bg-[#1A1D22] hover:bg-primary rounded-lg text-white text-base font-bold border border-primary py-2.5 px-4"
                >
                  Delete
                </button>
              </div>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
      <AddReviewModal
        coustomData={reviewText}
        reviewStatus={reviewStatus}
        isOpen={opModel == "edit"}
        onClose={openModel}
      />
      <DeleteModal
        loading={loading}
        onConfirm={pageType == "feedback" ? handleFeedbackDelete : handleDelete}
        isOpen={opModel == "delete"}
        onClose={openModel}
        title="Are you sure you want to delete this data ?"
      />
    </>
  );
};

export default FullReviewModal;
