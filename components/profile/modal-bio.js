import CheckCircelIcon from "@/icons/check-circel-icon";
import { useEffect, useState } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";
import {
  bioContent,
  personalPreferences,
  physicalCharacteristics,
  sexualHealthPreferences,
} from "../../utils/constants";
import { getPersonalValue } from "../../utils/model";
import VerificationCockSize from "../modal/verify-cockSize";
import useMountData from "../../utils/hooks/data_getting_hook";
import { toastMessage } from "../../utils/configs/toast";
import { renderHighlightedEachText, renderHighlightedText } from "../../utils";

const ModalBio = ({
  userData,
  userId,
  getAllData,
  roleType,
  prohibitedWords,
}) => {
  const [showMore, setShowMore] = useState(false);
  const [cockSizeUrl, setCockSizeUrl] = useState(null);
  const [docStatus, setDocStatus] = useState("");
  let model = roleType == "model" ? userData?.model : userData?.client;

  const {
    data,
    loading,
    isOpen,
    setLoading,
    handleOpenMod,
    getAllData: getStatusData,
  } = useMountData(
    roleType == "model" && userId ? `admin/model-doc/${userId}` : null
  );

  useEffect(() => {
    if (data?.length > 0 && roleType == "model") {
      const sizeUrl = data?.find((it) => it?.verificationType == "Size");

      setCockSizeUrl(sizeUrl?.documentURL);
      let doctype =
        sizeUrl?.status == "Rejected"
          ? "rejected"
          : sizeUrl?.status == "Approved"
          ? "approved"
          : "";
      console.log(doctype, "doctype");
      setDocStatus(doctype);
    }
  }, [data]);

  const handleOpenModal = () => {
    if (!cockSizeUrl) {
      toastMessage("error", "Cock Size image in not uploded!");
      return;
    }
    handleOpenMod("verifyCock");
  };

  return (
    <div className="bg-white text-secondprimary  rounded-lg shadow-md w-full py-5  mt-6 ">
      <h2 className="text-xl font-semibold text-primary mb-4 px-5">Bio</h2>
      <div className=" relative details-gradient"></div>
      <div className="px-5 pt-3 pb-4">
        <h4 className="text-base font-medium text-secondprimary mb-2">
          {renderHighlightedEachText(model?.heading, prohibitedWords)}{" "}
        </h4>
        {model?.bio && (
          <p className="text-secondprimary text-sm font-normal">
            {showMore
              ? renderHighlightedEachText(model?.bio, prohibitedWords)
              : renderHighlightedEachText(
                  `${model?.bio.substring(0, 200)}`,
                  prohibitedWords
                )}

            {model?.bio?.length > 200 && (
              <span
                onClick={() => setShowMore(!showMore)}
                className="text-primary text-sm font-bold cursor-pointer ml-1"
              >
                {showMore ? "Show Less" : "...See More"}
              </span>
            )}
          </p>
        )}
      </div>

      <div className=" relative details-gradient"></div>
      <div className="flex md:flex-row flex-col flex-wrap xl:flex-nowrap pt-5 w-full  px-5 ">
        <div className="gap-3 flex flex-col md:w-[48%] xl:w-2/6 mb-4">
          <h3 className="text-xl font-medium text-primary">
            Personal Preferences
          </h3>
          {personalPreferences.map((pref, index) => (
            <div key={index} className="flex items-center">
              <span className="min-w-[90px] text-secondprimary text-sm font-normal">
                {pref.label}:{" "}
                <span className="text-base font-medium   text-secondprimary">
                  {getPersonalValue(model?.stats, pref.label) || "--"}
                </span>
              </span>
            </div>
          ))}
        </div>

        <div className="gap-3 flex flex-col md:[48%] xl:w-2/6 mb-4">
          <h3 className="text-xl font-medium text-primary">
            Physical Characteristics
          </h3>
          {physicalCharacteristics.map((pref, index) => (
            <div key={index} className="flex items-center">
              <span className="min-w-[90px] text-secondprimary text-sm font-normal">
                {pref.label}:
              </span>
              <span className="text-base font-medium  text-secondprimary">
                {getPersonalValue(model?.stats, pref.label) || "--"}
              </span>
            </div>
          ))}
        </div>

        <div className="gap-3 flex flex-col w-full xl:w-2/6">
          <h3 className="text-xl font-medium text-primary">
            Sexual Health & Preferences
          </h3>
          {sexualHealthPreferences.map((pref, index) => (
            <div key={index} className="flex ">
              <span className="min-w-[120px] mt-[2px] text-secondprimary text-sm font-normal">
                {pref.label}:{" "}
              </span>
              <div className="flex items-center flex-wrap gap-2">
                <span className={`text-base font-medium `}>
                  {" "}
                  {getPersonalValue(model?.stats, pref.label) || "--"}
                </span>
                {pref.statusText &&
                  model?.stats?.cockSize &&
                  roleType == "model" && (
                    <div className="flex justify-end items-center gap-2.5">
                      {model?.stats?.cockStatus === "Approved" ? (
                        <button
                          className={`Approved rounded-[6px] whitespace-nowrap text-white text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                          onClick={handleOpenModal}
                        >
                          <CheckCircelIcon /> Verified
                        </button>
                      ) : model?.stats?.cockStatus === "Requested" ? (
                        <button
                          className={`Requested rounded-[6px] whitespace-nowrap text-white text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                          onClick={handleOpenModal}
                        >
                          <CheckCircelIcon /> Requested
                        </button>
                      ) : model?.stats?.cockStatus === "Rejected" ? (
                        <button
                          className={`Rejected rounded-[6px] whitespace-nowrap text-white text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                          onClick={handleOpenModal}
                        >
                          <CheckCircelIcon /> Rejected
                        </button>
                      ) : (
                        <button
                          className={`Pending rounded-[6px] text-white text-xs font-medium px-2 py-1 gap-1 flex items-center justify-center`}
                          onClick={handleOpenModal}
                        >
                          <IoIosCloseCircleOutline className="text-xl" />{" "}
                          
                        </button>
                      )}
                    </div>
                  )}
              </div>
            </div>
          ))}
        </div>
      </div>
      <VerificationCockSize
        userId={userId}
        setDocStatus={setDocStatus}
        data={data}
        cockSizeUrl={cockSizeUrl}
        cockSize={model?.stats?.cockSize}
        docStatus={docStatus}
        isOpen={isOpen == "verifyCock"}
        onClose={handleOpenMod}
        getAllData={getAllData}
        getStatusData={getStatusData}
      />
    </div>
  );
};

export default ModalBio;
