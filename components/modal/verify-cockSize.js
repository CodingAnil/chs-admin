import ModalProfile1 from "@/images/modal1.png";
import {
  Modal,
  ModalContent,
  ModalBody,
  Checkbox,
  cn,
} from "@nextui-org/react";
import Image from "next/image";
import ReverificationModal from "./reverification-modal";
import { capitalizeFirstLetter } from "../../utils/model";
import { callPutApi } from "../../services";
import { toastMessage } from "../../utils/configs/toast";
import { useState } from "react";
import ButtonSpinner from "../loaders/buttonSpinner";

const VerificationCockSize = ({
  isOpen,
  cockSize,
  cockSizeUrl,
  docStatus,
  verifyUser,
  onClose,
  data,
  setDocStatus,
  userId,
  getAllData,
  getStatusData,
}) => {
  const [resendVerfication, setResendVerification] = useState(false);
  const [statusReason, setStatusReason] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async () => {
    try {
      if (!docStatus) {
        toastMessage("error", "Verification status is required!");
        return;
      }
      let data = {
        userId,
        status: capitalizeFirstLetter(docStatus),
        reason: statusReason || null,
      };
      setLoading(true);
      const response = await callPutApi(
        `admin/model-size-status/${userId}`,
        data
      );
      if (response?.status) {
        await getAllData(`/admin/modal/${userId}`);
        onClose();
        toastMessage(
          "success",
          `Cock Size verification ${capitalizeFirstLetter(docStatus)}`
        );
      } else {
        toastMessage(
          "error",
          response?.message || "Cock Size verification Failed"
        );
      }
    } catch (error) {
      console.error("Cock Size verification error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
      setResendVerification(false);
    }
  };

  const handleUpdateStatus = async (values, event, type) => {
    if (type == docStatus) return;
    if (type) {
      setDocStatus(type);
    }
    if (type == "rejected") {
      setResendVerification(true);
    }
    if (values) {
      setStatusReason(values?.reason || null);
      setResendVerification(false);
    }
  };

  const handleClose = () => {
    setResendVerification(false);
    const idUrl = data?.find((it) => it?.verificationType == "Size");
    let doctype =
      idUrl?.status == "Rejected"
        ? "rejected"
        : idUrl?.status == "Approved"
        ? "approved"
        : "";
    setDocStatus(doctype);
  };

  const handleMainClose = () => {
    // setCancelState((pre) => !pre);
    getStatusData(`admin/model-doc/${userId}`);
    onClose();
  };

  return (
    <>
      <Modal
        size="lg"
        isOpen={isOpen}
        backdrop="blur"
        hideCloseButton={true}
        placement="center"
      >
        <ModalContent className="bg-[#1A1D22]  custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-5 pb-[30px] font-primary">
          <ModalBody className="text-white text-center p-0 gap-0">
            <div className="block mb-3">
              <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-white mb-5">
                Verify Cock size
              </h2>
              <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
            </div>
            <div className="block px-6 md:px-8">
              <div className="flex gap-5 md:flex-row md:flex-nowrap flex-col mt-5">
                <div className="w-full">
                  <div className="flex flex-col justify-between">
                    <div className="flex items-start justify-start mb-[10px]">
                      <div className="text-base font-bold text-left text-white">
                        Write “Paragon” and today’s date on a piece of paper,
                        then take a photo/video with it while placing a ruler
                        directly on top of your erect penis and pressing it as
                        far into the pubic bone as it will go. Rulers placed on
                        the side or under the penis will not be accepted. For
                        best results, take picture/video when highly aroused or
                        close to orgasm.
                      </div>
                    </div>
                    <div>Cock Size : {cockSize || 0}</div>
                    <div className="text-center border relative  flex items-center justify-center flex-col border-dashed border-[#999999] bg-transparent rounded-xl  h-[300px]">
                      {cockSizeUrl ? (
                        <Image
                          src={cockSizeUrl}
                          alt="icon"
                          width={300}
                          height={180}
                          className="object-contain max-h-[180px]"
                        />
                      ) : (
                        <>Image Not Uploaded!</>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center max-w-[450px] mx-auto  mt-[30px] mb-4">
                <Checkbox
                  isSelected={docStatus === "approved"}
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
                  disabled={loading}
                  onClick={handleUpdate}
                  className="bg-yellow btn-bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
                >
                  Submit {loading && <ButtonSpinner />}
                </button>
                <button
                  disabled={loading}
                  onClick={handleMainClose}
                  className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
                >
                  Cancel
                </button>
              </div>
            </div>
          </ModalBody>
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

export default VerificationCockSize;
