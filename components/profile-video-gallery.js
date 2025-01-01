import React, { useState } from "react";
import { MdOutlineDeleteOutline } from "react-icons/md";
import ReactPlayer from "react-player";
import { capitalizeFirstLetter } from "../utils/model";
import CustomSwitch from "./common/custom-switch";
import VerificationMultiProfileModal from "./modal/verified-multiprofile-modal";
import { callPutApi } from "../services";
import CheckCircelIcon from "@/icons/check-circel-icon";
import { Checkbox, cn } from "@nextui-org/react";
import Loader from "./loaders/loader";

const ProfileVideoGallery = ({
  item,
  getAllData,
  userId,
  roleType,
  handleActionClick,
  isOpen,
  coustomData,
}) => {
  const [loading, setLoading] = useState(false);

  const toggleSwitch = async (id, data) => {
    console.log(id, data);
    try {
      if (id) {
        setLoading(true);
        const uploadResponse = await callPutApi(
          `/admin/model/content/update/${id}`,
          { ...data, userId }
        );
        if (!uploadResponse.status) throw new Error(uploadResponse.message);
        await getAllData(`admin/get-all-content/${userId}`, true);
        setLoading(false);
      }
    } catch (error) {
      console.error("Is privet content error ", error);
    }
  };

  return (
    <div className="w-full rounded-lg custom-react-player">
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
        <div className="relative w-full">
          <ReactPlayer
            url={item?.url}
            width="100%"
            height="100%"
            controls={true}
            playing={false}
            className="block"
          />
          <button
            onClick={() => handleActionClick("contentDelete", item)}
            className="bg-[#00000066] absolute top-2 right-2  w-[38px] h-[38px] rounded-full text-white flex justify-center items-center text-xl"
          >
            <MdOutlineDeleteOutline />
          </button>
          {roleType == "model" && (
            <div className="flex justify-end absolute bottom-2 right-2  items-center gap-2.5">
              <button
                onClick={() => handleActionClick("sizeVerify", item)}
                className={`${
                  item?.isChecked ? "verified" : item?.verified
                } rounded-[6px] text-[#fbfbfb] text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
              >
                <CheckCircelIcon />{" "}
                {item?.isChecked
                  ? "Verified"
                  : capitalizeFirstLetter(item?.verified)}
              </button>
            </div>
          )}
        </div>
      </>
      {roleType == "model" && (
        <div className="mt-3">
          <div className="flex  mb-3">
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
        </div>
      )}

      <VerificationMultiProfileModal
        toggleSwitch={toggleSwitch}
        coustomData={coustomData}
        isOpen={isOpen == "sizeVerify"}
        onClose={handleActionClick}
      />
    </div>
    // <div className="w-full rounded-lg custom-react-player">
    // <ReactPlayer
    //   url={item.url}
    //   width="100%"
    //   height="100%"
    //   controls={true}
    //   playing={false}
    //   className="block"
    // />
    // </div>
  );
};
export default ProfileVideoGallery;
