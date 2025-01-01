import React, { useState } from "react";
import { Card, Checkbox, cn } from "@nextui-org/react";
import Image from "next/image";
import { MdOutlineDeleteOutline } from "react-icons/md";
import CheckCircelIcon from "@/icons/check-circel-icon";
import CustomSwitch from "../common/custom-switch";
import VerificationMultiProfileModal from "../modal/verified-multiprofile-modal";
import { capitalizeFirstLetter } from "../../utils/model";
import { callPutApi } from "../../services";
import Loader from "../loaders/loader";
import PhotoSliderModal from "../modal/photo-slider-modal";

const MultiProfileList = ({
  getAllData,
  userId,
  item,
  roleType,
  handleActionClick,
  isOpen,
  coustomData,
  refreshData,
}) => {
  const [loading, setLoading] = useState(false);

  const toggleSwitch = async (id, data) => {
    try {
      console.log(id, data, "id, data");
      if (id) {
        setLoading(true);
        const uploadResponse = await callPutApi(
          `/admin/model/content/update/${id}`,
          { ...data, userId }
        );
        if (!uploadResponse.status) throw new Error(uploadResponse.message);
        await getAllData(`admin/get-all-content/${userId}`, true);
        setLoading(false);
        // if (data?.make18Photo || data?.makeCoverPhoto) {
        refreshData(`/admin/modal/${userId}`, true);
        // }
      }
    } catch (error) {
      console.error("Is privet content error ", error);
    }
  };

  const clientFileStatus = async (id, sts) => {
    try {
      if (id) {
        let data = {
          status: sts,
          userId: userId,
        };
        setLoading(true);
        const response = await callPutApi(
          `/admin/client-image-status/${id}`,
          data
        );
        if (!response.status) throw new Error(response.message);
        await getAllData(`admin/client-images/${userId}`, true);
        setLoading(false);
        refreshData(`/admin/client/${userId}`, true);
      }
    } catch (error) {
      console.error("Is privet content error ", error);
    }
  };
  const [openImageSlide, setOpenImageSlide] = useState(false);

  const handleOpenSlide = () => {
    setOpenImageSlide(true);
  };

  return (
    <>
      <div className="border-none bg-transparent overflow-visible min-h-[240px] relative w-full">
        {loading && (
          <>
            {" "}
            <div className="absolute top-0 bottom-0 right-0 left-0 z-20 bg-[#ebebebb3] rounded-lg min-h-[240px] bg-opacity-0">
              <div className="absolute top-2/4 -translate-y-1/2 left-auto right-auto w-full">
                <Loader />
              </div>
            </div>
          </>
        )}
        <>
          <div className="relative w-full border border-gray-200 rounded-lg shadow-shadow1">
            <Image
              className="object-cover max-h-[300px] object-top min-h-[300px] w-full rounded-lg h-full cursor-pointer"
              height={200}
              alt={item?.name || "Profile Image"}
              src={item?.url || item?.fileUrl}
              width={200}
              onClick={handleOpenSlide}
            />
            <div className="absolute right-0 top-0 flex items-center justify-center p-[10px] h-full">
              <div className="flex justify-between flex-col items-end w-full h-full">
                <button
                  onClick={() => handleActionClick("contentDelete", item)}
                  className="bg-[#00000066] w-[38px] h-[38px] rounded-full text-white flex justify-center items-center text-xl"
                >
                  <MdOutlineDeleteOutline />
                </button>
                {roleType == "model" && (
                  <div className="flex justify-end items-center gap-2.5">
                    {item?.isChecked ? (
                      <button
                        onClick={() => handleActionClick("sizeVerify", item)}
                        className={`${
                          item?.isChecked ? "verified" : item?.verified
                        } rounded-[6px] text-[#fbfbfb] text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                      >
                        <CheckCircelIcon /> Verified
                      </button>
                    ) : item?.isRequested ? (
                      <button
                        onClick={() => handleActionClick("sizeVerify", item)}
                        className={`Requested rounded-[6px] text-[#fbfbfb] text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                      >
                        <CheckCircelIcon /> Requested
                      </button>
                    ) : (
                      // item?.verified?.toLowerCase() !== "approved" && (
                      <button
                        onClick={() => handleActionClick("sizeVerify", item)}
                        className={`${
                          item?.isChecked ? "verified" : item?.verified
                        } rounded-[6px] text-[#fbfbfb] text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                      >
                        <CheckCircelIcon />{" "}
                        {capitalizeFirstLetter(item?.verified)}
                      </button>
                      // )
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
          {roleType == "client" && (
            <div className="mt-3">
              <div className="flex flex-col mt-[5px] gap-2">
                <Checkbox
                  isSelected={item?.makeProfile}
                  size="md"
                  radius="sm"
                  classNames={{
                    base: cn(
                      "inline-flex w-full max-w-md",
                      "items-center justify-start",
                      "cursor-pointer rounded-lg gap-1 relative"
                    ),
                    wrapper: cn(
                      "before:border-1 outline-0 before:border-primary before:rounded-[3px] rounded-[3px] transition-colors"
                    ),
                  }}
                  onChange={() => {
                    clientFileStatus(item?._id, !item?.makeProfile);
                  }}
                >
                  <div className="text-secondprimary text-[12px] text-medium">
                    Make profile photo
                  </div>
                </Checkbox>
              </div>
            </div>
          )}
          {roleType == "model" && (
            <div className="mt-3">
              {/* <div className="text-secondprimary text-[12px] text-medium">
                  <span className="mr-3">NC</span>
                  <span className="mr-3">RC</span>
                  <span className="mr-3">EC</span>
                </div> */}
              <div className="flex mb-3">
                <div className="flex items-center gap-1">
                  <Checkbox
                    isSelected={item?.access?.includes("NC")}
                    size="md"
                    radius="sm"
                    classNames={{
                      base: cn(
                        "inline-flex w-full max-w-md",
                        "items-center justify-start",
                        "cursor-pointer rounded-lg gap-1"
                      ),
                      wrapper: cn(
                        "before:border-1 before:border-primary before:rounded-[3px] rounded-[3px] transition-colors"
                      ),
                    }}
                    onChange={() => {
                      toggleSwitch(item?._id, {
                        access: {
                          NC: item?.access?.includes("NC") ? false : true,
                        },
                      });
                    }}
                  ></Checkbox>
                  <span className="mr-3 text-secondprimary text-[12px] text-medium">
                    NC
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox
                    isSelected={item?.access?.includes("RC")}
                    size="md"
                    radius="sm"
                    classNames={{
                      base: cn(
                        "inline-flex w-full max-w-md",
                        "items-center justify-start",
                        "cursor-pointer rounded-lg gap-1"
                      ),
                      wrapper: cn(
                        "before:border-1 before:border-primary before:rounded-[3px] rounded-[3px] transition-colors"
                      ),
                    }}
                    onChange={() => {
                      toggleSwitch(item?._id, {
                        access: {
                          RC: item?.access?.includes("RC") ? false : true,
                        },
                      });
                    }}
                  ></Checkbox>
                  <span className="mr-3 text-secondprimary text-[12px] text-medium">
                    RC
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Checkbox
                    isSelected={item?.access?.includes("EC")}
                    size="md"
                    radius="sm"
                    classNames={{
                      base: cn(
                        "inline-flex w-full max-w-md",
                        "items-center justify-start",
                        "cursor-pointer rounded-lg gap-1"
                      ),
                      wrapper: cn(
                        "before:border-1 before:border-primary before:rounded-[3px] rounded-[3px] transition-colors"
                      ),
                    }}
                    onChange={() => {
                      toggleSwitch(item?._id, {
                        access: {
                          EC: item?.access?.includes("EC") ? false : true,
                        },
                        updatedBy: "admin",
                      });
                    }}
                  ></Checkbox>
                  <span className="mr-3 text-secondprimary text-[12px] text-medium">
                    EC
                  </span>
                </div>
              </div>
              <CustomSwitch
                isProPublic={item?.isPublic}
                toggleSwitch={toggleSwitch}
                id={item?._id}
              />
              {item?.access?.length > 0 &&
                (item?.access?.includes("NC") ||
                  item?.access?.includes("RC")) && (
                  <div className="text-[12px] text-[#707070] text-medium mt-2">
                    {item?.access?.includes("NC")
                      ? "Make PG Cover image for Non Client"
                      : "Make 18+ Cover image for Regular Client and Elite Client"}
                  </div>
                )}
              {item?.access?.length > 0 &&
                (item?.access?.includes("NC") ||
                  item?.access?.includes("RC")) && (
                  <div className="flex flex-col mt-[5px] gap-2">
                    <Checkbox
                      isSelected={item?.makePlus}
                      size="md"
                      radius="sm"
                      classNames={{
                        base: cn(
                          "inline-flex w-full max-w-md",
                          "items-center justify-start",
                          "cursor-pointer rounded-lg gap-1"
                        ),
                        wrapper: cn(
                          "before:border-1 before:border-primary before:bg-transparent hover:bg-transparent custom-check before:rounded-[3px] rounded-[3px] transition-colors"
                        ),
                      }}
                      onChange={() => {
                        toggleSwitch(item?._id, {
                          makeCoverPhoto: item?.makeCover,
                          make18Photo: !item?.makePlus,
                        });
                      }}
                    >
                      <div className="text-secondprimary text-[12px] text-medium">
                        Make 18+ cover photo
                      </div>
                    </Checkbox>
                    {item?.access?.includes("NC") && (
                      <Checkbox
                        isSelected={item?.makeCover}
                        size="md"
                        radius="sm"
                        classNames={{
                          base: cn(
                            "inline-flex w-full max-w-md",
                            "items-center justify-start",
                            "cursor-pointer rounded-lg gap-1"
                          ),
                          wrapper: cn(
                            "before:border-1 before:border-primary before:rounded-[3px] rounded-[3px] transition-colors"
                          ),
                        }}
                        onChange={() => {
                          toggleSwitch(item?._id, {
                            makeCoverPhoto: !item?.makeCover,
                            make18Photo: item?.makePlus,
                          });
                        }}
                      >
                        <div className="text-secondprimary text-[12px] text-medium">
                          Make PG cover photo
                        </div>
                      </Checkbox>
                    )}
                  </div>
                )}
            </div>
          )}
        </>
      </div>
      <VerificationMultiProfileModal
        loading={loading}
        toggleSwitch={toggleSwitch}
        coustomData={coustomData}
        isOpen={isOpen == "sizeVerify"}
        onClose={handleActionClick}
      />
      <PhotoSliderModal
        isOpen={openImageSlide}
        onClose={() => setOpenImageSlide(false)}
        image={item?.url}
      />
    </>
  );
};

export default MultiProfileList;
