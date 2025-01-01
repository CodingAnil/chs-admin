"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalBody, ModalHeader } from "@nextui-org/react";
import { MdClose } from "react-icons/md";

const PhotoSlideModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      size="sm"
      isOpen={isOpen}
      backdrop="blur"
      // onClose={onClose}
      hideCloseButton={true}
      placement="center"
      scrollBehavior="inside"
    >
      <ModalContent className="bg-[#1A1D22] custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-0 pb-[30px] font-primary">
        <ModalHeader className="flex justify-between gap-1">
          <h2 className="text-white text-xl ">Profile Image</h2>
          <button className="text-white border-none bg-transparent p-0">
            <MdClose onClick={onClose} className="text-xl" />
          </button>
        </ModalHeader>
        <ModalBody className="text-white text-center p-0 gap-0">
          {/* Image Slider */}
          <div className="relative overflow-y-auto flex justify-center  py-1 px-0">
            <img src={image || ""} className="w-auto max-w-[320px] h-auto rounded-lg" />
          </div>

          {/* Close Button */}
          {/* <div className="flex justify-center mt-5">
            <button
              onClick={onClose}
              className="border border-white text-base font-bold text-white py-3 px-6 rounded-md"
            >
              Cancel
            </button>
          </div> */}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default PhotoSlideModal;
