import ModalProfile1 from "@/images/modal1.png";
import {
  Modal,
  ModalContent,
  ModalBody,
  Checkbox,
  cn,
  ModalFooter,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReverificationModal from "./reverification-modal";
import { toastMessage } from "../../utils/configs/toast";
import { capitalizeFirstLetter } from "../../utils/model";
import ReactPlayer from "react-player";
import ButtonSpinner from "../loaders/buttonSpinner";

const VerificationMultiProfileModal = ({
  toggleSwitch,
  isOpen,
  coustomData,
  onClose,
  loading,
}) => {
  const [resendVerfication, setResendVerification] = useState(false);
  const [statusReason, setStatusReason] = useState("");
  const [docStatus, setDocStatus] = useState("");
  const [docApprove, setApprove] = useState("");
  const [scrollBehavior, setScrollBehavior] = useState("inside");

  console.log(coustomData, "coustomDatacoustomData");
  const handleUpdate = async () => {
    // if (!coustomData?.docUrl) {
    //   toastMessage("error", "Selfie document in not uploaded by model!");
    //   return;
    // }
    // if (!docStatus && !docApprove) {
    //   toastMessage("error", "Verification status is required!");
    //   return;
    // }

    try {
      let data = {
        verified:
          docStatus == "verify"
            ? "Approved"
            : docStatus == "rejected"
            ? "Rejected"
            : docApprove
            ? "Approved"
            : !docApprove
            ? "Pending"
            : capitalizeFirstLetter(docStatus) || "Pending",
        reason: statusReason || null,
        isChecked: docStatus == "verify" ? true : false,
        isApproved: docApprove ? true : false,
      };
      await toggleSwitch(coustomData?._id, data);
      toastMessage(
        "success",
        `Model Media is ${capitalizeFirstLetter(
          docStatus || docApprove || "Un-Approved"
        )}`
      );
      // // setLoading(true);
      // const response = await callPutApi(
      //   `admin/model-size-status/${userId}`,
      //   data
      // );
      // if (response?.status) {
      //   await getAllData(`/admin/modal/${userId}`);
      //   toastMessage(
      //     "success",
      //     `Cock Size verification ${capitalizeFirstLetter(docStatus)}`
      //   );
      // } else {
      //   toastMessage(
      //     "error",
      //     response?.message || "Cock Size verification Failed"
      //   );
      // }
    } catch (error) {
      console.error("Cock Size verification error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      handleClose(true);
    }
  };

  const handleUpdateStatus = async (values, event, type) => {
    if (type == docStatus) {
      setDocStatus("");
      if (type == "approved") {
        setApprove("");
        if (docStatus == "verify") {
          setDocStatus("");
        }
      }
      return;
    }
    if (type == docApprove) {
      setApprove("");
      if (docStatus == "verify") {
        setDocStatus("");
      }
      return;
    }
    if (type == "verify") {
      setApprove("approved");
      setDocStatus(type);
    }
    if (type == "approved") {
      setApprove("approved");
    }
    if (type == "rejected") {
      setDocStatus(type);
      setResendVerification(true);
    }
    if (values) {
      setStatusReason(values?.reason || null);
      setResendVerification(false);
    }
  };

  const handleClose = (isclose) => {
    setResendVerification(false);
    setDocStatus(coustomData?.verified?.toLowerCase());
    setApprove(coustomData?.isChecked ? "verify" : "");
    if (isclose) {
      onClose();
    }
  };

  useEffect(() => {
    if (coustomData) {
      let status =
        coustomData?.verified?.toLowerCase() == "rejected"
          ? "rejected"
          : coustomData?.verified?.toLowerCase() == "approved" &&
            coustomData?.isChecked
          ? "verify"
          : "";
      setDocStatus(status);
      setApprove(coustomData?.isApproved ? "approved" : "");
      console.log(coustomData, "coustomData");
    }
  }, [coustomData]);

  return (
    <>
      <Modal
        size="lg"
        isOpen={isOpen}
        backdrop="blur"
        hideCloseButton={true}
        placement="center"
        scrollBehavior={scrollBehavior}
      >
        <ModalContent className="bg-[#1A1D22]  custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-5 pb-[10px] font-primary">
          <ModalBody className="text-white text-center p-0 gap-0 custom-modal-scroll">
            <div className="block mb-3">
              <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-white mb-5">
                Verification
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
            </div>
            <div className="block px-6 md:px-8">
              <div className="flex gap-5 md:flex-row md:flex-nowrap flex-col mt-5">
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col justify-between h-full">
                    <div className="flex items-start justify-start mb-[10px]">
                      <div className="text-base font-bold text-white">
                        View uploaded media
                      </div>
                    </div>
                    <div className="text-center border relative  flex items-center justify-center flex-col border-dashed border-[#999999] bg-transparent rounded-xl  h-[300px]">
                      {coustomData?.url ? (
                        coustomData?.contentType?.toLowerCase() == "image" ? (
                          <Image
                            src={coustomData?.url}
                            alt="icon"
                            width={300}
                            height={200}
                            className="object-contain max-h-[260px]"
                          />
                        ) : (
                          <div className="p-2  max-h-[280px] w-full">
                            <ReactPlayer
                              url={coustomData?.url}
                              width="100%"
                              height="100%"
                              controls={true}
                              playing={false}
                              className="block object-contain"
                            />
                          </div>
                        )
                      ) : (
                        <p>No Document found</p>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <div className="flex flex-col justify-between">
                    <div className="flex items-start justify-start mb-[10px]">
                      <div className="text-base font-bold text-left text-white">
                        Compare selfie with "EliteMen" sign to uploaded media
                        for verification
                      </div>
                    </div>
                    <div className="text-center border relative  flex items-center justify-center flex-col border-dashed border-[#999999] bg-transparent rounded-xl  h-[300px]">
                      {coustomData?.docUrl ? (
                        coustomData?.contentType?.toLowerCase() == "image" ? (
                          <Image
                            src={coustomData?.docUrl}
                            alt="icon"
                            width={300}
                            height={250}
                            className="object-contain max-h-[260px]"
                          />
                        ) : (
                          <div className="p-2  max-h-[280px] w-full">
                            <ReactPlayer
                              url={coustomData?.docUrl}
                              width="100%"
                              height="100%"
                              controls={true}
                              playing={false}
                              className="block"
                            />
                          </div>
                        )
                      ) : (
                        <p>No Document found</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="w-full">
              <div className="flex justify-center max-w-[450px] mx-auto  mt-[10px] mb-4">
                <Checkbox
                  isSelected={docApprove === "approved"}
                  size="md"
                  radius="sm"
                  onChange={() => handleUpdateStatus(null, null, "approved")}
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
                >
                  <div className="text-white text-[12px] text-medium">
                    Approve
                  </div>
                </Checkbox>

                {coustomData?.docUrl && (
                  <Checkbox
                    isSelected={docStatus === "verify"}
                    size="md"
                    radius="sm"
                    onChange={() => handleUpdateStatus(null, null, "verify")}
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
                  >
                    <div className="text-white text-[12px] text-medium">
                      Verified
                    </div>
                  </Checkbox>
                )}
                <Checkbox
                  isSelected={docStatus === "rejected"}
                  size="md"
                  radius="sm"
                  onChange={(e) => handleUpdateStatus(null, null, "rejected")}
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
                >
                  <div className="text-white text-[12px] text-medium">
                    Resend for Reverification
                  </div>
                </Checkbox>
              </div>
              <div className="flex justify-center gap-4.5">
                <button
                  onClick={handleUpdate}
                  disabled={loading}
                  className="bg-yellow btn-bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
                >
                  Submit {loading && <ButtonSpinner />}
                </button>
                <button
                  onClick={() => handleClose(true)}
                  disabled={loading}
                  className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
                >
                  Cancel
                </button>
              </div>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ReverificationModal
        isOpen={resendVerfication}
        onClose={handleClose}
        onSubmit={handleUpdateStatus}
      />
    </>
  );
};

export default VerificationMultiProfileModal;
