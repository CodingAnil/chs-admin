import React, { useEffect, useRef, useState } from "react";
import CustomSwitch from "../common/custom-switch";
import { MdOutlineDeleteOutline } from "react-icons/md";
import { callPutApi } from "../../services";
import { Tabs, Tab, Card, CardBody } from "@nextui-org/react";
import { MultiProfileArray, ProfileVideos } from "../../utils/constants";
import VerifyProfileImageModal from "../modal/verify-profile-image-modal";
import DeleteModal from "../modal/delete-account-modal";
import ProfileVideoGallery from "../profile-video-gallery";
import MultiProfileList from "./multi-profile-list";
import useMountData from "../../utils/hooks/data_getting_hook";
import NotFound from "../common/notfound";
import { callDeleteApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";

const ProfileGallery = ({ userId, roleType, refreshData }) => {
  const fileInputRef = useRef(null);
  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = event.target.files;
    console.log(files);
  };

  const {
    data,
    loading,
    getAllData,
    coustomData,
    isOpen,
    handleOpenMod,
    openModelWithItem,
    setLoading,
    handleActionClick,
  } = useMountData(
    userId
      ? roleType == "client"
        ? `admin/client-images/${userId}`
        : `admin/get-all-content/${userId}`
      : null
  );

  // const toggleSwitch = async (id, data) => {
  //   try {
  //     if (id) {
  //       const uploadResponse = await callPutApi(
  //         `/admin/model/content/update/${id}`,
  //         data
  //       );
  //       if (!uploadResponse.status) throw new Error(uploadResponse.message);
  //       getAllData(`admin/get-all-content/${userId}`);
  //       refreshData(`/admin/client/${userId}`, true);
  //     }
  //   } catch (error) {
  //     console.error("Is privet content error ", error);
  //   }
  // };

  const handleDeleteConfirm = async () => {
    try {
      if (coustomData) {
        setLoading(true);
        const response = await callDeleteApi(
          roleType == "model"
            ? `/admin/delete-content/${coustomData?._id}`
            : `/admin/clite-delete-file/${coustomData?._id}`
        );
        if (!response.status) throw new Error(response.message);
        toastMessage(
          "success",
          roleType == "model"
            ? "Model media deleted successfully!"
            : "Client File deleted successfully!"
        );
        openModelWithItem();
        setLoading(false);
        getAllData(
          roleType == "client"
            ? `admin/client-images/${userId}`
            : `admin/get-all-content/${userId}`,
          true
        );

        // refreshData(
        //   roleType == "model"
        //     ? `/admin/modal/${userId}`
        //     : `/admin/client/${userId}`,
        //   true
        // );
      }
    } catch (error) {
      console.error("model content delete error ", error);
    }
  };

  return (
    <div className="bg-white py-2 rounded-lg shadow-md min-h-[552px] mt-5">
      <div className="flex w-full flex-col relative">
        <div className="inline-flex gap-3 absolute right-4 top-2 z-50">
          {/* <button
            onClick={handleButtonClick}
            className="bg-primary text-white text-sm sm:text-base inline-flex gap-1.5 items-center font-bold py-2 px-3 sm:py-3 sm:px-4.5 rounded-[8px]"
          >
            Upload Images
          </button> */}
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            className="hidden"
            multiple
          />
        </div>

        <Tabs
          color="primary"
          variant="underlined"
          classNames={{
            base: "ps-4",
            tabList:
              "gap-6 w-full relative rounded-none p-0  before:absolute before:left-0 before:right-0 before:h-[1px] before:top-[73px] before:bg-gradient-to-r before:from-white/25 before:to-transparent   pl-5",
            cursor: "w-full bg-primary",
            tab: "max-w-fit px-0 h-[75px]",
            tabContent:
              "group-data-[selected=true]:text-primary text-secondprimary text-xl font-medium",
          }}
        >
          {!loading && data?.length > 0 && (
            <Tab key="photos" title="Photos">
              <Card className="bg-transparent shadow-none">
                <CardBody className="bg-transparent">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 2xl:gap-6">
                    {roleType == "model" &&
                    data?.filter(
                      (it) => it?.contentType?.toLowerCase() == "image"
                    )?.length > 0 ? (
                      data
                        ?.filter(
                          (it) => it?.contentType?.toLowerCase() == "image"
                        )
                        .map((item) => (
                          <MultiProfileList
                            handleActionClick={openModelWithItem}
                            userId={userId}
                            getAllData={getAllData}
                            item={item}
                            roleType={roleType}
                            isOpen={isOpen}
                            coustomData={coustomData}
                            refreshData={refreshData}
                          />
                        ))
                    ) : roleType == "client" && data?.length > 0 ? (
                      data?.map((item) => (
                        <MultiProfileList
                          handleActionClick={openModelWithItem}
                          userId={userId}
                          getAllData={getAllData}
                          item={item}
                          roleType={roleType}
                          isOpen={isOpen}
                          coustomData={coustomData}
                          refreshData={refreshData}
                        />
                      ))
                    ) : (
                      <></>
                    )}
                  </div>
                  {roleType == "model" &&
                    data?.filter(
                      (it) => it?.contentType?.toLowerCase() == "image"
                    )?.length == 0 && (
                      <NotFound
                        loading={loading}
                        isData={false}
                        message={"Model Images not found!"}
                      />
                    )}
                  {roleType == "client" && data?.length == 0 && (
                    <NotFound
                      loading={loading}
                      isData={false}
                      message={"Client Images Not Found"}
                    />
                  )}
                </CardBody>
              </Card>
            </Tab>
          )}

          {!loading && data?.length > 0 && roleType == "model" && (
            <Tab key="videos" title="Videos">
              <Card className="bg-transparent shadow-none">
                <CardBody className="bg-transparent">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   gap-5 2xl:gap-6">
                    {data?.filter(
                      (it) => it?.contentType?.toLowerCase() == "video"
                    )?.length > 0 &&
                      data
                        ?.filter(
                          (it) => it?.contentType?.toLowerCase() == "video"
                        )
                        ?.map((item, index) => (
                          <div
                            key={index}
                            className="flex w-full flex-col items-center"
                          >
                            <ProfileVideoGallery
                              handleActionClick={openModelWithItem}
                              userId={userId}
                              getAllData={getAllData}
                              item={item}
                              roleType={roleType}
                              isOpen={isOpen}
                              coustomData={coustomData}
                            />
                          </div>
                        ))}
                  </div>
                  {data?.filter(
                    (it) => it?.contentType?.toLowerCase() == "video"
                  )?.length == 0 && (
                    <NotFound
                      loading={loading}
                      isData={false}
                      message={"Model Videos not found!"}
                    />
                  )}
                </CardBody>
              </Card>
            </Tab>
          )}
        </Tabs>
        <div className="flex items-center justify-center w-full">
          <NotFound
            loading={loading}
            isData={data?.length > 0}
            message={
              roleType == "client"
                ? "Client Images Not Found"
                : "Model Media not found!"
            }
          />
        </div>
      </div>
      {/* <VerifyProfileImageModal
        coustomData={coustomData}
        // isOpen={isOpen == "sizeVerify"}
        onClose={handleOpenMod}
        title="Verify Image"
        message="Write 'Paragon Gents' and today's date on a piece of paper and upload a picture in the same pose and showing the same body parts while holding up the piece of paper. Ensure the photo is clear and easily readable."
      /> */}
      <DeleteModal
        loading={loading}
        isOpen={isOpen == "contentDelete"}
        onClose={openModelWithItem}
        title="Are you sure you want to delete this image?"
        onConfirm={handleDeleteConfirm}
      />
    </div>
  );
};

export default ProfileGallery;
