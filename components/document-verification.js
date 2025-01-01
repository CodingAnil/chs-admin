"use client";

import ModalProfile1 from "@/images/modal1.png";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Checkbox, cn } from "@nextui-org/react";
import ReverificationModal from "./modal/reverification-modal";
import useMountData from "../utils/hooks/data_getting_hook";
import { callPutApi } from "../services";
import { toastMessage } from "../utils/configs/toast";
import { capitalizeFirstLetter } from "../utils/model";
import Loader from "./loaders/loader";
const DocumentVerfication = ({ userId, refreshData }) => {
  const [resendVerfication, setResendVerification] = useState(false);
  const [modelDoc, setModelDoc] = useState({ selfie: "", id: "" });
  const [docStatus, setDocStatus] = useState("");

  const { data, loading, getAllData, setLoading } = useMountData(
    userId ? `admin/model-doc/${userId}` : null
  );

  useEffect(() => {
    if (data?.length > 0) {
      const selfieUrl = data?.find((it) => it?.verificationType == "Selfie");
      const idUrl = data?.find((it) => it?.verificationType == "Identity");

      setModelDoc({ selfie: selfieUrl, id: idUrl });
      let doctype =
        idUrl?.status == "Rejected"
          ? "rejected"
          : idUrl?.status == "Approved"
          ? "approved"
          : "";
      setDocStatus(doctype);
    }
  }, [data]);

  const handleUpdate = async (values, event, sts) => {
    console.log(sts, docStatus, "handleClose");
    try {
      let data = {
        userId,
        status: capitalizeFirstLetter(sts || docStatus),
        reason: values?.reason || null,
      };
      setLoading(true);
      const response = await callPutApi(
        `admin/model-doc-status/${userId}`,
        data
      );

      if (response?.status) {
        toastMessage(
          "success",
          `Document verification ${capitalizeFirstLetter(sts || docStatus)}`
        );
        refreshData(`/admin/modal/${userId}`, true);
        // if (
        //   capitalizeFirstLetter(sts || docStatus)?.toLowerCase() === "approved"
        // ) {
        //   toastMessage("success", `Model profile is live now`);
        // }
      } else {
        toastMessage(
          "error",
          response?.message || "Document verification Failed"
        );
      }
    } catch (error) {
      console.error("Document verification error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
      setResendVerification(false);
    }
  };

  const handleUpdateStatus = async (type) => {
    if (!modelDoc?.id?.documentURL || !modelDoc?.selfie?.documentURL) {
      toastMessage(
        "error",
        "Document url or document selfie image in not uploded!"
      );
      return;
    }
    if (type == docStatus) return;
    setDocStatus(type);
    if (type == "rejected") {
      setResendVerification(true);
    } else {
      handleUpdate(null, null, type);
    }
  };

  const handleClose = () => {
    setResendVerification(false);
    const idUrl = data?.find((it) => it?.verificationType == "Identity");
    let doctype =
      idUrl?.status == "Rejected"
        ? "rejected"
        : idUrl?.status == "Approved"
        ? "approved"
        : "";
    setDocStatus(doctype);
  };

  return (
    <div className="bg-white py-2 rounded-lg shadow-md mb-4 px-4 mt-5">
      <h2 className="text-primary text-xl font-medium mt-3">Verification</h2>
      <div className="flex gap-5 md:flex-row md:flex-nowrap flex-col mt-5">
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-between h-full">
            <div className="flex items-start justify-start mb-[10px]">
              <div className="text-base font-bold text-secondprimary">
                View uploaded ID image
              </div>
            </div>
            <div className="text-center border relative  flex items-center justify-center flex-col border-dashed border-[#999999] bg-transparent rounded-xl  h-[300px]">
              {modelDoc?.id?.documentURL ? (
                <Image
                  src={modelDoc?.id?.documentURL}
                  alt="icon"
                  width={300}
                  height={200}
                  className="object-contain max-h-[260px]"
                />
              ) : (
                <Loader label="loading..." />
              )}
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="flex flex-col justify-between">
            <div className="flex items-start justify-start mb-[10px]">
              <div className="text-base font-bold text-secondprimary">
                Compare selfie with "EliteMen" sign to uploaded images for
                verification
              </div>
            </div>
            <div className="text-center border relative  flex items-center justify-center flex-col border-dashed border-[#999999] bg-transparent rounded-xl  h-[300px]">
              {modelDoc?.selfie?.documentURL ? (
                <Image
                  src={modelDoc?.selfie?.documentURL}
                  alt="icon"
                  width={300}
                  height={260}
                  className="object-contain max-h-[260px]"
                />
              ) : (
                <Loader label="loading..." />
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
          onChange={() => handleUpdateStatus("approved")}
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
          <div className="text-secondprimary text-[12px] text-medium">
            Approve Verification
          </div>
        </Checkbox>
        <Checkbox
          isSelected={docStatus === "rejected"}
          size="md"
          radius="sm"
          onChange={(e) => handleUpdateStatus("rejected")}
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
          <div className="text-secondprimary text-[12px] text-medium">
            Resend for Reverification
          </div>
        </Checkbox>
      </div>
      <ReverificationModal
        loading={loading}
        isOpen={resendVerfication}
        onClose={handleClose}
        onSubmit={handleUpdate}
      />
    </div>
  );
};
export default DocumentVerfication;
