"use client";

import React, { useEffect, useState } from "react";
import { Modal, ModalContent, ModalBody, Textarea } from "@nextui-org/react";
import { BsStarFill } from "react-icons/bs";
import { reviewValidate } from "../../utils/validations/profile";
import { proWordsValidate } from "../../utils/validations/settings";
import { toastMessage } from "../../utils/configs/toast";
import ButtonSpinner from "../loaders/buttonSpinner";
import ErrInput from "../common/errorInput";
import useForm from "../../utils/hooks/formik_hook";
import { callPostApi, callPutApi } from "../../services";

const AddProhibitedWordModal = ({
  isOpen,
  onClose,
  title,
  subTitle,
  getAllData,
  editWord,
}) => {
  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      const response = !editWord
        ? await callPostApi(`admin/add/prohibited-words`, {
            words: data?.word?.split(",")?.map((w) => w?.trim()),
          })
        : await callPutApi(`admin/prohibited-word/${editWord?._id}`, {
            word: data?.word?.trim(),
          });

      if (response?.status) {
        toastMessage("success", response?.message);
        getAllData(`/admin/prohibited-words`);
        onClose();
      } else {
        toastMessage("error", response?.message || "Operation failed");
      }
    } catch (error) {
      console.error("Add prohibited word error:", error);
      toastMessage("error", "An unexpected error occurred");
    } finally {
      setLoading(false);
      handleCancel();
    }
  };

  const {
    loading,
    handleSubmit,
    touched,
    errors,
    setLoading,
    formik,
    resetForm,
  } = useForm({
    initialValues: {
      word: editWord?.word || [],
    },
    validationFunction: proWordsValidate,
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
              {title}
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
          </div>
          <div className="block px-6 md:px-8">
            <div>
              <h4 className="text-base font-medium text-[#f3f0f3] text-left mb-[9px]">
                {subTitle}
              </h4>
            </div>

            <form onSubmit={handleSubmit}>
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
                  placeholder="Add word text"
                  {...formik.getFieldProps("word")}
                />
                <ErrInput error={touched.word && errors.word} />
              </div>
              <div className="flex justify-center gap-4.5">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
                >
                  Confirm {loading && <ButtonSpinner />}
                </button>
                <button
                  type="button"
                  disabled={loading}
                  onClick={handleCancel}
                  className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default AddProhibitedWordModal;
