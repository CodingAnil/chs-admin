"use client";

import { useEffect, useState } from "react";
import React from "react";
import ClientReview from "../../components/profile/client-reviews";
import TravelDates from "../../components/profile/travel-dates";
import ProfileInformation from "../../components/profile/profile-info";
import AddReviewModal from "../../components/modal/add-review-modal";
import SocialLinks from "../../components/common/social-links";
import ModalBio from "../../components/profile/modal-bio";
import ImageGallery from "../../components/profile/image-gallery";
import { Container, Row } from "react-bootstrap";
import DocumentVerfication from "../../components/document-verification";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import useMountData from "../../utils/hooks/data_getting_hook";
import { useSelector } from "react-redux";
import { callPutApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";
import { FaEdit } from "react-icons/fa";
import ButtonSpinner from "../../components/loaders/buttonSpinner";
const UserProfile = () => {
  const [addReview, setAddReview] = useState(false);
  const openReviewModal = () => {
    setAddReview(true);
  };
  const closeReviewModal = () => setAddReview(false);

  const router = useRouter();
  const { selectedMenu, selectedUser } = useSelector((state) => state?.users);

  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const { data, loading, setLoading, getAllData } = useMountData(null);
  const { data: prohibitedWords, getAllData: getAllProhibitedWords } =
    useMountData(null);

  useEffect(() => {
    if (userId) {
      getAllData(`/admin/modal/${userId}`);
      getAllProhibitedWords("/admin/prohibited-words");
    }
  }, [userId]);

  const handleActiveted = async (status) => {
    try {
      let data = {
        userId: selectedUser?._id || userId,
        status,
        reason: null,
      };
      setLoading(true);
      const response = await callPutApi(
        `admin/suspend-account/${selectedUser?._id || userId}`,
        data
      );
      if (response?.status) {
        await getAllData(`/admin/modal/${userId}`, true);
        toastMessage("success", `Account activated successfully.`);
      } else {
        toastMessage("error", response?.message || "Account activation Failed");
      }
    } catch (error) {
      console.error("Account activation error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="layout-wrapper">
        <div className="bg-secondprimary profile-bg relative z-10">
          <Container fluid className="pb-5">
            <Row>
              <div className="space-y-11 relative z-30">
                <div className="flex justify-end items-center  gap-2.5 px-4">
                  {data && (
                    <>
                      <button
                        onClick={() =>
                          router?.push(
                            `/profile/edit-profile?id=${userId}&role=model`
                          )
                        }
                        className="text-white mt-5 flex items-center justify-center gap-2 border border-white rounded-md px-3 py-2"
                      >
                        <span>
                          <FaEdit />
                        </span>{" "}
                        Edit Profile
                      </button>
                      {data?.status?.toLowerCase() != "active" && (
                        <button
                          type="button"
                          className="text-white mt-5 flex items-center justify-center gap-2 border border-white rounded-md px-3 py-2"
                          onClick={() =>
                            handleActiveted(
                              data?.status?.toLowerCase() == "active"
                                ? "Rejected"
                                : "Active"
                            )
                          }
                        >
                          {data?.status?.toLowerCase() == "active"
                            ? "Hide Profile"
                            : "Activate Profile"}
                          {loading && <ButtonSpinner />}
                        </button>
                      )}
                    </>
                  )}
                </div>

                <div className="pt-5 pb-2 rounded-lg flex flex-wrap xl:flex-nowrap justify-start flex-col xl:flex-row items-start space-y-4  md:space-x-6 px-4">
                  <ProfileInformation
                    userData={data}
                    userId={userId}
                    roleType={"model"}
                  />
                </div>
              </div>
            </Row>
          </Container>
        </div>
        <Container fluid className="px-6  bg-light  pb-5">
          <Row>
            <div className="space-y-11 relative z-30">
              <DocumentVerfication userId={userId} refreshData={getAllData} />
              <ImageGallery
                userId={userId}
                roleType={"model"}
                refreshData={getAllData}
              />
            </div>
            <div className="block w-full">
              <div className="w-full">
                <ModalBio
                  userData={data && data}
                  userId={userId}
                  getAllData={getAllData}
                  roleType={"model"}
                  prohibitedWords={
                    prohibitedWords && prohibitedWords?.map((it) => it?.word)
                  }
                />
                <ClientReview
                  userId={userId}
                  isReviewOpen={openReviewModal}
                  roleType={"model"}
                />
              </div>
              <div className="w-full">
                <TravelDates modalId={data && data?.model?._id} />
                <SocialLinks
                  userLinks={
                    data?.model?.social_media &&
                    data?.model?.social_media?.socialMediaAccounts
                  }
                  userId={userId}
                />
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <AddReviewModal
        isOpen={addReview}
        title="Add Your Review"
        onClose={closeReviewModal}
      />
    </>
  );
};

export default UserProfile;
