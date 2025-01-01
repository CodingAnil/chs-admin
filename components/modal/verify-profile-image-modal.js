"use client";

import { Modal, ModalContent, ModalBody } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import ImgCloseIcon from "@/icons/img-close-icon";
import UploadIcon from "@/icons/upload-icon";

const VerifyProfileImageModal = ({ isOpen, onClose, title, message }) => {
  const [govIdImage, setGovIdImage] = useState(null);
  const [selfieImage, setSelfieImage] = useState(null);
  // Handler for government ID image upload
  const handleGovIdUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setGovIdImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler for selfie upload
  const handleSelfieUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelfieImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handler to remove government ID image
  const handleRemoveGovIdImage = (e) => {
    e.stopPropagation();
    setGovIdImage(null);
  };

  // Handler to remove selfie image
  const handleRemoveSelfieImage = (e) => {
    e.stopPropagation();
    setSelfieImage(null);
  };
  return (
    <Modal
      size="lg"
      isOpen={isOpen}
      backdrop="blur"
      classNames={{
        backdrop: "bg-black bg-opacity-70",
      }}
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-secondaryShade1 backdrop-blur-lg max-w-[95%] md:max-w-[900px] rounded-[20px] border border-secondaryShade3 p-8 md:p-10 font-primary">
        <ModalBody className="text-white text-center p-0">
          <h1 className="text-2xl text-white leading-[31px]">{title}</h1>
          <p className="text-sm text-white font-normal mb-3">{message}</p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="border flex-1 flex items-center justify-center border-dashed bg-[#FFFFFF1A] border-darkGrey400 rounded-[12px] h-[250px] w-full md:w-auto relative">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleGovIdUpload}
                className=" hidden -z-10 relative"
                id="govIdInput"
              />

              {govIdImage ? (
                <>
                  <label className="cursor-pointer relative flex flex-col items-center justify-center w-full h-full p-4">
                    <Image
                      width={70}
                      height={70}
                      src={govIdImage}
                      alt="Government ID"
                      className="w-full h-full object-cover  max-h-[248px]"
                    />
                  </label>
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={handleRemoveGovIdImage}
                  >
                    <ImgCloseIcon />
                  </div>
                </>
              ) : (
                <>
                  <label
                    htmlFor="govIdInput"
                    className="cursor-pointer relative flex flex-col items-center justify-center w-full h-full p-4"
                  >
                    <div className="text-center flex justify-center mb-[15px]">
                      <UploadIcon />
                    </div>
                    <p className="text-[#fbfbfb] text-sm font-medium">
                      Upload image jpg or png file.
                    </p>
                  </label>
                </>
              )}
            </div>
            <div className="border flex-1 flex items-center justify-center border-dashed bg-[#FFFFFF1A] border-darkGrey400 rounded-[12px] h-[250px] w-full md:w-auto relative">
              <input
                type="file"
                accept="image/jpeg, image/png"
                onChange={handleSelfieUpload}
                className="hidden -z-10 relative"
                id="selfieInput"
              />

              {selfieImage ? (
                <>
                  <label className="cursor-pointer relative flex flex-col items-center justify-center w-full h-full p-4">
                    <Image
                      width={70}
                      height={70}
                      src={selfieImage}
                      alt="Selfie"
                      className="w-full h-full object-cover max-h-[248px]"
                    />
                  </label>
                  <div
                    className="absolute top-2 right-2 cursor-pointer"
                    onClick={handleRemoveSelfieImage}
                  >
                    <ImgCloseIcon />
                  </div>
                </>
              ) : (
                <>
                  <label
                    htmlFor="selfieInput"
                    className="cursor-pointer relative flex flex-col items-center justify-center w-full h-full p-4"
                  >
                    <div className="text-center flex justify-center mb-[15px]">
                      <UploadIcon />
                    </div>
                    <p className="text-[#fbfbfb] text-sm font-medium">
                      Upload selfie jpg or png file.
                    </p>
                  </label>
                </>
              )}
            </div>
          </div>
          <div className="flex justify-center gap-4.5 mt-4">
            <button
              className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
              onClick={onClose}
            >
              Cancel
            </button>
            <button className="bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7">
              Submit
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default VerifyProfileImageModal;
