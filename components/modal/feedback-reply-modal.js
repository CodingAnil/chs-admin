"use client";

import { Modal, ModalContent, ModalBody, Textarea } from "@nextui-org/react";
import Image from "next/image";
import ModelProfile from "@/images/modalico.svg";
import Link from "next/link";
import ErrInput from "../common/errorInput";
import useForm from "../../utils/hooks/formik_hook";
import { toastMessage } from "../../utils/configs/toast";
import { feedbackReplayValidate } from "../../utils/validations/profile";
import ButtonSpinner from "../loaders/buttonSpinner";
import { MdOutlineMail } from "react-icons/md";

const FeedbackReplyModal = ({
  isOpen,
  onClose,
  title,
  reviewText,
  feedbackUpdate,
}) => {
  const handleFormSubmit = async (data) => {
    setLoading(true);
    await feedbackUpdate(reviewText?._id, { ...data });
    setLoading(false);
    toastMessage("success", "Feedback replayed successful");
    handleClose();
  };

  const {
    formik,
    resetForm,
    setLoading,
    touched,
    errors,
    loading,
    handleSubmit,
  } = useForm({
    initialValues: {
      adminResponce: reviewText?.adminResponce || "",
    },
    validationFunction: feedbackReplayValidate,
    handleFormSubmit: handleFormSubmit,
  });

  const handleClose = () => {
    resetForm();
    onClose();
  };

  return (
    <Modal
      size="2xl"
      isOpen={isOpen}
      backdrop="blur"
      classNames={{
        backdrop: "bg-black bg-opacity-70",
      }}
      hideCloseButton={true}
      placement="center"
    >
      <ModalContent className="bg-[#1A1D22]  custom-dark-modal backdrop-blur-lg max-w-[95%] md:max-w-[745px] rounded-[20px] border border-primary px-0 pt-5 pb-[30px] font-primary">
        <ModalBody className="text-white p-0">
          <div className="block mb-3">
            <h2 className="text-2xl px-6 md:px-8 text-left font-medium text-white mb-5">
              {title}
            </h2>
            <div className="h-[1px] w-full bg-gradient-to-r from-[#353535] to-[#4e4c4c]"></div>
          </div>

          <div className="flex flex-col items-center justify-center gap-6">
            <div className="flex items-center gap-3 md:gap-8 md:flex-row flex-col">
              <Image
                src={ModelProfile}
                alt="Profile"
                className="rounded-full bg-[#6d6464] w-[120px] h-[120px] sm:w-[135px] sm:h-[135px] md:w-[155px] md:h-[155px] lg:w-[180px] lg:h-[180px]"
              />

              <div className="flex-1 py-4 md:py-0 gap-3 text-center md:text-left">
                <h2 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold mb-2">
                  {reviewText?.userId?.username || reviewText?.name || "--"}
                </h2>
                <div className="inline-flex justify-center md:justify-start space-x-2">
                  <div className="flex items-center pl-2">
                    <MdOutlineMail className="mr-2 text-primary text-xl" />
                    <p className="text-[#FBFBFB] text-xs sm:text-sm font-normal">
                      {reviewText?.userId?.email}
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 mt-4 text-center justify-center">
                  <Link
                    href={
                      reviewText?.userId?.model
                        ? `profile/model?id=${reviewText?.userId?._id}`
                        : `profile/client?id=${reviewText?.userId?._id}`
                    }
                    className="border border-primary rounded-md px-4 py-2"
                  >
                    View Profile
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-base text-white font-normal px-6">
              {reviewText?.description || "--"}
            </div>
            <div className="w-full mb-6 px-6">
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
                {...formik.getFieldProps("adminResponce")}
              />
              <ErrInput error={touched.adminResponce && errors.adminResponce} />
            </div>
          </div>
          <div className="flex justify-center gap-4.5 mt-4">
            <button
              className="bg-transparent text-white font-bold text-base rounded-lg border border-[#A6A6A6] py-3.5 px-7"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={loading}
              className="bg-primary rounded-lg text-white text-base font-bold py-3.5 px-7"
            >
              Reply {loading && <ButtonSpinner />}
            </button>
          </div>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default FeedbackReplyModal;
