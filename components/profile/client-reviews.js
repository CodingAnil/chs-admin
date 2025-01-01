"use client";

import Star from "@/icons/star.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { reviews } from "../../utils/constants";
import NotFound from "../common/notfound";
import useMountData from "../../utils/hooks/data_getting_hook";
import userIcon from "@/images/user3.svg";
import { callDeleteApi, callPutApi } from "../../services";
import AddReviewModal from "../modal/add-review-modal";
import ButtonSpinner from "../loaders/buttonSpinner";
import { BsThreeDots, BsThreeDotsVertical } from "react-icons/bs";
import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";
import DeleteModal from "../modal/delete-account-modal";
import { toastMessage } from "../../utils/configs/toast";
import FullReviewModal from "../modal/full-review-modal";

const ClientReview = ({ userId, roleType }) => {
  const [reviewCount, setReviewCount] = useState(3);

  const {
    data,
    isOpen,
    loading,
    getAllData,
    openModelWithItem,
    coustomData,
    setLoading,
    isLoading,
    setIsLoading,
  } = useMountData(
    userId
      ? roleType == "model"
        ? `admin/model-reviews/${userId}`
        : `admin/client-sender-reviews/${userId}`
      : null
  );

  const handleViewMore = (type) => {
    if (type) {
      setReviewCount(3);
    } else {
      setReviewCount(reviewCount + 3);
    }
  };

  const reviewStatus = async (id, data) => {
    try {
      if (id) {
        setIsLoading(id);
        const response = await callPutApi(
          `/admin/client-update-reviews/${id}`,
          { ...data }
        );
        if (!response.status) throw new Error(response.message);
        if (roleType == "client") {
          getAllData(`admin/client-sender-reviews/${userId}`, true);
        } else {
          getAllData(`admin/model-reviews/${userId}`, true);
        }
        setIsLoading("");
        return true;
      }
    } catch (error) {
      console.error("Is Review status error ", error);
    }
  };

  const handleDelete = async () => {
    try {
      setIsLoading("delete");
      const response = await callDeleteApi(
        `/admin/model-reviews/${coustomData._id}`
      );
      if (response?.status) {
        toastMessage("success", "Review is deleted successfully!");
        openModelWithItem();
        setIsLoading("");
        if (roleType == "client") {
          getAllData(`admin/client-sender-reviews/${userId}`, true);
        } else {
          getAllData(`admin/model-reviews/${userId}`, true);
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

  return (
    <>
      <div className="bg-white text-secondprimary py-5 rounded-lg shadow-md w-full  mt-6">
        <div className="flex justify-between items-center mb-4 px-5">
          <h2 className="text-xl font-medium text-primary ">Reviews</h2>

          {/* <button
            onClick={isReviewOpen}
            className="bg-primary py-2 px-3 text-white rounded-[8px]"
          >
            Write a Review
          </button> */}
        </div>

        <div className=" relative details-gradient"></div>
        <NotFound
          loading={loading}
          isData={data?.length > 0}
          message={"No model reviews found."}
        />

        {!loading && data?.length > 0 && (
          <>
            <div className="gap-3 md:gap-5 flex flex-col pt-5 px-5">
              {data.slice(0, reviewCount).map((review, index) => (
                <div
                  key={index}
                  className="bg-white p-4 rounded-lg mb-4 border border-[#353535]"
                >
                  <div className="flex items-start">
                    <div className="w-full">
                      <div className="flex justify-between items-start md:items-center flex-col md:flex-row gap-2 md:gap-0">
                        <Link
                          href={
                            roleType == "client"
                              ? `/profile/model?id=${review?.receiverId?._id}`
                              : `/profile/client?id=${review?.senderId?._id}`
                          }
                        >
                          <div className="flex flex-nowrap ">
                            <Image
                              width={70}
                              height={70}
                              className="w-10 min-w-10 h-10 rounded-full mr-4"
                              src={
                                roleType == "client"
                                  ? review?.receiverId?.coverImage?.fileUrl ||
                                    userIcon
                                  : review?.senderId?.coverImage?.url ||
                                    userIcon
                              }
                              alt="User Avatar"
                            />
                            <div>
                              <h3 className="text-secondprimary text-base font-bold">
                                {roleType == "client"
                                  ? review?.receiverId?.username
                                  : review?.senderId?.username || "--"}
                              </h3>
                              <p className="text-secondprimary text-base font-normal whitespace-nowrap">
                                Gave a rating of {review?.rating} stars.
                              </p>
                            </div>
                          </div>
                        </Link>
                        <div className="block custom-dropdown text-right">
                          <Dropdown>
                            <DropdownTrigger>
                              <Button
                                variant="bordered"
                                className="border-none p-0 min-w-0"
                              >
                                <BsThreeDotsVertical />
                              </Button>
                            </DropdownTrigger>
                            <DropdownMenu>
                              <DropdownItem
                                key="editreview"
                                onClick={() =>
                                  openModelWithItem("reviewEdit", review)
                                }
                              >
                                Edit review
                              </DropdownItem>
                              <DropdownItem
                                key="deletereview"
                                onClick={() =>
                                  openModelWithItem("delete", review)
                                }
                              >
                                Delete review
                              </DropdownItem>
                            </DropdownMenu>
                          </Dropdown>
                          <div className="flex items-center justify-end  px-2 py-1 mb-1">
                            <Image
                              src={Star}
                              alt="Star"
                              className="w-5 h-5"
                              width={70}
                              height={70}
                            />
                            <span className="text-secondprimary text-lg font-semibold ml-1">
                              {review?.rating}/5
                            </span>
                          </div>
                          {/* {roleType == "client" ? ( */}
                          <div className="flex items-center justify-end gap-2">
                            <button
                              disabled={isLoading == "review"}
                              onClick={
                                () => openModelWithItem("view", review)
                                // reviewStatus(review?._id, {
                                //   status:
                                //     review?.status?.toLowerCase() == "approved"
                                //       ? "Rejected"
                                //       : "Approved",
                                // })
                              }
                              className={`${
                                review?.status
                              } text-white text-sm font-normal px-3 py-2 rounded-lg ${
                                review?.status?.toLowerCase() == "approved"
                                  ? "approved"
                                  : review?.status?.toLowerCase() == "rejected"
                                  ? "rejected"
                                  : "pending"
                              }`}
                            >
                              {review?.status?.toLowerCase() == "approved"
                                ? "Approved"
                                : review?.status?.toLowerCase() == "rejected"
                                ? "Rejected"
                                : "Pending"}{" "}
                              {isLoading == review?._id && <ButtonSpinner />}
                            </button>
                          </div>
                        </div>
                      </div>
                      <p className="text-secondprimary mt-2 text-sm font-normal">
                        {review?.comments}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {data?.length > 3 && (
              <div className="text-center">
                <button
                  onClick={() =>
                    handleViewMore(reviewCount >= data?.length ? true : false)
                  }
                  // disabled={reviewCount >= reviews.length}
                  className="border border-[#A6A6A6] bg-[#1D2026] text-white text-base font-bold py-2 px-4 rounded-md"
                >
                  {reviewCount >= data?.length ? "Hide" : "View More"}
                </button>
              </div>
            )}
          </>
        )}
      </div>
      <AddReviewModal
        reviewStatus={reviewStatus}
        coustomData={coustomData}
        isOpen={isOpen == "reviewEdit"}
        onClose={openModelWithItem}
      />

      <DeleteModal
        loading={isLoading == "delete"}
        onConfirm={handleDelete}
        isOpen={isOpen == "delete"}
        onClose={openModelWithItem}
        title="Are you sure you want to delete this review ?"
      />

      <FullReviewModal
        isOpen={isOpen == "view"}
        onClose={openModelWithItem}
        reviewText={coustomData}
        title={"Full Review"}
        getAllData={() =>
          roleType == "model"
            ? getAllData(`admin/model-reviews/${userId}`)
            : getAllData(`admin/client-sender-reviews/${userId}`)
        }
        type="profile"
      />
    </>
  );
};

export default ClientReview;
