"use client";

import { useEffect, useState } from "react";
import React from "react";
import ClientReview from "../../components/profile/client-reviews";
import ProfileInformation from "../../components/profile/profile-info";
import AddReviewModal from "../../components/modal/add-review-modal";
import ModalBio from "../../components/profile/modal-bio";
import ImageGallery from "../../components/profile/image-gallery";
import { Container, Row } from "react-bootstrap";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import useMountData from "../../utils/hooks/data_getting_hook";
import { useSelector } from "react-redux";
import { usePlacesWidget } from "react-google-autocomplete";
import { FaEdit } from "react-icons/fa";

const UserProfile = () => {
  const [addReview, setAddReview] = useState(false);

  const openReviewModal = () => {
    setAddReview(true);
  };
  const closeReviewModal = () => setAddReview(false);

  const router = useRouter();
  const { selectedMenu, selectedUser } = useSelector((state) => state?.users);

  console.log(selectedMenu, selectedUser, "userData");

  const searchParams = useSearchParams();
  const userId = searchParams.get("id");

  const { data, setLoading, getAllData } = useMountData(null);
  const { data: prohibitedWords, getAllData: getAllProhibitedWords } =
    useMountData(null);

  useEffect(() => {
    if (userId) {
      getAllData(`/admin/client/${userId}`);
      getAllProhibitedWords("/admin/prohibited-words");
    }
  }, [userId]);

  return (
    <>
      <div className="bg-secondprimary profile-bg pt-10 pb-21 relative z-10"></div>
      <div className="layout-wrapper">
        <Container fluid className="mt-n32 px-6  bg-light  pb-5">
          <Row>
            <div className="space-y-11 relative z-30">
              <div className="flex justify-end items-center  gap-2.5">
                {data && (
                  <button
                    onClick={() =>
                      router?.push(
                        `/profile/edit-profile?id=${userId}&role=client`
                      )
                    }
                    className="text-white mt-5 flex items-center justify-center gap-2 border border-white rounded-md px-3 py-2"
                  >
                    <span>
                      <FaEdit />
                    </span>{" "}
                    Edit Profile
                  </button>
                )}
              </div>
              <div className="py-5 rounded-lg flex flex-wrap xl:flex-nowrap justify-start flex-col xl:flex-row items-start space-y-4  md:space-x-6">
                <ProfileInformation userData={data} />
              </div>
              <ImageGallery
                userId={userId}
                roleType={"client"}
                refreshData={getAllData}
              />
            </div>
            <div className="block w-full">
              <div className="w-full">
                <ModalBio
                  userData={data}
                  roleType={"client"}
                  prohibitedWords={
                    prohibitedWords && prohibitedWords?.map((it) => it?.word)
                  }
                />
                <ClientReview userId={userId} roleType={"client"} />
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserProfile;
