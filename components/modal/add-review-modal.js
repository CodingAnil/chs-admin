"use client";

import React, { useState } from "react";
import { Modal, ModalContent, ModalBody, Textarea } from "@nextui-org/react";
import { BsStarFill } from "react-icons/bs";
import useForm from "../../utils/hooks/formik_hook";
import ErrInput from "../common/errorInput";
import ButtonSpinner from "../loaders/buttonSpinner";
import {
  reviewValidate,
  validateSocialLinks,
} from "../../utils/validations/profile";
import { toastMessage } from "../../utils/configs/toast";

const AddReviewModal = ({ isOpen, onClose, coustomData, reviewStatus }) => {
  const handleFormSubmit = async (data) => {
    setLoading(true);
    await reviewStatus(coustomData?._id, { ...data, status: "Approved" });
    setLoading(false);
    toastMessage("success", "Review updated successful");
    resetForm();
    onClose();
  };

  const {
    loading,
    handleSubmit,
    touched,
    errors,
    setLoading,
    formik,
    resetForm,
    values,
    handleSelect,
  } = useForm({
    initialValues: {
      comments: coustomData?.comments || "",
      rating: coustomData?.rating,
    },
    validationFunction: reviewValidate,
    handleFormSubmit: handleFormSubmit,
  });

  const handleCancel = () => {
    resetForm();
    onClose();
  };

  return (
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
            <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-primary mb-5">
              Edit Review
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
          </div>
          <div className="block px-6 md:px-8">
            <div>
              <h4 className="text-base font-medium text-[#f3f0f3] text-left mb-[9px]">
                Rating
              </h4>
              <div className="flex items-center w-full mb-5">
                <div className="flex items-center justify-start">
                  {[...Array(5)].map((_, index) => (
                    <button
                      className="mr-2"
                      key={index}
                      onClick={() => handleSelect("rating", index + 1)}
                      {...formik.getFieldProps("rating")}
                    >
                      {values?.rating > index ? (
                        <BsStarFill className="fill-primary text-xl" />
                      ) : (
                        <BsStarFill className="fill-[#484A4E] text-xl" />
                      )}
                    </button>
                  ))}
                </div>
                <span className="font-bold text-[#f3f0f3] text-sm ml-2">
                  {values?.rating}/5
                </span>
              </div>
              <ErrInput error={touched.rating && errors.rating} />
            </div>
            <div className="w-full mb-6">
              <Textarea
                classNames={{
                  base: "max-w-full w-full textarea-field",
                  mainWrapper: "h-full",
                  input: "text-small resize-y min-h-[140px]",
                  inputWrapper:
                    "h-full font-normal text-white bg-[#484a4e] focus:bg-[#484a4e] hover:bg-[#484a4e]",
                }}
                color="#ffffff"
                placeholder="Write a review"
                {...formik.getFieldProps("comments")}
              />
              <ErrInput error={touched.comments && errors.comments} />
            </div>
            <div className="flex justify-center gap-4.5">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
              >
                Submit & Approve {loading && <ButtonSpinner />}
              </button>
              <button
                disabled={loading}
                onClick={handleCancel}
                className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
              >
                Cancel
              </button>
            </div>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddReviewModal;
